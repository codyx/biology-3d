#!/usr/bin/env node

import { basename, dirname, extname, resolve } from "node:path";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { constants } from "node:fs";

const API_BASE = "https://api.tripo3d.ai/v2/openapi";

const specimens = [
  specimen("plant", "Plant Cell", "assets/plant-cutout.png", "assets/plant-tripo.glb", "assets/plant-cell-realistic.prompt.txt"),
  specimen("white", "White Blood Cell", "assets/white-cutout.png", "assets/white-tripo.glb", "assets/white-blood-cell-realistic.prompt.txt"),
  specimen("neuron", "Neuron", "assets/neuron-cutout.png", "assets/neuron-tripo.glb", "assets/neuron-realistic.prompt.txt"),
  specimen("epithelial", "Epithelial Cell", "assets/epithelial-cutout.png", "assets/epithelial-tripo.glb", "assets/epithelial-cell-realistic.prompt.txt"),
  specimen("bacteria", "Bacteria Cell", "assets/bacteria-cutout.png", "assets/bacteria-tripo.glb", "assets/bacteria-cell-realistic.prompt.txt"),
  specimen("animal", "Animal Cell", "assets/animal-cutout.png", "assets/animal-tripo.glb", "assets/animal-cell-realistic.prompt.txt"),
  specimen("muscle", "Muscle Cell", "assets/muscle-cutout.png", "assets/muscle-tripo.glb", "assets/muscle-cell-realistic.prompt.txt"),
  specimen("protocell", "Protocell", "assets/protocell-cutout.png", "assets/protocell-tripo.glb", "assets/protocell-realistic.prompt.txt", "origin"),
  specimen("progenote", "Progenote", "assets/progenote-cutout.png", "assets/progenote-tripo.glb", "assets/progenote-realistic.prompt.txt", "origin"),
  specimen("rna-world", "RNA World", "assets/rna-world-cutout.png", "assets/rna-world-tripo.glb", "assets/rna-world-realistic.prompt.txt", "origin"),
  specimen(
    "hydrothermal-vent",
    "Hydrothermal Vent",
    "assets/hydrothermal-vent-cutout.png",
    "assets/hydrothermal-vent-tripo.glb",
    "assets/hydrothermal-vent-realistic.prompt.txt",
    "origin",
  ),
  specimen("luca", "LUCA", "assets/luca-cutout.png", "assets/luca-tripo.glb", "assets/luca-realistic.prompt.txt", "origin"),
];

const args = parseArgs(process.argv.slice(2));
const apiKey = process.env.TRIPO_API_KEY || process.env.TRIPO3D_API_KEY || process.env.TRIPO_TOKEN;
const modelVersion = args["model-version"] || process.env.TRIPO_MODEL_VERSION || "P1-20260311";
const pollIntervalMs = Number(args.interval || process.env.TRIPO_POLL_INTERVAL_MS || 5000);
const timeoutMs = Number(args.timeout || process.env.TRIPO_TIMEOUT_MS || 15 * 60 * 1000);
const concurrency = Math.max(1, Number(args.concurrency || process.env.TRIPO_CONCURRENCY || 1));
const continueOnError = Boolean(args["continue-on-error"]);
const force = Boolean(args.force);
const dryRun = Boolean(args["dry-run"]);
const printPrompts = Boolean(args["print-prompts"]);

if (args.help) {
  printHelp();
  process.exit(0);
}

if (args.list) {
  printTargets(specimens);
  process.exit(0);
}

const targets = selectTargets(args);
if (targets.length === 0) {
  throw new Error("No Tripo targets selected.");
}

if (args["task-id"] && targets.length !== 1) {
  throw new Error("--task-id can only be used with one target. Add --cell <id> or use --input/--output.");
}

if (printPrompts) {
  await printTargetPrompts(targets);
  if (dryRun) process.exit(0);
}

if (dryRun) {
  printTargets(targets);
  process.exit(0);
}

if (!apiKey) {
  console.error("Missing TRIPO_API_KEY. Export it, then run one of:");
  console.error("  node scripts/generate-tripo-plant.mjs --all");
  console.error("  node scripts/generate-tripo-plant.mjs --cells neuron,white,bacteria");
  process.exit(1);
}

const results = await runQueue(targets, concurrency, async (target) => runTarget(target));
const failed = results.filter((result) => result.status === "failed");
const generated = results.filter((result) => result.status === "generated");
const skipped = results.filter((result) => result.status === "skipped");

console.log("");
console.log(`Tripo generation complete: ${generated.length} generated, ${skipped.length} skipped, ${failed.length} failed.`);
if (failed.length) {
  failed.forEach((result) => console.error(`- ${result.target.id}: ${result.error?.message || result.error}`));
  process.exitCode = 1;
}

async function runTarget(target) {
  try {
    if (!force && !args["task-id"] && (await fileExists(target.outputPath))) {
      console.log(`Skipping ${target.id}: ${target.outputPath} already exists. Use --force to regenerate.`);
      return { status: "skipped", target };
    }

    await assertReadable(target.inputPath, `Missing source image for ${target.id}`);
    const prompt = await readOptionalText(target.promptPath);

    console.log(`\n=== ${target.name} (${target.id}) ===`);
    console.log(`Source: ${target.inputPath}`);
    if (target.promptPath) console.log(`Prompt: ${target.promptPath}${prompt ? "" : " (missing, continuing without metadata)"}`);
    console.log(`Output: ${target.outputPath}`);

    const taskId = args["task-id"] || (await createImageToModelTask(target));
    const task = await waitForTask(taskId, target.id);
    const modelUrl = task.output?.pbr_model || task.output?.model || task.output?.base_model;
    if (!modelUrl) {
      throw new Error(`Task ${taskId} succeeded but did not return a downloadable model URL`);
    }

    await downloadModel(modelUrl, target.outputPath);
    await writeFile(
      `${target.outputPath}.json`,
      `${JSON.stringify(
        {
          task_id: taskId,
          specimen_id: target.id,
          specimen_name: target.name,
          group: target.group,
          source: target.inputPath,
          prompt_path: target.promptPath,
          prompt,
          model_version: modelVersion,
          output: task.output,
        },
        null,
        2,
      )}\n`,
    );

    console.log(`Saved Tripo model for ${target.id}: ${target.outputPath}`);
    return { status: "generated", target };
  } catch (error) {
    if (!continueOnError) throw error;
    console.error(`Failed ${target.id}: ${error.message}`);
    return { status: "failed", target, error };
  }
}

async function createImageToModelTask(target) {
  const fileToken = await uploadImage(target.inputPath);
  const payload = {
    type: "image_to_model",
    model_version: modelVersion,
    file: {
      type: tripoFileType(target.inputPath),
      file_token: fileToken,
    },
    texture: true,
    pbr: true,
    texture_quality: "detailed",
    texture_alignment: "original_image",
    orientation: "align_image",
    enable_image_autofix: true,
    compress: "",
    render_image: true,
  };

  if (args["face-limit"]) payload.face_limit = Number(args["face-limit"]);
  if (process.env.TRIPO_MODEL_SEED) payload.model_seed = Number(process.env.TRIPO_MODEL_SEED);
  if (process.env.TRIPO_TEXTURE_SEED) payload.texture_seed = Number(process.env.TRIPO_TEXTURE_SEED);

  const data = await tripoJson("/task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const id = data.task_id;
  if (!id) throw new Error(`Tripo create task response did not include task_id: ${JSON.stringify(data)}`);
  console.log(`Created Tripo task for ${target.id}: ${id}`);
  return id;
}

async function uploadImage(filePath) {
  const buffer = await readFile(filePath);
  const formData = new FormData();
  formData.append("file", new Blob([buffer], { type: mimeType(filePath) }), basename(filePath));

  const data = await tripoJson("/upload/sts", {
    method: "POST",
    body: formData,
  });
  const token = data.image_token || data.file_token;
  if (!token) throw new Error(`Tripo upload response did not include image_token: ${JSON.stringify(data)}`);
  console.log(`Uploaded source image: ${basename(filePath)}`);
  return token;
}

async function waitForTask(id, targetId) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    const task = await tripoJson(`/task/${id}`);
    const status = task.status || "unknown";
    const progress = Number.isFinite(task.progress) ? `${task.progress}%` : "n/a";
    console.log(`Tripo task ${id} (${targetId}): ${status} (${progress})`);

    if (status === "success") return task;
    if (["failed", "banned", "expired", "cancelled", "unknown"].includes(status)) {
      throw new Error(`Tripo task ${id} ended with status "${status}": ${JSON.stringify(task)}`);
    }
    await sleep(pollIntervalMs);
  }
  throw new Error(`Timed out waiting for Tripo task ${id}`);
}

async function downloadModel(url, output) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Model download failed: ${response.status} ${response.statusText}`);
  const data = Buffer.from(await response.arrayBuffer());
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, data);
}

async function tripoJson(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Tripo returned non-JSON response (${response.status}): ${text.slice(0, 300)}`);
  }
  if (!response.ok || (typeof json.code === "number" && json.code !== 0)) {
    throw new Error(`Tripo API error (${response.status}): ${JSON.stringify(json)}`);
  }
  return json.data || json;
}

function selectTargets(parsedArgs) {
  if (parsedArgs.input || parsedArgs.source || parsedArgs.output) {
    const inputPath = resolve(parsedArgs.input || parsedArgs.source || "assets/plant-cutout.png");
    const outputPath = resolve(parsedArgs.output || "assets/plant-tripo.glb");
    const promptPath = parsedArgs.prompt ? resolve(parsedArgs.prompt) : "";
    return [
      {
        id: parsedArgs.cell || "custom",
        name: parsedArgs.name || parsedArgs.cell || "Custom Specimen",
        group: "custom",
        inputPath,
        outputPath,
        promptPath,
      },
    ];
  }

  if (parsedArgs.all) return specimens;
  if (parsedArgs.group) return specimens.filter((target) => target.group === parsedArgs.group);

  const rawCells = parsedArgs.cells || parsedArgs.cell;
  if (rawCells) {
    const ids = String(rawCells)
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean);
    return ids.map((id) => findTarget(id));
  }

  return [findTarget("plant")];
}

function findTarget(id) {
  const normalized = id.toLowerCase();
  const target = specimens.find((candidate) => candidate.id === normalized || candidate.name.toLowerCase() === normalized);
  if (!target) {
    throw new Error(`Unknown specimen "${id}". Run --list to see valid ids.`);
  }
  return target;
}

async function runQueue(items, limit, worker) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function runNext() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      try {
        results[currentIndex] = await worker(items[currentIndex]);
      } catch (error) {
        if (!continueOnError) throw error;
        results[currentIndex] = { status: "failed", target: items[currentIndex], error };
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, runNext));
  return results;
}

function parseArgs(argv) {
  const parsed = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) continue;
    const [rawKey, inlineValue] = arg.slice(2).split("=", 2);
    if (inlineValue !== undefined) {
      parsed[rawKey] = inlineValue;
    } else if (argv[index + 1] && !argv[index + 1].startsWith("--")) {
      parsed[rawKey] = argv[index + 1];
      index += 1;
    } else {
      parsed[rawKey] = true;
    }
  }
  return parsed;
}

function specimen(id, name, inputPath, outputPath, promptPath, group = "cell") {
  return {
    id,
    name,
    group,
    inputPath: resolve(inputPath),
    outputPath: resolve(outputPath),
    promptPath: resolve(promptPath),
  };
}

async function assertReadable(filePath, message) {
  try {
    await access(filePath, constants.R_OK);
  } catch {
    throw new Error(`${message}: ${filePath}`);
  }
}

async function fileExists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function readOptionalText(filePath) {
  if (!filePath || !(await fileExists(filePath))) return "";
  return readFile(filePath, "utf8");
}

async function printTargetPrompts(targets) {
  for (const target of targets) {
    const prompt = await readOptionalText(target.promptPath);
    console.log(`\n--- ${target.id}: ${target.name} ---`);
    console.log(prompt || `(missing prompt file: ${target.promptPath})`);
  }
}

function printTargets(targets) {
  targets.forEach((target) => {
    console.log(`${target.id.padEnd(18)} ${target.group.padEnd(6)} ${target.name} -> ${target.outputPath}`);
  });
}

function printHelp() {
  console.log(`
Usage:
  node scripts/generate-tripo-plant.mjs                         # plant only, backward-compatible
  node scripts/generate-tripo-plant.mjs --all                   # all app specimens
  node scripts/generate-tripo-plant.mjs --group cell            # biological cells only
  node scripts/generate-tripo-plant.mjs --group origin          # life-origin models only
  node scripts/generate-tripo-plant.mjs --cells neuron,white    # selected ids

Options:
  --force                 Regenerate even if output GLB already exists
  --continue-on-error     Keep going if one model fails
  --concurrency 2         Run more than one Tripo task at once
  --face-limit 50000      Pass face_limit to Tripo
  --model-version VALUE   Default: P1-20260311
  --timeout MS            Default: 900000
  --interval MS           Default: 5000
  --print-prompts         Print prompt metadata stored beside each source image
  --dry-run               List selected targets without calling the API
  --list                  List every configured target

Environment:
  TRIPO_API_KEY           Required unless --dry-run or --list is used
  TRIPO_MODEL_SEED        Optional deterministic model seed
  TRIPO_TEXTURE_SEED      Optional deterministic texture seed
`);
}

function mimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  return "image/jpeg";
}

function tripoFileType(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (ext === ".png") return "png";
  if (ext === ".webp") return "webp";
  return "jpg";
}

function sleep(ms) {
  return new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
}
