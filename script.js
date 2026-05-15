const cellTypes = [
  {
    id: "plant",
    name: "Plant Cell",
    subtitle: "Eukaryotic Cell",
    accent: "#7fb85b",
    accent2: "#8d62c9",
    thumb:
      "radial-gradient(circle at 66% 35%, #8d62c9 0 18%, transparent 19%), radial-gradient(circle at 48% 58%, #9ed9e4 0 25%, transparent 26%), repeating-conic-gradient(from 20deg, #7fb85b 0 12deg, #b8d875 12deg 22deg)",
    organelles: [
      organelle(
        "Nucleus",
        "The command center",
        "#8d62c9",
        "5 to 10 um in diameter",
        "Usually central",
        "Yes",
        "Contains DNA and coordinates growth, repair, and division.",
      ),
      organelle(
        "Chloroplast",
        "The sugar factory",
        "#7fb85b",
        "4 to 6 um long",
        "Leaf and stem cells",
        "Yes",
        "Converts light, water, and carbon dioxide into glucose.",
      ),
      organelle(
        "Vacuole",
        "The pressure reservoir",
        "#6fbfd1",
        "Up to 80% of volume",
        "Central",
        "Yes",
        "Stores water and dissolved molecules while maintaining turgor pressure.",
      ),
    ],
    note: "Plant cells are wrapped by a rigid cellulose wall and keep a large central vacuole that helps the cell stay firm.",
    fact: "Fun fact: chloroplasts still carry their own DNA from ancient photosynthetic bacteria.",
    compare: 5,
    occurrence: "leaf",
    micro: ["Leaf tissue", "Stained section", "Electron micrograph"],
  },
  {
    id: "white",
    name: "White Blood Cell",
    subtitle: "Animal Cell",
    accent: "#6caed1",
    accent2: "#7b4fba",
    thumb:
      "radial-gradient(circle at 52% 44%, #7b4fba 0 25%, transparent 26%), radial-gradient(circle at 35% 65%, #df5f86 0 8%, transparent 9%), radial-gradient(circle at 70% 68%, #f4a447 0 7%, transparent 8%), radial-gradient(circle, #dfe6ee 0 64%, transparent 65%)",
    organelles: [
      organelle(
        "Lysosome",
        "The cellular cleanup crew",
        "#7b4fba",
        "0.1 to 1.2 um",
        "Blood, lymph, tissues",
        "Yes",
        "Breaks down pathogens, worn cell parts, and captured debris.",
      ),
      organelle(
        "Lobed Nucleus",
        "The flexible genome",
        "#6f3aa8",
        "Variable",
        "Center mass",
        "Yes",
        "Lets immune cells squeeze through tissue gaps during defense.",
      ),
      organelle(
        "Granules",
        "Chemical packets",
        "#df5f86",
        "Tiny vesicles",
        "Cytoplasm",
        "Yes",
        "Carry enzymes and signaling compounds used in immune response.",
      ),
    ],
    note: "White blood cells patrol blood and tissues, changing shape to move toward infection sites and coordinate defense.",
    fact: "Fun fact: some white blood cells can engulf objects larger than many bacteria.",
    compare: 3,
    occurrence: "blood",
    micro: ["Blood smear", "Stained section", "Electron micrograph"],
  },
  {
    id: "neuron",
    name: "Neuron",
    subtitle: "Nerve Cell",
    accent: "#8b76cf",
    accent2: "#d25f99",
    thumb:
      "radial-gradient(circle at 42% 44%, #d25f99 0 18%, transparent 19%), linear-gradient(28deg, transparent 0 44%, #8b76cf 45% 55%, transparent 56%), radial-gradient(circle, #d9c9ef 0 56%, transparent 57%)",
    organelles: [
      organelle(
        "Axon",
        "The signal highway",
        "#8b76cf",
        "um to over 1 m",
        "Extends from soma",
        "Yes",
        "Carries electrical impulses away from the cell body.",
      ),
      organelle(
        "Soma",
        "The cell body",
        "#d25f99",
        "4 to 100 um",
        "Central body",
        "Yes",
        "Houses the nucleus and most metabolic machinery.",
      ),
      organelle(
        "Dendrites",
        "The receiving branches",
        "#6fa3d4",
        "Highly branched",
        "Around soma",
        "Yes",
        "Receive incoming signals from other neurons.",
      ),
    ],
    note: "Neurons specialize in fast communication, using branching dendrites and long axons to route signals through the body.",
    fact: "Fun fact: a single neuron can form thousands of synaptic connections.",
    compare: 6,
    occurrence: "brain",
    micro: ["Neuron culture", "Silver stain", "Axon section"],
  },
  {
    id: "epithelial",
    name: "Epithelial Cell",
    subtitle: "Human Tissue Cell",
    accent: "#b884d8",
    accent2: "#d87393",
    thumb:
      "repeating-linear-gradient(90deg, #d87393 0 9px, #efb3bd 9px 18px), radial-gradient(circle at 44% 58%, #7b4fba 0 18%, transparent 19%)",
    organelles: [
      organelle(
        "Microvilli",
        "The absorbing fingers",
        "#d87393",
        "0.5 to 1 um long",
        "Apical surface",
        "Border stain",
        "Increase surface area for absorption.",
      ),
      organelle(
        "Tight Junctions",
        "The sealing belts",
        "#6caed1",
        "Cell to cell",
        "Lateral edge",
        "Visible",
        "Seal neighboring cells into a protective sheet.",
      ),
      organelle(
        "Nucleus",
        "The instruction vault",
        "#8d62c9",
        "5 to 10 um",
        "Basal side",
        "Yes",
        "Controls protein production and cell renewal.",
      ),
    ],
    note: "Epithelial cells line organs and surfaces, forming sheets that absorb, protect, and selectively transport materials.",
    fact: "Fun fact: intestinal epithelial lining renews itself roughly every few days.",
    compare: 5,
    occurrence: "gut",
    micro: ["Intestinal lining", "Stained section", "Surface detail"],
  },
  {
    id: "bacteria",
    name: "Bacteria Cell",
    subtitle: "Prokaryotic Cell",
    accent: "#59b98c",
    accent2: "#7b4fba",
    thumb:
      "linear-gradient(90deg, transparent 0 14%, #59b98c 15% 85%, transparent 86%), radial-gradient(circle at 50% 50%, #7b4fba 0 24%, transparent 25%), radial-gradient(circle, #bde8d2 0 60%, transparent 61%)",
    organelles: [
      organelle(
        "Nucleoid",
        "The naked genome",
        "#7b4fba",
        "1 to 2 um region",
        "Cytoplasm",
        "No membrane",
        "Holds the bacterial chromosome without a nucleus.",
      ),
      organelle(
        "Cell Wall",
        "The pressure shell",
        "#59b98c",
        "Nanometer scale",
        "Outer layer",
        "Yes",
        "Protects the cell and preserves its shape.",
      ),
      organelle(
        "Flagellum",
        "The rotary motor",
        "#c57945",
        "Several um",
        "Outer surface",
        "Yes",
        "Spins like a propeller to move through fluid.",
      ),
    ],
    note: "Bacteria lack a nucleus, so their DNA floats in a nucleoid region while ribosomes translate proteins directly in the cytoplasm.",
    fact: "Fun fact: bacterial flagella are powered by a tiny molecular rotary motor.",
    compare: 0,
    occurrence: "soil",
    micro: ["Gram stain", "Culture plate", "Electron micrograph"],
  },
  {
    id: "animal",
    name: "Animal Cell",
    subtitle: "Eukaryotic Cell",
    accent: "#c65f99",
    accent2: "#7252ba",
    thumb:
      "radial-gradient(circle at 58% 38%, #7252ba 0 23%, transparent 24%), radial-gradient(circle at 35% 64%, #e3644f 0 12%, transparent 13%), radial-gradient(circle, #7cb5d4 0 64%, transparent 65%)",
    organelles: [
      organelle(
        "Mitochondrion",
        "The powerhouse",
        "#e3644f",
        "0.5 to 10 um long",
        "Cytoplasm",
        "Rarely",
        "Converts fuel into ATP through respiration.",
      ),
      organelle(
        "Nucleus",
        "The command center",
        "#7252ba",
        "5 to 10 um",
        "Central",
        "Yes",
        "Stores genetic information and directs cell activity.",
      ),
      organelle(
        "Rough ER",
        "The protein workshop",
        "#d783b1",
        "Network",
        "Near nucleus",
        "Yes",
        "Folds and transports proteins made by ribosomes.",
      ),
    ],
    note: "Animal cells use a flexible membrane, internal scaffolds, and many membrane-bound organelles to adapt shape and function.",
    fact: "Fun fact: mitochondria are likely descendants of bacteria that joined early eukaryotic cells.",
    compare: 0,
    occurrence: "animal",
    micro: ["Cheek cells", "Stained section", "Organelle detail"],
  },
  {
    id: "muscle",
    name: "Muscle Cell",
    subtitle: "Muscle Fiber",
    accent: "#c9575f",
    accent2: "#7a5bc7",
    thumb:
      "repeating-linear-gradient(90deg, #c9575f 0 12px, #f2a0a2 12px 22px, #7a5bc7 22px 26px), radial-gradient(circle at 72% 50%, #f8c8c9 0 22%, transparent 23%)",
    organelles: [
      organelle(
        "Myofibril",
        "The contracting strand",
        "#c9575f",
        "1 to 2 um",
        "Bundled lengthwise",
        "Yes",
        "Repeating sarcomeres slide to create contraction.",
      ),
      organelle(
        "Sarcolemma",
        "The excitable membrane",
        "#7a5bc7",
        "Cell boundary",
        "Outer surface",
        "Yes",
        "Carries electrical signals across the muscle fiber.",
      ),
      organelle(
        "Sarcoplasm",
        "The working cytoplasm",
        "#d19c69",
        "Throughout fiber",
        "Interior",
        "Yes",
        "Stores enzymes, ions, and fuel for contraction.",
      ),
    ],
    note: "Muscle fibers pack thousands of myofibrils side by side, turning molecular sliding into visible motion.",
    fact: "Fun fact: one muscle fiber can be several centimeters long.",
    compare: 2,
    occurrence: "muscle",
    micro: ["Fiber bundle", "Stained section", "Sarcomere bands"],
  },
];

const originItems = [
  {
    id: "protocell",
    type: "origin",
    name: "Protocell",
    subtitle: "Primitive Compartment",
    accent: "#d99a34",
    accent2: "#5aa7bf",
    thumb:
      "radial-gradient(circle at 62% 38%, #d99a34 0 15%, transparent 16%), radial-gradient(circle at 44% 56%, #5aa7bf 0 28%, transparent 29%), repeating-conic-gradient(from 20deg, #f0bd5e 0 10deg, #78bfcc 10deg 19deg)",
    organelles: [
      organelle(
        "Lipid Vesicle",
        "The first boundary",
        "#d99a34",
        "Nanometer to micrometer scale",
        "Fatty-acid membrane",
        "Laboratory vesicles",
        "Separates internal chemistry from the surrounding prebiotic soup.",
      ),
      organelle(
        "RNA Template",
        "The copyable strand",
        "#b765c6",
        "Short polymers",
        "Encapsulated interior",
        "Model chemistry",
        "Stores sequence information that could be copied or selected.",
      ),
      organelle(
        "Metabolic Droplets",
        "The reaction pockets",
        "#e0b24f",
        "Tiny condensates",
        "Cytoplasm-like fluid",
        "Experimental analogs",
        "Concentrate small molecules so simple reaction networks can persist.",
      ),
    ],
    note: "Protocells model a stage where lipid boundaries, trapped molecules, and simple reaction networks could begin acting as a selectable unit.",
    fact: "Origin clue: fatty-acid vesicles can grow, divide, and capture nucleic acids under plausible lab conditions.",
    compare: 8,
    occurrence: "protocell",
    micro: ["Vesicle assembly", "Encapsulated RNA", "Droplet chemistry"],
  },
  {
    id: "progenote",
    type: "origin",
    name: "Progenote",
    subtitle: "Pre-LUCA Transition",
    accent: "#7ea8b7",
    accent2: "#8c61c7",
    thumb:
      "radial-gradient(circle at 60% 40%, #8c61c7 0 18%, transparent 19%), radial-gradient(circle at 30% 68%, #d99a34 0 10%, transparent 11%), radial-gradient(circle, rgba(126,168,183,.78) 0 64%, transparent 65%)",
    organelles: [
      organelle(
        "Loose Genome",
        "The unstable archive",
        "#8c61c7",
        "Mixed RNA/DNA-like strands",
        "Open interior",
        "Hypothetical",
        "Represents genetic polymers before modern inheritance became tightly organized.",
      ),
      organelle(
        "Proto-Ribosomes",
        "Early translation grains",
        "#c6a56d",
        "Granular complexes",
        "Interior clusters",
        "Inferred from biology",
        "Stand in for early peptide-making machinery before modern ribosomes.",
      ),
      organelle(
        "Peptide Networks",
        "The chemistry scaffold",
        "#e26e56",
        "Short chain webs",
        "Distributed",
        "Model chemistry",
        "Link genetic information to useful catalytic molecules.",
      ),
    ],
    note: "A progenote is a proposed transitional population with shared chemistry, loose inheritance, and translation that was not yet as precise as modern cells.",
    fact: "Origin clue: the term helps describe a stage before the last universal common ancestor had fully modern genetic coding.",
    compare: 11,
    occurrence: "progenote",
    micro: ["Mixed polymers", "Translation grains", "Shared gene pool"],
  },
  {
    id: "rna-world",
    type: "origin",
    name: "RNA World",
    subtitle: "Catalytic Information",
    accent: "#b75fc3",
    accent2: "#6d6bc7",
    thumb:
      "linear-gradient(35deg, transparent 0 32%, #b75fc3 33% 45%, transparent 46%), linear-gradient(140deg, transparent 0 38%, #6d6bc7 39% 52%, transparent 53%), radial-gradient(circle, #c7b3d8 0 60%, transparent 61%)",
    organelles: [
      organelle(
        "Ribozyme Fold",
        "Catalytic RNA",
        "#b75fc3",
        "Folded strand scale",
        "Mineral surface",
        "Known ribozymes",
        "Shows RNA acting as both information carrier and chemical catalyst.",
      ),
      organelle(
        "Template Pairing",
        "The copy guide",
        "#d35fa0",
        "Base-paired regions",
        "Strand contacts",
        "Lab replication models",
        "Illustrates how one sequence can guide formation of a complement.",
      ),
      organelle(
        "Mineral Surface",
        "The concentration bed",
        "#9c855f",
        "Porous microterrain",
        "Clay or rock",
        "Prebiotic analog",
        "Concentrates monomers and stabilizes reactions that are dilute in water.",
      ),
    ],
    note: "The RNA world hypothesis proposes that RNA-like molecules once carried information and catalyzed reactions before DNA-protein biology dominated.",
    fact: "Origin clue: modern ribosomes still use RNA at the catalytic core of protein synthesis.",
    compare: 7,
    occurrence: "rna",
    micro: ["Ribozyme fold", "Template pairing", "Mineral surface"],
  },
  {
    id: "hydrothermal-vent",
    type: "origin",
    name: "Hydrothermal Vent",
    subtitle: "Mineral Reactor",
    accent: "#e6842f",
    accent2: "#3897bd",
    thumb:
      "linear-gradient(120deg, #2d3537 0 24%, #e6842f 25% 42%, #3897bd 43% 68%, #202426 69%), radial-gradient(circle at 70% 70%, #f3b15c 0 12%, transparent 13%)",
    organelles: [
      organelle(
        "Mineral Pores",
        "Natural compartments",
        "#9a7d5d",
        "Microporous rock",
        "Vent chimney",
        "Geochemical evidence",
        "Creates small chambers where reactants can concentrate.",
      ),
      organelle(
        "Proton Gradient",
        "Early energy slope",
        "#e6842f",
        "Chemical gradient",
        "Rock-water boundary",
        "Vent chemistry",
        "Models energy differences that could power primitive metabolism.",
      ),
      organelle(
        "Organic Precursors",
        "Molecular feedstock",
        "#d3b24c",
        "Small molecules",
        "Catalytic surfaces",
        "Prebiotic chemistry",
        "Represents carbon compounds formed and transformed on mineral surfaces.",
      ),
    ],
    note: "Hydrothermal vent models place early chemistry inside mineral pores, where heat, pH gradients, and catalytic surfaces could organize metabolism-like reactions.",
    fact: "Origin clue: iron-sulfur minerals can catalyze reactions related to ancient metabolic pathways.",
    compare: 9,
    occurrence: "vent",
    micro: ["Mineral pores", "Chemical gradient", "Organic beads"],
  },
  {
    id: "luca",
    type: "origin",
    name: "LUCA",
    subtitle: "Last Universal Ancestor",
    accent: "#62a9bd",
    accent2: "#7a5ac5",
    thumb:
      "radial-gradient(circle at 48% 48%, #7a5ac5 0 20%, transparent 21%), linear-gradient(90deg, transparent 0 12%, #62a9bd 13% 87%, transparent 88%), radial-gradient(circle, #c5d7da 0 62%, transparent 63%)",
    organelles: [
      organelle(
        "Nucleoid",
        "Shared genetic core",
        "#7a5ac5",
        "Circular genome model",
        "Cytoplasm",
        "Comparative genomics",
        "Represents inherited genes common to all modern lineages.",
      ),
      organelle(
        "Ribosomes",
        "Universal translators",
        "#c6a56d",
        "Molecular granules",
        "Distributed interior",
        "Universal biology",
        "Protein-making machinery conserved across bacteria, archaea, and eukaryotes.",
      ),
      organelle(
        "Membrane Proteins",
        "Energy and transport gates",
        "#e6842f",
        "Molecular patches",
        "Cell membrane",
        "Ancient physiology",
        "Control exchange and support ion gradients across the membrane.",
      ),
    ],
    note: "LUCA was not the first life form, but a later ancestral population from which bacteria, archaea, and eukaryotes inherited shared molecular systems.",
    fact: "Origin clue: LUCA is inferred from features shared by all living cells, especially the genetic code and ribosome core.",
    compare: 4,
    occurrence: "luca",
    micro: ["Nucleoid model", "Ribosome field", "Membrane gates"],
  },
];

const specimens = [...cellTypes, ...originItems];

const state = {
  active: 0,
  organelle: 0,
  cross: true,
  animate: false,
  isolate: false,
  hideOthers: false,
  labels: true,
  autoRotate: false,
  microscopeMode: "model",
  searchOpen: false,
  searchQuery: "",
  specimenDropdowns: {
    cell: true,
    origin: true,
  },
  helpOpen: true,
  settingsOpen: false,
  sound: true,
  favorites: new Set(),
  rotation: 0,
  pitch: 0,
  zoom: 1,
  panX: 0,
  panY: 0,
  drag: false,
  dragX: 0,
  dragY: 0,
  dragStartX: 0,
  dragStartY: 0,
  dragMoved: false,
  activePointers: new Map(),
  pinch: null,
  lastTime: 0,
  pendingRevealId: null,
  hoveredCalloutName: null,
};

const els = {
  root: document.documentElement,
  cellDropdownBtn: document.querySelector("#cellDropdownBtn"),
  originDropdownBtn: document.querySelector("#originDropdownBtn"),
  cellDropdownLabel: document.querySelector("#cellDropdownLabel"),
  originDropdownLabel: document.querySelector("#originDropdownLabel"),
  cellDropdownMenu: document.querySelector("#cellDropdownMenu"),
  originDropdownMenu: document.querySelector("#originDropdownMenu"),
  organelleList: document.querySelector("#organelleList"),
  featurePanelTitle: document.querySelector("#featurePanelTitle"),
  detailPanelTitle: document.querySelector("#detailPanelTitle"),
  cellName: document.querySelector("#cellName"),
  cellSubtitle: document.querySelector("#cellSubtitle"),
  stageCard: document.querySelector(".stage-card"),
  canvas: document.querySelector("#cellCanvas"),
  modelLoading: document.querySelector("#modelLoading"),
  modelLoadingPercent: document.querySelector("#modelLoadingPercent"),
  modelLoadingTitle: document.querySelector("#modelLoadingTitle"),
  modelLoadingText: document.querySelector("#modelLoadingText"),
  modelLoadingBar: document.querySelector("#modelLoadingBar"),
  occurCanvas: document.querySelector("#occurCanvas"),
  microscopeStrip: document.querySelector("#microscopeStrip"),
  structureLegend: document.querySelector("#structureLegend"),
  legendCount: document.querySelector("#legendCount"),
  detailPanel: document.querySelector(".detail-panel"),
  globalSearch: document.querySelector(".global-search"),
  specimenSearch: document.querySelector("#specimenSearch"),
  searchSuggestions: document.querySelector("#searchSuggestions"),
  settingsPanel: document.querySelector("#settingsPanel"),
  navSearch: document.querySelector("#navSearch"),
  navHelp: document.querySelector("#navHelp"),
  navSound: document.querySelector("#navSound"),
  navSettings: document.querySelector("#navSettings"),
  modeModel: document.querySelector("#modeModel"),
  modeCross: document.querySelector("#modeCross"),
  modeAnimate: document.querySelector("#modeAnimate"),
  crossToggle: document.querySelector("#crossToggle"),
  rotateBtn: document.querySelector("#rotateBtn"),
  zoomBtn: document.querySelector("#zoomBtn"),
  isolateBtn: document.querySelector("#isolateBtn"),
  hideBtn: document.querySelector("#hideBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  screenshotBtn: document.querySelector("#screenshotBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  labelToggle: document.querySelector("#labelToggle"),
  favoriteBtn: document.querySelector("#favoriteBtn"),
  detailIcon: document.querySelector("#detailIcon"),
  organelleName: document.querySelector("#organelleName"),
  organelleTagline: document.querySelector("#organelleTagline"),
  detailFacts: document.querySelector("#detailFacts"),
  biologyNote: document.querySelector("#biologyNote"),
  funFact: document.querySelector("#funFact"),
  toast: document.querySelector("#appToast"),
};

let ctx = null;
const occurCtx = els.occurCanvas.getContext("2d");
let Three = null;
let specimenStage = null;
let toastTimer = null;
let modelRevealTimer = null;
let audioContext = null;
const modelAssetRevision = "latest-assets-20260513-web-optimized-loader";
const modelAssetUrl = (src) => `${src}?v=${modelAssetRevision}`;
const specimenAssetSources = {
  plant: "./assets/plant-cell-realistic.png",
  white: "./assets/white-blood-cell-realistic.png",
  neuron: "./assets/neuron-realistic.png",
  epithelial: "./assets/epithelial-cell-realistic.png",
  bacteria: "./assets/bacteria-cell-realistic.png",
  animal: "./assets/animal-cell-realistic.png",
  muscle: "./assets/muscle-cell-realistic.png",
  protocell: "./assets/protocell-realistic.png",
  progenote: "./assets/progenote-realistic.png",
  "rna-world": "./assets/rna-world-realistic.png",
  "hydrothermal-vent": "./assets/hydrothermal-vent-realistic.png",
  luca: "./assets/luca-realistic.png",
};

const specimenThumbnailSources = {
  plant: "./assets/plant-cutout.png",
  white: "./assets/white-cutout.png",
  neuron: "./assets/neuron-cutout.png",
  epithelial: "./assets/epithelial-cutout.png",
  bacteria: "./assets/bacteria-cutout.png",
  animal: "./assets/animal-cutout.png",
  muscle: "./assets/muscle-cutout.png",
  protocell: "./assets/protocell-cutout.png",
  progenote: "./assets/progenote-cutout.png",
  "rna-world": "./assets/rna-world-cutout.png",
  "hydrothermal-vent": "./assets/hydrothermal-vent-cutout.png",
  luca: "./assets/luca-cutout.png",
};

const referencePanelCopy = {
  neuron: {
    functions: [
      "Receives sensory information",
      "Processes and integrates signals",
      "Transmits impulses to other cells",
      "Enables communication in the body",
    ],
    facts: {
      "Cell Type": "Animal Cell",
      Length: "Up to 1 meter",
      Structure: "Dendrites, soma, axon, synapses",
      Function: "Signal transmission",
      Location: "Brain, spinal cord, nerves",
    },
  },
};

function specimenThumbBackground(cell) {
  const source =
    specimenThumbnailSources[cell.id] || specimenAssetSources[cell.id];
  return source ? `url('${source}')` : cell.thumb;
}

function specimenGalleryBackground(cell) {
  const source =
    specimenThumbnailSources[cell.id] || specimenAssetSources[cell.id];
  return source ? `url('${source}')` : cell.thumb;
}

const specimen3dAssetSources = Object.fromEntries(
  specimens.map((specimen) => [
    specimen.id,
    {
      front: `./assets/${specimen.id}-cutout.png`,
      back: `./assets/${specimen.id}-3d-back.png`,
    },
  ]),
);
const generatedTripoModelIds = new Set([
  "plant",
  "white",
  "neuron",
  "epithelial",
  "bacteria",
  "animal",
  "muscle",
  "protocell",
  "progenote",
  "rna-world",
  "hydrothermal-vent",
  "luca",
]);
const webOptimizedTripoModelIds = new Set([
  "animal",
  "white",
  "neuron",
  "epithelial",
  "bacteria",
  "muscle",
  "protocell",
  "luca",
]);
const tripoModelAssetUrl = (id) => {
  const suffix = webOptimizedTripoModelIds.has(id)
    ? "-tripo-web.glb"
    : "-tripo.glb";
  return modelAssetUrl(`./assets/${id}${suffix}`);
};

const tripoModelSources = Object.fromEntries(
  specimens
    .filter((specimen) => generatedTripoModelIds.has(specimen.id))
    .map((specimen) => [
      specimen.id,
      {
        src: tripoModelAssetUrl(specimen.id),
        targetScale: 0.78,
        rotation: { x: 0.68, y: 0, z: 0 },
        position: { x: 0, y: 0.16, z: 0 },
      },
    ]),
);

Object.assign(tripoModelSources, {
  white: {
    src: tripoModelAssetUrl("white"),
    targetScale: 0.9,
    rotation: { x: 0, y: -Math.PI / 2, z: 0 },
    position: { x: 0, y: 0.06, z: 0 },
  },
  neuron: {
    src: tripoModelAssetUrl("neuron"),
    targetScale: 0.92,
    rotation: { x: 0.68, y: -Math.PI / 2, z: 0 },
    position: { x: 0, y: 0.02, z: 0 },
  },
  epithelial: {
    src: tripoModelAssetUrl("epithelial"),
    targetScale: 0.7,
    rotation: { x: 0.35, y: 0, z: 0 },
    position: { x: 0, y: 0.1, z: 0 },
  },
  bacteria: {
    src: tripoModelAssetUrl("bacteria"),
    targetScale: 0.82,
    rotation: { x: 0.68, y: Math.PI / 2, z: Math.PI / 2 },
    position: { x: 0, y: 0.04, z: 0 },
  },
  muscle: {
    src: tripoModelAssetUrl("muscle"),
    targetScale: 0.78,
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: 0.05, z: 0 },
  },
  "hydrothermal-vent": {
    src: tripoModelAssetUrl("hydrothermal-vent"),
    targetScale: 0.62,
    rotation: { x: 0.58, y: -0.12, z: 0 },
    position: { x: 0, y: 0.16, z: 0 },
  },
  luca: {
    src: tripoModelAssetUrl("luca"),
    targetScale: 0.78,
    rotation: { x: 0.68, y: 0, z: 0 },
    position: { x: 0, y: 0.12, z: 0 },
  },
  plant: {
    src: tripoModelAssetUrl("plant"),
    targetScale: 1,
    rotation: {
      x: 0.68,
      y: 0,
      z: 0,
    },
    mirrorX: true,
    position: {
      x: 0.25,
      y: -0.1,
      z: 0,
    },
  },
});
const tripoHotspotAnchors = {
  plant: {
    Nucleus: calloutAnchor(-1.0, 0.8, 1.2, -2.45, 1.55, 1.75),
    Chloroplast: calloutAnchor(0.9, 0.62, 1.08, 2.35, 1.55, 1.7),
    Vacuole: calloutAnchor(0.46, 0.1, 1.18, 2.35, -0.65, 1.7),
  },
  white: {
    Lysosome: calloutAnchor(1.0, -0.28, 1.12, 2.28, -1.0, 1.6),
    "Lobed Nucleus": calloutAnchor(-0.18, 0.24, 1.2, -2.1, 1.2, 1.7),
    Granules: calloutAnchor(-0.88, -0.76, 1.08, -2.42, -1.35, 1.58),
  },
  neuron: {
    Axon: calloutAnchor(0.86, -0.1, 1.1, 2.45, 0.82, 1.58),
    Soma: calloutAnchor(-1.16, -0.18, 1.16, -2.55, 0.34, 1.62),
    Dendrites: calloutAnchor(-2.44, 0.26, 1.04, -3.02, 1.44, 1.56),
  },
  epithelial: {
    Microvilli: calloutAnchor(0.08, 1.22, 1.14, -1.82, 1.72, 1.62),
    "Tight Junctions": calloutAnchor(-1.42, 0.08, 1.06, -2.72, 0.82, 1.55),
    Nucleus: calloutAnchor(0.22, -0.46, 1.14, 1.98, -1.12, 1.62),
  },
  bacteria: {
    Nucleoid: calloutAnchor(0.06, 0.36, 1.18, 0.55, 1.48, 1.66),
    "Cell Wall": calloutAnchor(-1.86, -0.18, 1.04, -2.86, -0.92, 1.54),
    Flagellum: calloutAnchor(-2.34, 0.72, 1.04, -3.14, 1.54, 1.52),
  },
  animal: {
    Mitochondrion: calloutAnchor(-1.38, -0.48, 1.06, -2.66, -1.18, 1.54),
    Nucleus: calloutAnchor(0.86, 0.7, 1.18, 2.28, 1.34, 1.68),
    "Rough ER": calloutAnchor(0.34, 0.04, 1.12, 2.3, -0.36, 1.58),
  },
  muscle: {
    Myofibril: calloutAnchor(0.74, 0.2, 1.08, 2.34, 1.0, 1.58),
    Sarcolemma: calloutAnchor(-1.96, -0.16, 1.02, -3.0, 0.84, 1.5),
    Sarcoplasm: calloutAnchor(-0.26, -0.68, 1.08, 1.35, -1.35, 1.54),
  },
  protocell: {
    "Lipid Vesicle": calloutAnchor(-1.22, 0.18, 1.12, -2.65, 1.1, 1.58),
    "RNA Template": calloutAnchor(0.12, 0.28, 1.18, 1.95, 1.22, 1.66),
    "Metabolic Droplets": calloutAnchor(0.84, -0.54, 1.08, 2.55, -1.08, 1.54),
  },
  progenote: {
    "Loose Genome": calloutAnchor(0.0, 0.26, 1.18, -2.05, 1.18, 1.66),
    "Proto-Ribosomes": calloutAnchor(0.92, -0.22, 1.08, 2.52, 0.62, 1.55),
    "Peptide Networks": calloutAnchor(-0.88, -0.58, 1.04, -2.62, -1.16, 1.52),
  },
  "rna-world": {
    "Ribozyme Fold": calloutAnchor(0.02, 0.34, 1.16, -2.02, 1.24, 1.64),
    "Template Pairing": calloutAnchor(0.94, -0.08, 1.08, 2.46, 0.82, 1.56),
    "Mineral Surface": calloutAnchor(-1.02, -0.58, 1.0, -2.66, -1.16, 1.48),
  },
  "hydrothermal-vent": {
    "Mineral Pores": calloutAnchor(-0.84, 0.15, 1.02, -2.54, 1.04, 1.52),
    "Proton Gradient": calloutAnchor(0.42, 0.78, 1.08, 2.3, 1.45, 1.58),
    "Organic Precursors": calloutAnchor(0.96, -0.48, 1.0, 2.72, -1.02, 1.48),
  },
  luca: {
    Nucleoid: calloutAnchor(0.0, 0.18, 1.18, -1.98, 1.18, 1.66),
    Ribosomes: calloutAnchor(0.88, -0.36, 1.08, 2.46, 0.68, 1.56),
    "Membrane Proteins": calloutAnchor(-1.16, -0.12, 1.04, -2.72, -0.92, 1.5),
  },
};
const specimenImages = new Map();

async function loadRendererAndInit() {
  try {
    if (!window.THREE) throw new Error("Three.js global is missing");
    Three = window.THREE;
    await loadGltfSupport();
    specimenStage = createSpecimenStage();
  } catch (error) {
    console.warn("3D renderer failed to load, using 2D fallback", error);
    ctx = els.canvas.getContext("2d");
  }
  init();
}

async function loadGltfSupport() {
  if (Three.GLTFLoader) return;
  console.warn(
    "GLB loader unavailable; Tripo models will use the 2D texture fallback",
  );
}

function getSpecimenImage(cell) {
  const src = specimenAssetSources[cell.id];
  if (!src) return null;
  if (specimenImages.has(src)) return specimenImages.get(src);
  const image = new Image();
  image.addEventListener("load", () => drawMain(performance.now() * 0.001));
  image.addEventListener("error", () => {
    console.warn(`Unable to load specimen image: ${src}`);
  });
  image.src = src;
  specimenImages.set(src, image);
  return image;
}

function createSpecimenStage() {
  const contextAttributes = {
    alpha: true,
    antialias: true,
    premultipliedAlpha: true,
    preserveDrawingBuffer: false,
  };
  const glContext =
    els.canvas.getContext("webgl2", contextAttributes) ||
    els.canvas.getContext("webgl", contextAttributes);
  if (!glContext) throw new Error("WebGL unavailable");

  const stage = {
    renderer: new Three.WebGLRenderer({
      canvas: els.canvas,
      context: glContext,
      alpha: true,
      antialias: true,
      premultipliedAlpha: true,
    }),
    scene: new Three.Scene(),
    camera: new Three.PerspectiveCamera(30, 1, 0.1, 100),
    specimenRoot: new Three.Group(),
    loader: new Three.TextureLoader(),
    gltfLoader: Three.GLTFLoader ? new Three.GLTFLoader() : null,
    textureCache: new Map(),
    tripoModelCache: new Map(),
    surfacePointCache: new Map(),
    calloutRaycaster: new Three.Raycaster(),
    calloutPointer: new Three.Vector2(),
    activeId: null,
    hotspotName: null,
    hotspot: null,
    label: null,
    calloutGroup: null,
    calloutInteractive: [],
    calloutKey: null,
    hoverHighlight: null,
    hoverHighlightName: null,
    labelVisible: true,
    dimensions: null,
    volumeParts: null,
  };

  stage.renderer.setClearColor(0x000000, 0);
  stage.renderer.outputColorSpace = Three.SRGBColorSpace;
  stage.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  stage.loader.setCrossOrigin("");
  stage.camera.position.set(0, 0, 9.6);
  stage.camera.lookAt(0, 0, 0);

  const ambient = new Three.HemisphereLight(0xfff7e6, 0x9c8c76, 2.2);
  const key = new Three.DirectionalLight(0xffffff, 3.8);
  key.position.set(-4.5, 5.2, 7.5);
  const rim = new Three.DirectionalLight(0xb8dcff, 1.3);
  rim.position.set(4, -2, -4);
  stage.scene.add(ambient, key, rim, stage.specimenRoot);
  stage.scene.add(makeStageShadow());

  return stage;
}

function makeStageShadow() {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(
    size / 2,
    size / 2,
    16,
    size / 2,
    size / 2,
    size / 2,
  );
  gradient.addColorStop(0, "rgba(68, 48, 21, 0.34)");
  gradient.addColorStop(0.46, "rgba(68, 48, 21, 0.16)");
  gradient.addColorStop(1, "rgba(68, 48, 21, 0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  const texture = new Three.CanvasTexture(canvas);
  texture.colorSpace = Three.SRGBColorSpace;
  const material = new Three.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });
  const shadow = new Three.Mesh(new Three.PlaneGeometry(7.8, 3.2), material);
  shadow.position.set(0, -1.58, -1.15);
  shadow.scale.set(1.08, 1, 1);
  return shadow;
}

function loadSpecimenTexture(stage, src, invalidate = true) {
  if (stage.textureCache.has(src)) return stage.textureCache.get(src);
  const texture = new Three.Texture();
  texture.colorSpace = Three.SRGBColorSpace;
  const image = new Image();
  image.addEventListener("load", () => {
    texture.image = image;
    texture.colorSpace = Three.SRGBColorSpace;
    texture.anisotropy = Math.min(
      8,
      stage.renderer.capabilities.getMaxAnisotropy(),
    );
    texture.needsUpdate = true;
    if (invalidate) drawMain(performance.now() * 0.001);
  });
  image.addEventListener("error", () => {
    console.warn(`Unable to load 3D texture: ${src}`);
  });
  image.src = src;
  stage.textureCache.set(src, texture);
  return texture;
}

function getSpecimenSideTexture(stage, cell) {
  const cacheKey = `side-texture:${cell.id}`;
  if (stage.textureCache.has(cacheKey)) return stage.textureCache.get(cacheKey);

  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, hexToRgba(cell.accent2, 0.9));
  gradient.addColorStop(0.36, hexToRgba(cell.accent, 0.96));
  gradient.addColorStop(0.64, "rgba(255, 246, 213, 0.72)");
  gradient.addColorStop(1, hexToRgba(cell.accent, 0.9));
  context.fillStyle = gradient;
  context.fillRect(0, 0, 512, 512);

  for (let row = 0; row < 34; row += 1) {
    const y = row * 16 + seed(row * 31 + cell.id.length) * 5;
    context.fillStyle =
      row % 3 === 0 ? "rgba(255,255,255,0.2)" : "rgba(52,43,31,0.08)";
    context.fillRect(0, y, 512, 2 + seed(row * 17) * 5);
  }

  for (let index = 0; index < 180; index += 1) {
    const x = seed(index * 11 + cell.name.length) * 512;
    const y = seed(index * 19 + cell.id.length) * 512;
    const radius = 1.2 + seed(index * 7) * 4.2;
    context.fillStyle =
      index % 4 === 0
        ? hexToRgba(cell.accent2, 0.26)
        : "rgba(255,255,255,0.16)";
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }

  const texture = new Three.CanvasTexture(canvas);
  texture.colorSpace = Three.SRGBColorSpace;
  texture.wrapS = Three.RepeatWrapping;
  texture.wrapT = Three.RepeatWrapping;
  texture.repeat.set(2.4, 1);
  texture.needsUpdate = true;
  stage.textureCache.set(cacheKey, texture);
  return texture;
}

function getPlantWallTexture(stage) {
  const texture = loadSpecimenTexture(
    stage,
    "./assets/plant-gpt-depth-texture.png",
  );
  texture.wrapS = Three.RepeatWrapping;
  texture.wrapT = Three.RepeatWrapping;
  texture.repeat.set(1, 1);
  return texture;
}

function makePlantWallGeometry(width, height, depth) {
  const sourcePoints = plantOuterPoints(0, 1);
  const sx = width / 760;
  const sy = height / 430;
  const points = sourcePoints.map(
    ([x, y]) => new Three.Vector2(x * sx, -y * sy),
  );
  const distances = [0];
  let total = 0;
  for (let index = 0; index < points.length; index += 1) {
    const next = points[(index + 1) % points.length];
    total += points[index].distanceTo(next);
    distances.push(total);
  }

  const positions = [];
  const uvs = [];
  const indices = [];
  const frontZ = depth / 2 + 0.025;
  const backZ = -depth / 2 - 0.025;

  points.forEach((point, index) => {
    const u = (distances[index] / total) * 4;
    positions.push(point.x, point.y, frontZ, point.x, point.y, backZ);
    uvs.push(u, 1, u, 0);
  });

  for (let index = 0; index < points.length; index += 1) {
    const next = (index + 1) % points.length;
    const a = index * 2;
    const b = next * 2;
    indices.push(a, b, b + 1, a, b + 1, a + 1);
  }

  const geometry = new Three.BufferGeometry();
  geometry.setAttribute(
    "position",
    new Three.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("uv", new Three.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function makePlantOutlineLine(width, height, z, color, opacity) {
  const sx = width / 760;
  const sy = height / 430;
  const points = plantOuterPoints(0, 1).map(
    ([x, y]) => new Three.Vector3(x * sx, -y * sy, z),
  );
  points.push(points[0].clone());
  const geometry = new Three.BufferGeometry().setFromPoints(points);
  const material = new Three.LineBasicMaterial({
    color: new Three.Color(color),
    transparent: true,
    opacity,
    depthWrite: false,
  });
  const line = new Three.Line(geometry, material);
  line.renderOrder = 0.8;
  return line;
}

function clearThreeGroup(group) {
  while (group.children.length) {
    const child = group.children.pop();
    if (child.userData?.preserveResources) continue;
    child.traverse?.((node) => {
      node.geometry?.dispose?.();
      if (Array.isArray(node.material)) {
        node.material.forEach((material) => material.dispose?.());
      } else {
        node.material?.dispose?.();
      }
    });
  }
}

function prepareSpecimenMaterial(material) {
  if (!material) return material;
  const prepared = material.clone();
  prepared.userData.hoverDesaturate = { value: 0 };
  const previousCompile = prepared.onBeforeCompile;
  prepared.onBeforeCompile = (shader, renderer) => {
    previousCompile?.(shader, renderer);
    shader.uniforms.uHoverDesaturate = prepared.userData.hoverDesaturate;
    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      `uniform float uHoverDesaturate;
void main() {`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
      float hoverGray = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(hoverGray), uHoverDesaturate);`,
    );
  };
  prepared.needsUpdate = true;
  return prepared;
}

function invalidateTripoStage(stage, cell) {
  if (stage.activeId === cell.id) {
    stage.activeId = null;
    drawMain(performance.now() * 0.001);
  }
}

function requestTripoModel(stage, cell) {
  const config = tripoModelSources[cell.id];
  if (!config?.src || !stage.gltfLoader) return null;
  if (stage.tripoModelCache.has(config.src))
    return stage.tripoModelCache.get(config.src);

  const now = performance.now();
  const entry = {
    status: "checking",
    model: null,
    error: null,
    progress: 2,
    targetProgress: 6,
    displayProgress: 1,
    lastDisplayAt: now,
    startedAt: now,
    finalizingStartedAt: 0,
    finalizingStartProgress: 0,
    phase: "checking",
    readySince: 0,
    revealTriggered: false,
  };
  stage.tripoModelCache.set(config.src, entry);

  fetch(config.src, { method: "HEAD" })
    .then((response) => {
      if (!response.ok) {
        entry.status = "missing";
        invalidateTripoStage(stage, cell);
        return;
      }
      entry.status = "loading";
      entry.phase = "streaming";
      entry.startedAt = performance.now();
      entry.targetProgress = Math.max(entry.targetProgress || 0, 14);
      setTimeout(() => {
        if (entry.status !== "loading") return;
        stage.gltfLoader.load(
          config.src,
          (gltf) => {
            const loadedModel = gltf.scene || gltf.scenes?.[0];
            if (!loadedModel) {
              entry.status = "error";
              entry.error = new Error(`No scene found in ${config.src}`);
              invalidateTripoStage(stage, cell);
              return;
            }
            loadedModel.traverse((node) => {
              if (!node.isMesh) return;
              node.frustumCulled = false;
              const materials = Array.isArray(node.material)
                ? node.material
                : [node.material];
              materials.forEach((material) => {
                if (!material) return;
                material.side = Three.DoubleSide;
                material.needsUpdate = true;
              });
            });
            entry.model = loadedModel;
            entry.status = "loaded";
            entry.phase = "ready";
            entry.targetProgress = 100;
            entry.displayProgress = Math.max(entry.displayProgress || 0, 82);
            entry.lastDisplayAt = performance.now();
            entry.readySince = performance.now();
            invalidateTripoStage(stage, cell);
          },
          (event) => {
            const progressNow = performance.now();
            if (event.lengthComputable && event.total > 0) {
              const transferRatio = event.loaded / event.total;
              const nextProgress = clampNumber(
                Math.round(12 + transferRatio * 78),
                14,
                90,
              );
              const visibleTransferProgress =
                transferRatio >= 0.9
                  ? clampNumber(58 + ((transferRatio - 0.9) / 0.1) * 22, 58, 80)
                  : clampNumber(10 + transferRatio * 48, 10, 58);
              entry.targetProgress = Math.max(
                entry.targetProgress || 0,
                nextProgress,
              );
              entry.displayProgress = Math.max(
                entry.displayProgress || 0,
                visibleTransferProgress,
              );
              entry.lastDisplayAt = progressNow;
              if (transferRatio >= 0.9 || entry.phase === "finalizing")
                entry.phase = "finalizing";
              else entry.phase = "streaming";
            } else {
              entry.targetProgress = Math.max(
                entry.targetProgress || 0,
                Math.min(84, Math.max(entry.targetProgress || 14, 24)),
              );
              entry.displayProgress = Math.max(entry.displayProgress || 0, 18);
              entry.lastDisplayAt = progressNow;
              entry.phase =
                entry.targetProgress >= 80 ? "finalizing" : "streaming";
            }
            if (entry.phase === "finalizing" && !entry.finalizingStartedAt) {
              entry.finalizingStartedAt = progressNow;
              entry.finalizingStartProgress = clampNumber(
                Math.max(
                  entry.displayProgress || 0,
                  entry.targetProgress || 0,
                  82,
                ),
                72,
                92,
              );
            }
            if (state.active === specimens.indexOf(cell))
              syncModelLoading(cell);
          },
          (error) => {
            entry.status = "error";
            entry.error = error;
            entry.targetProgress = 0;
            entry.phase = "error";
            invalidateTripoStage(stage, cell);
          },
        );
      }, 280);
    })
    .catch((error) => {
      entry.status = "error";
      entry.error = error;
      entry.targetProgress = 0;
      entry.phase = "error";
      invalidateTripoStage(stage, cell);
    });
  return entry;
}

function getTripoSpecimenModel(
  stage,
  cell,
  dimensions,
  entry = requestTripoModel(stage, cell),
) {
  const config = tripoModelSources[cell.id];
  if (entry?.status !== "loaded" || !entry.model) return null;

  const wrapper = new Three.Group();
  wrapper.userData.preserveResources = true;
  const model = entry.model.clone(true);
  model.userData.preserveResources = true;
  wrapper.userData.surfaceMeshes = [];
  wrapper.userData.specimenMaterials = [];
  model.traverse((node) => {
    if (!node.isMesh || !node.geometry) return;
    node.material = Array.isArray(node.material)
      ? node.material.map((material) => prepareSpecimenMaterial(material))
      : prepareSpecimenMaterial(node.material);
    const materials = Array.isArray(node.material)
      ? node.material
      : [node.material];
    materials.forEach((material) => {
      if (material) wrapper.userData.specimenMaterials.push(material);
    });
    wrapper.userData.surfaceMeshes.push(node);
  });
  wrapper.add(model);

  const box = new Three.Box3().setFromObject(model);
  if (!box.isEmpty()) {
    const center = box.getCenter(new Three.Vector3());
    const size = box.getSize(new Three.Vector3());
    model.position.sub(center);
    const maxDim = Math.max(size.x, size.y, size.z, 0.001);
    const target = dimensions.width * (config?.targetScale || 0.94);
    wrapper.scale.setScalar(target / maxDim);
  }
  if (config?.mirrorX) wrapper.scale.x = -Math.abs(wrapper.scale.x);
  if (config?.rotation) {
    model.rotation.set(
      config.rotation.x || 0,
      config.rotation.y || 0,
      config.rotation.z || 0,
    );
  }
  if (config?.position) {
    wrapper.position.set(
      config.position.x || 0,
      config.position.y || 0,
      config.position.z || 0,
    );
  }

  return wrapper;
}

function getSpecimenDimensions(cell) {
  const layout =
    generatedSpecimenLayouts[cell.id] || generatedSpecimenLayouts.plant;
  const imageAspect = 16 / 9;
  const width = Math.min(7.15, Math.max(5.2, layout.width / 125));
  const height = (width / imageAspect) * (layout.heightScale || 1);
  const depth =
    cell.id === "plant" ? 2.15 : Math.min(1.18, Math.max(0.72, width * 0.15));
  return { width, height, depth, layout };
}

function buildSpecimenVolume(cell) {
  const stage = specimenStage;
  const sources = specimen3dAssetSources[cell.id];
  const dimensions = getSpecimenDimensions(cell);
  const { width, height, depth } = dimensions;
  stage.dimensions = dimensions;
  clearThreeGroup(stage.specimenRoot);
  stage.hotspot = null;
  stage.label = null;
  stage.calloutGroup = null;
  stage.calloutInteractive = [];
  stage.calloutKey = null;
  removeHoverHighlight(stage);
  stage.labelVisible = state.labels;
  stage.hotspotName = null;
  state.hoveredCalloutName = null;

  const tripoEntry = requestTripoModel(stage, cell);
  const tripoModel = getTripoSpecimenModel(stage, cell, dimensions, tripoEntry);
  if (tripoModel) {
    stage.specimenRoot.add(tripoModel);
    stage.volumeParts = {
      isTripo: true,
      tripoModel,
      specimenMaterials: tripoModel.userData.specimenMaterials || [],
    };
    stage.activeId = cell.id;
    return;
  }
  if (
    tripoModelSources[cell.id] &&
    tripoEntry &&
    tripoEntry.status !== "missing" &&
    tripoEntry.status !== "error"
  ) {
    stage.volumeParts = {
      isTripoPending: true,
    };
    stage.activeId = cell.id;
    return;
  }

  const frontTexture = loadSpecimenTexture(stage, sources.front);
  const backTexture = loadSpecimenTexture(stage, sources.back);
  const sideTexture =
    cell.id === "plant"
      ? getPlantWallTexture(stage)
      : getSpecimenSideTexture(stage, cell);

  const frontMaterial = new Three.MeshBasicMaterial({
    map: frontTexture,
    transparent: true,
    alphaTest: 0.08,
    opacity: 1,
    side: Three.DoubleSide,
    depthWrite: false,
  });
  const backMaterial = new Three.MeshBasicMaterial({
    map: backTexture,
    transparent: true,
    alphaTest: 0.08,
    opacity: 0.94,
    side: Three.DoubleSide,
    depthWrite: false,
  });

  const shellMaterial = new Three.MeshPhysicalMaterial({
    color: new Three.Color(0xffffff),
    map: sideTexture,
    transparent: true,
    opacity: 0.05,
    roughness: 0.42,
    metalness: 0,
    clearcoat: 0.58,
    clearcoatRoughness: 0.34,
    side: Three.DoubleSide,
    depthWrite: false,
  });
  const shellGeometry = new Three.SphereGeometry(1, 96, 48);
  shellGeometry.scale(width * 0.44, height * 0.32, depth * 0.58);
  const shellMesh = new Three.Mesh(shellGeometry, shellMaterial);
  shellMesh.renderOrder = 0.1;

  const rimGeometry = new Three.CylinderGeometry(1, 1, depth, 128, 1, true);
  rimGeometry.rotateX(Math.PI / 2);
  rimGeometry.scale(width * 0.45, height * 0.33, 1);
  const rimMaterial = new Three.MeshPhysicalMaterial({
    color: new Three.Color(0xffffff),
    map: sideTexture,
    transparent: true,
    opacity: 0.2,
    roughness: 0.5,
    metalness: 0.02,
    clearcoat: 0.42,
    clearcoatRoughness: 0.46,
    side: Three.DoubleSide,
    depthWrite: false,
  });
  const rimMesh = new Three.Mesh(rimGeometry, rimMaterial);
  rimMesh.renderOrder = 0.2;

  const edgeRings = [];
  for (let index = 0; index < 7; index += 1) {
    const t = index / 6;
    const z = -depth * 0.43 + t * depth * 0.86;
    const points = [];
    for (let point = 0; point <= 160; point += 1) {
      const angle = (point / 160) * Math.PI * 2;
      points.push(
        new Three.Vector3(
          Math.cos(angle) * width * 0.45,
          Math.sin(angle) * height * 0.33,
          z,
        ),
      );
    }
    const geometry = new Three.BufferGeometry().setFromPoints(points);
    const material = new Three.LineBasicMaterial({
      color: new Three.Color(index % 2 ? cell.accent : cell.accent2),
      transparent: true,
      opacity: 0.04,
      depthWrite: false,
    });
    const ring = new Three.Line(geometry, material);
    ring.renderOrder = 0.28 + index * 0.01;
    edgeRings.push(ring);
  }

  let plantWallMesh = null;
  let plantWallLines = [];
  if (cell.id === "plant") {
    const plantWallMaterial = new Three.MeshPhysicalMaterial({
      color: new Three.Color(0xffffff),
      map: sideTexture,
      transparent: true,
      opacity: 0.82,
      roughness: 0.54,
      metalness: 0,
      clearcoat: 0.38,
      clearcoatRoughness: 0.48,
      side: Three.DoubleSide,
      depthWrite: true,
    });
    plantWallMesh = new Three.Mesh(
      makePlantWallGeometry(width, height, depth),
      plantWallMaterial,
    );
    plantWallMesh.renderOrder = 0.92;
    plantWallLines = [
      makePlantOutlineLine(width, height, depth / 2 + 0.045, cell.accent, 0.5),
      makePlantOutlineLine(
        width,
        height,
        -depth / 2 - 0.045,
        cell.accent2,
        0.34,
      ),
    ];
  }

  const crossSectionMaterial = new Three.MeshBasicMaterial({
    map: frontTexture,
    transparent: true,
    opacity: 0,
    alphaTest: 0.08,
    side: Three.DoubleSide,
    depthTest: false,
    depthWrite: false,
  });

  const viewCrossSection = new Three.Mesh(
    new Three.PlaneGeometry(width * 0.96, height * 0.96),
    crossSectionMaterial.clone(),
  );
  viewCrossSection.renderOrder = 3.5;

  const interiorMaterial = new Three.MeshBasicMaterial({
    map: frontTexture,
    transparent: true,
    opacity: 0.025,
    alphaTest: 0.08,
    side: Three.DoubleSide,
    depthWrite: false,
  });
  const interiorSlices = [];
  const sliceCount = 15;
  for (let index = 0; index < sliceCount; index += 1) {
    const t = sliceCount === 1 ? 0.5 : index / (sliceCount - 1);
    const offset = -depth * 0.42 + t * depth * 0.84;
    const slice = new Three.Mesh(
      new Three.PlaneGeometry(width * 0.96, height * 0.96),
      interiorMaterial.clone(),
    );
    slice.position.z = offset;
    slice.scale.setScalar(0.97 - Math.abs(t - 0.5) * 0.08);
    slice.renderOrder = 0.6 + index * 0.01;
    interiorSlices.push(slice);
  }

  const planeGeometry = new Three.PlaneGeometry(width, height);
  const frontMesh = new Three.Mesh(planeGeometry.clone(), frontMaterial);
  frontMesh.position.z = depth / 2 + 0.018;
  frontMesh.renderOrder = 2;

  const backMesh = new Three.Mesh(planeGeometry.clone(), backMaterial);
  backMesh.position.z = -depth / 2 - 0.018;
  backMesh.rotation.y = Math.PI;
  backMesh.renderOrder = 1;

  stage.specimenRoot.add(
    shellMesh,
    rimMesh,
    ...edgeRings,
    ...(plantWallMesh ? [plantWallMesh, ...plantWallLines] : []),
    ...interiorSlices,
    backMesh,
    frontMesh,
    viewCrossSection,
  );
  stage.volumeParts = {
    isPlant: cell.id === "plant",
    shellMesh,
    rimMesh,
    edgeRings,
    plantWallMesh,
    plantWallLines,
    viewCrossSection,
    interiorSlices,
    frontMesh,
    backMesh,
  };
  stage.activeId = cell.id;
}

function smoothStep(edge0, edge1, value) {
  const t = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function syncVolumeVisibility() {
  const stage = specimenStage;
  const parts = stage?.volumeParts;
  if (!parts) return;
  syncCalloutVisibility();
  syncSpecimenHoverEffect(stage, specimens[state.active]);
  if (parts.isTripoPending) return;

  const faceVisibility = Math.abs(
    Math.cos(state.rotation) * Math.cos(state.pitch),
  );
  const edgeVisibility = 1 - faceVisibility;
  const facing = Math.cos(state.rotation) * Math.cos(state.pitch);

  if (parts.isTripo) {
    if (parts.tripoModel) parts.tripoModel.visible = true;
    if (stage.label?.material) {
      stage.label.material.opacity = state.labels ? 0.95 : 0;
      stage.label.visible = state.labels;
    }
    if (stage.hotspot?.material) {
      const hotspotOpacity =
        0.95 *
        smoothStep(0.16, 0.44, faceVisibility) *
        smoothStep(0.04, 0.2, facing);
      stage.hotspot.material.opacity = hotspotOpacity;
      stage.hotspot.visible = hotspotOpacity > 0.05;
      if (stage.label?.material) {
        stage.label.material.opacity = hotspotOpacity;
        stage.label.visible = hotspotOpacity > 0.08;
      }
    }
    return;
  }

  if (parts.isPlant) {
    parts.shellMesh.material.opacity = edgeVisibility * 0.04;
    parts.rimMesh.material.opacity = edgeVisibility * 0.06;
    parts.rimMesh.visible = edgeVisibility > 0.08;
    parts.edgeRings.forEach((ring, index) => {
      ring.material.opacity = edgeVisibility * (0.032 + index * 0.004);
      ring.visible = edgeVisibility > 0.08;
    });
    if (parts.plantWallMesh?.material) {
      parts.plantWallMesh.material.opacity = edgeVisibility * 0.9;
      parts.plantWallMesh.visible = edgeVisibility > 0.025;
    }
    parts.plantWallLines?.forEach((line, index) => {
      line.material.opacity = edgeVisibility * (index === 0 ? 0.2 : 0.12);
      line.visible = edgeVisibility > 0.08;
    });
  } else {
    parts.shellMesh.material.opacity =
      (state.cross ? 0.024 : 0.034) +
      edgeVisibility * (state.cross ? 0.3 : 0.34);
    parts.rimMesh.material.opacity =
      0.06 + edgeVisibility * (state.cross ? 0.5 : 0.54);
    parts.rimMesh.visible = edgeVisibility > 0.08;
    parts.edgeRings.forEach((ring, index) => {
      ring.material.opacity = 0.035 + edgeVisibility * (0.24 + index * 0.012);
      ring.visible = edgeVisibility > 0.05;
    });
  }

  const faceOpacity = smoothStep(0.1, 0.36, faceVisibility);
  parts.frontMesh.material.opacity = facing >= 0 ? faceOpacity : 0;
  parts.backMesh.material.opacity = facing < 0 ? faceOpacity * 0.96 : 0;
  parts.frontMesh.visible = parts.frontMesh.material.opacity > 0.03;
  parts.backMesh.visible = parts.backMesh.material.opacity > 0.03;

  parts.viewCrossSection.material.opacity = 0;
  parts.viewCrossSection.visible = false;

  const sliceOpacity = parts.isPlant
    ? (state.cross ? 0.018 : 0.012) +
      edgeVisibility * (state.cross ? 0.04 : 0.028)
    : (state.cross ? 0.01 : 0.006) +
      edgeVisibility * (state.cross ? 0.02 : 0.012);
  parts.interiorSlices.forEach((slice, index) => {
    const centerBias =
      1 -
      Math.abs(index - (parts.interiorSlices.length - 1) / 2) /
        parts.interiorSlices.length;
    slice.material.opacity = sliceOpacity * (0.62 + centerBias * 0.56);
  });

  if (stage.hotspot?.material) {
    const hotspotOpacity =
      0.95 *
      smoothStep(0.16, 0.44, faceVisibility) *
      smoothStep(0.04, 0.2, facing);
    stage.hotspot.material.opacity = hotspotOpacity;
    stage.hotspot.visible = hotspotOpacity > 0.05;
    if (stage.label?.material) {
      stage.label.material.opacity = hotspotOpacity;
      stage.label.visible = hotspotOpacity > 0.08;
    }
  }

  parts.viewCrossSection.quaternion
    .copy(stage.specimenRoot.quaternion)
    .invert();
}

function syncSpecimenHotspot(cell) {
  const stage = specimenStage;
  if (!stage?.dimensions) return;
  if (stage.volumeParts?.isTripoPending) return;
  if (
    stage.volumeParts?.isTripo &&
    !isSpecimenSceneReadyForCallouts(stage, cell)
  ) {
    clearSpecimenCallouts(stage);
    stage.calloutKey = `${cell.id}:callouts-pending`;
    return;
  }
  const active = cell.organelles[state.organelle]?.name;
  const mode = stage.volumeParts?.isTripo ? "tripo" : "fallback";
  const calloutKey = `${cell.id}:${mode}:${active}:${state.labels}:${state.isolate}:${state.hideOthers}`;
  if (stage.calloutKey === calloutKey) return;

  clearSpecimenCallouts(stage);
  stage.hotspotName = active;
  stage.labelVisible = state.labels;
  stage.calloutKey = calloutKey;

  if (!state.labels) return;

  const calloutGroup = makeSpecimenCalloutGroup(stage, cell);
  if (calloutGroup.children.length) {
    stage.calloutGroup = calloutGroup;
    stage.specimenRoot.add(calloutGroup);
  }
}

function clearSpecimenCallouts(stage) {
  if (stage.hotspot) stage.specimenRoot.remove(stage.hotspot);
  if (stage.label) stage.specimenRoot.remove(stage.label);
  if (stage.calloutGroup) stage.specimenRoot.remove(stage.calloutGroup);
  stage.hotspot = null;
  stage.label = null;
  stage.calloutGroup = null;
  stage.calloutInteractive = [];
  state.hoveredCalloutName = null;
  if (els.stageCard) delete els.stageCard.dataset.hoverCallout;
  els.canvas.style.cursor = "";
  removeHoverHighlight(stage);
}

function isSpecimenSceneReadyForCallouts(stage, cell) {
  const config = tripoModelSources[cell.id];
  const entry = config ? stage.tripoModelCache.get(config.src) : null;
  if (entry?.status !== "loaded" || !entry.revealTriggered) return false;
  if (state.pendingRevealId === cell.id) return false;
  if (els.modelLoading && !els.modelLoading.hidden) return false;
  if (els.stageCard?.classList.contains("is-model-revealing")) return false;
  return true;
}

function calloutAnchor(x, y, z, labelX, labelY, labelZ) {
  return { x, y, z, labelX, labelY, labelZ };
}

function makeSpecimenCalloutGroup(stage, cell) {
  const group = new Three.Group();
  group.renderOrder = 7;
  stage.calloutInteractive = [];
  const anchors = stage.volumeParts?.isTripo
    ? tripoHotspotAnchors[cell.id]
    : fallbackCalloutAnchors(stage, cell);
  if (!anchors) return group;

  const mirrorX = Boolean(
    stage.volumeParts?.isTripo && tripoModelSources[cell.id]?.mirrorX,
  );
  cell.organelles.forEach((item, index) => {
    const anchor = anchors[item.name];
    if (!anchor) return;
    group.add(
      makeStructureCallout(stage, cell, item, anchor, {
        active: index === state.organelle,
        dimmed:
          (state.isolate || state.hideOthers) && index !== state.organelle,
        mirrorX,
        index,
      }),
    );
  });

  return group;
}

function fallbackCalloutAnchors(stage, cell) {
  const { width, height, depth, layout } = stage.dimensions;
  const sourceHeight = layout.width * (9 / 16);
  return Object.fromEntries(
    cell.organelles
      .map((item) => {
        const target = layout.hotspots?.[item.name];
        if (!target) return null;
        return [
          item.name,
          calloutAnchor(
            (target.x / layout.width) * width,
            -(target.y / sourceHeight) * height,
            depth / 2 + 0.12,
            (target.labelX / layout.width) * width,
            -(target.labelY / sourceHeight) * height,
            depth / 2 + 0.42,
          ),
        ];
      })
      .filter(Boolean),
  );
}

function makeStructureCallout(stage, cell, item, anchor, options = {}) {
  const active = Boolean(options.active);
  const dimmed = Boolean(options.dimmed);
  const mirror = options.mirrorX ? -1 : 1;
  const opacity = dimmed ? 0.24 : active ? 1 : 0.74;
  const anchorPoint = new Three.Vector3(anchor.x * mirror, anchor.y, anchor.z);
  const point = resolveSurfaceCalloutPoint(
    stage,
    anchorPoint,
    `${cell.id}:${item.name}:${anchor.x}:${anchor.y}:${anchor.z}:${mirror}`,
  );
  const labelLimitX = cell.id === "neuron" ? 1.78 : 1.35;
  const label = new Three.Vector3(
    Math.min(labelLimitX, Math.max(-labelLimitX, anchor.labelX * mirror)),
    Math.min(1.38, Math.max(-1.22, anchor.labelY)),
    anchor.labelZ,
  );
  const elbow = new Three.Vector3(
    (point.x + label.x) / 2,
    label.y,
    Math.max(point.z, label.z) + 0.08,
  );
  const group = new Three.Group();
  group.userData.calloutName = item.name;
  group.userData.calloutIndex = options.index ?? 0;
  group.userData.calloutPoint = point.clone();
  group.userData.calloutColor = item.color;

  const markerGeometry = new Three.SphereGeometry(
    active ? 0.082 : 0.058,
    14,
    10,
  );
  const markerMaterial = new Three.MeshBasicMaterial({
    color: new Three.Color(item.color),
    transparent: true,
    opacity,
    depthTest: false,
    depthWrite: false,
  });
  markerMaterial.userData.baseOpacity = opacity;
  const marker = new Three.Mesh(markerGeometry, markerMaterial);
  marker.position.copy(point);
  marker.renderOrder = 7;

  const lineGeometry = new Three.BufferGeometry().setFromPoints([
    point,
    elbow,
    label,
  ]);
  const lineMaterial = new Three.LineBasicMaterial({
    color: new Three.Color(item.color),
    transparent: true,
    opacity: opacity * 0.9,
    depthTest: false,
    depthWrite: false,
  });
  lineMaterial.userData.baseOpacity = opacity * 0.9;
  const line = new Three.Line(lineGeometry, lineMaterial);
  line.renderOrder = 6.9;

  const labelSprite = makeCalloutTextSprite(
    item.name,
    item.tagline,
    item.color,
    active,
    opacity,
  );
  labelSprite.position.copy(label);
  labelSprite.renderOrder = 7.1;

  const labelHit = new Three.Sprite(
    new Three.SpriteMaterial({
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
    }),
  );
  labelHit.position.copy(label);
  labelHit.scale.set(labelSprite.scale.x + 0.34, labelSprite.scale.y + 0.22, 1);
  labelHit.renderOrder = 8;

  const markerHit = new Three.Mesh(
    new Three.SphereGeometry(0.16, 12, 8),
    new Three.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
    }),
  );
  markerHit.position.copy(point);
  markerHit.renderOrder = 8;

  [line, marker, labelSprite, labelHit, markerHit].forEach((node) => {
    node.userData.calloutName = item.name;
    node.userData.calloutIndex = options.index ?? 0;
    node.userData.calloutPoint = point.clone();
    node.userData.calloutColor = item.color;
  });
  stage.calloutInteractive.push(labelHit, markerHit, labelSprite, marker);
  group.add(line, marker, labelSprite, labelHit, markerHit);
  return group;
}

function resolveSurfaceCalloutPoint(stage, anchorPoint, cacheKey) {
  if (!stage.volumeParts?.isTripo || !stage.volumeParts.tripoModel)
    return anchorPoint;
  if (cacheKey && stage.surfacePointCache.has(cacheKey)) {
    return stage.surfacePointCache.get(cacheKey).clone();
  }

  const meshes = stage.volumeParts.tripoModel.userData.surfaceMeshes || [];
  if (!meshes.length) return anchorPoint;

  stage.scene.updateMatrixWorld(true);
  const rootMatrix = stage.specimenRoot.matrixWorld;
  const worldToRoot = new Three.Matrix4().copy(rootMatrix).invert();
  const cameraWorld = stage.camera.getWorldPosition(new Three.Vector3());
  const raycaster = new Three.Raycaster();
  const probeOffsets = [
    [0, 0],
    [0.14, 0],
    [-0.14, 0],
    [0, 0.14],
    [0, -0.14],
    [0.24, 0.24],
    [-0.24, 0.24],
    [0.24, -0.24],
    [-0.24, -0.24],
  ];
  let bestHit = null;
  let bestScore = Infinity;

  probeOffsets.forEach(([x, y], index) => {
    const probePoint = anchorPoint.clone().add(new Three.Vector3(x, y, 0));
    const targetWorld = probePoint.applyMatrix4(rootMatrix);
    const direction = targetWorld.clone().sub(cameraWorld).normalize();
    raycaster.set(cameraWorld, direction);
    raycaster.near = 0.1;
    raycaster.far = 100;
    const hit = raycaster.intersectObjects(meshes, true)[0];
    if (!hit) return;
    const hitLocal = hit.point.clone().applyMatrix4(worldToRoot);
    const score = hitLocal.distanceTo(anchorPoint) + index * 0.002;
    if (score < bestScore) {
      bestScore = score;
      bestHit = hitLocal;
    }
  });

  if (!bestHit) return anchorPoint;

  const cameraLocal = cameraWorld.clone().applyMatrix4(worldToRoot);
  const resolved = bestHit.add(
    cameraLocal.sub(bestHit).normalize().multiplyScalar(0.035),
  );
  if (cacheKey) stage.surfacePointCache.set(cacheKey, resolved.clone());
  return resolved;
}

function makeCalloutTextSprite(title, subtitle, color, active, opacity) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = active ? "rgba(3, 17, 29, 0.92)" : "rgba(5, 23, 36, 0.8)";
  context.strokeStyle = color;
  context.lineWidth = active ? 5 : 3;
  roundRect(context, 22, 30, 780, 150, 22);
  context.fill();
  context.stroke();
  context.fillStyle = color;
  context.beginPath();
  context.arc(62, 105, active ? 16 : 12, 0, Math.PI * 2);
  context.fill();
  context.font = "700 42px IBM Plex Mono, monospace";
  context.fillStyle = "rgba(245, 252, 255, 0.96)";
  context.fillText(title, 94, 100);
  context.font = "600 24px IBM Plex Sans, sans-serif";
  context.fillStyle = "rgba(166, 204, 221, 0.9)";
  context.fillText(subtitle, 94, 139);

  const texture = new Three.CanvasTexture(canvas);
  texture.colorSpace = Three.SRGBColorSpace;
  const material = new Three.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity,
    depthTest: false,
    depthWrite: false,
  });
  material.userData.baseOpacity = opacity;
  const sprite = new Three.Sprite(material);
  const width = Math.min(2.22, Math.max(1.48, title.length * 0.075 + 0.72));
  sprite.scale.set(width, 0.5, 1);
  return sprite;
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
}

function syncCalloutVisibility() {
  const group = specimenStage?.calloutGroup;
  if (!group) return;
  group.visible = state.labels;
  const hovered = state.hoveredCalloutName;
  group.children.forEach((callout) => {
    const isHovered = hovered && callout.userData.calloutName === hovered;
    const isOther = hovered && callout.userData.calloutName !== hovered;
    callout.traverse((node) => {
      const materials = Array.isArray(node.material)
        ? node.material
        : node.material
          ? [node.material]
          : [];
      materials.forEach((material) => {
        const baseOpacity = material.userData.baseOpacity ?? material.opacity;
        const emphasis = isOther ? 0.18 : isHovered ? 1.12 : 1;
        material.opacity = state.labels
          ? Math.min(1, baseOpacity * emphasis)
          : 0;
        material.needsUpdate = true;
      });
    });
  });
}

function setHoveredCallout(name) {
  const nextName = name || null;
  if (state.hoveredCalloutName === nextName) return;
  state.hoveredCalloutName = nextName;
  if (els.stageCard) {
    if (nextName) els.stageCard.dataset.hoverCallout = nextName;
    else delete els.stageCard.dataset.hoverCallout;
  }
  els.canvas.style.cursor = nextName ? "pointer" : "";
  syncDetailPanelForCalloutHover();
  syncCalloutVisibility();
  syncSpecimenHoverEffect(specimenStage, specimens[state.active]);
}

function clearHoveredCallout() {
  setHoveredCallout(null);
}

function syncDetailPanelForCalloutHover() {
  const cell = specimens[state.active];
  if (!cell) return;
  const selectedItem = cell.organelles[state.organelle];
  const hoveredItem = state.hoveredCalloutName
    ? cell.organelles.find((item) => item.name === state.hoveredCalloutName)
    : null;
  renderDetailPanel(cell, hoveredItem || selectedItem, cell.type === "origin", {
    preview: Boolean(hoveredItem),
  });
  syncLegendForCalloutHover();
}

function syncLegendForCalloutHover() {
  const cell = specimens[state.active];
  if (!cell) return;
  const hoveredIndex = state.hoveredCalloutName
    ? cell.organelles.findIndex(
        (item) => item.name === state.hoveredCalloutName,
      )
    : -1;
  const activeIndex = hoveredIndex >= 0 ? hoveredIndex : state.organelle;
  const activeItem =
    cell.organelles[activeIndex] || cell.organelles[state.organelle];
  renderLegend(cell, activeItem, cell.type === "origin", {
    activeIndex,
    preview: hoveredIndex >= 0,
  });
}

function updateCalloutHoverFromPointer(event) {
  const stage = specimenStage;
  const cell = specimens[state.active];
  if (
    !stage?.calloutInteractive?.length ||
    !isSpecimenSceneReadyForCallouts(stage, cell)
  ) {
    clearHoveredCallout();
    return null;
  }
  const rect = els.canvas.getBoundingClientRect();
  stage.calloutPointer.set(
    ((event.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1,
    -(((event.clientY - rect.top) / Math.max(1, rect.height)) * 2 - 1),
  );
  stage.scene.updateMatrixWorld(true);
  stage.calloutRaycaster.setFromCamera(stage.calloutPointer, stage.camera);
  const hit = stage.calloutRaycaster
    .intersectObjects(stage.calloutInteractive, true)
    .find((item) => item.object.userData.calloutName);
  const nextName = hit?.object.userData.calloutName || null;
  setHoveredCallout(nextName);
  return nextName;
}

function selectCalloutFeature(name) {
  if (!name) return false;
  const cell = specimens[state.active];
  const nextIndex =
    cell?.organelles.findIndex((item) => item.name === name) ?? -1;
  if (nextIndex < 0) return false;
  const selectedName = cell.organelles[nextIndex].name;
  state.organelle = nextIndex;
  state.hoveredCalloutName = null;
  if (els.stageCard) delete els.stageCard.dataset.hoverCallout;
  els.canvas.style.cursor = "";
  updateUI();
  showToast(`${selectedName} selected`);
  return true;
}

function syncSpecimenHoverEffect(stage, cell) {
  if (!stage?.volumeParts) return;
  const hovered = state.hoveredCalloutName;
  const hoveredCallout = hovered
    ? stage.calloutGroup?.children.find(
        (child) => child.userData.calloutName === hovered,
      )
    : null;
  const active = Boolean(
    hoveredCallout && isSpecimenSceneReadyForCallouts(stage, cell),
  );
  const materials = stage.volumeParts.specimenMaterials || [];
  materials.forEach((material) => {
    if (material?.userData?.hoverDesaturate) {
      material.userData.hoverDesaturate.value = active ? 0.95 : 0;
    }
  });
  if (!active) {
    removeHoverHighlight(stage);
    return;
  }
  showHoverHighlight(
    stage,
    hoveredCallout.userData.calloutName,
    hoveredCallout.userData.calloutPoint,
    hoveredCallout.userData.calloutColor,
  );
}

function removeHoverHighlight(stage) {
  if (!stage?.hoverHighlight) return;
  stage.specimenRoot.remove(stage.hoverHighlight);
  stage.hoverHighlight = null;
  stage.hoverHighlightName = null;
}

function showHoverHighlight(stage, name, point, color) {
  if (!point) return;
  if (stage.hoverHighlightName !== name) {
    removeHoverHighlight(stage);
    stage.hoverHighlight = makeHoverHighlight(color);
    stage.hoverHighlightName = name;
    stage.specimenRoot.add(stage.hoverHighlight);
  }
  stage.hoverHighlight.position.copy(point);
  stage.hoverHighlight.lookAt(stage.camera.position);
  const pulse = 1 + Math.sin(performance.now() * 0.008) * 0.045;
  stage.hoverHighlight.scale.setScalar(pulse);
}

function makeHoverHighlight(color) {
  const group = new Three.Group();
  group.renderOrder = 8.5;
  const glowTexture = makeHoverGlowTexture(color);
  const glow = new Three.Sprite(
    new Three.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      opacity: 0.92,
      depthTest: false,
      depthWrite: false,
    }),
  );
  glow.scale.set(0.86, 0.86, 1);
  const ring = new Three.Mesh(
    new Three.TorusGeometry(0.22, 0.012, 12, 64),
    new Three.MeshBasicMaterial({
      color: new Three.Color(color),
      transparent: true,
      opacity: 0.96,
      depthTest: false,
      depthWrite: false,
    }),
  );
  ring.renderOrder = 8.6;
  const dot = new Three.Mesh(
    new Three.SphereGeometry(0.07, 16, 10),
    new Three.MeshBasicMaterial({
      color: new Three.Color(color),
      transparent: true,
      opacity: 1,
      depthTest: false,
      depthWrite: false,
    }),
  );
  dot.renderOrder = 8.7;
  group.add(glow, ring, dot);
  return group;
}

function makeHoverGlowTexture(color) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(128, 128, 10, 128, 128, 126);
  gradient.addColorStop(0, hexToRgba(color, 0.8));
  gradient.addColorStop(0.34, hexToRgba(color, 0.26));
  gradient.addColorStop(1, hexToRgba(color, 0));
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
  const texture = new Three.CanvasTexture(canvas);
  texture.colorSpace = Three.SRGBColorSpace;
  return texture;
}

function makeTextSprite(text, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  context.font = "700 42px IBM Plex Mono, monospace";
  context.lineWidth = 12;
  context.strokeStyle = "rgba(255,251,238,0.92)";
  context.fillStyle = color;
  context.strokeText(text, 18, 70);
  context.fillText(text, 18, 70);
  const texture = new Three.CanvasTexture(canvas);
  texture.colorSpace = Three.SRGBColorSpace;
  const material = new Three.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });
  const sprite = new Three.Sprite(material);
  sprite.scale.set(1.8, 0.45, 1);
  return sprite;
}

function renderSpecimen3D(cell, time) {
  const stage = specimenStage;
  if (!stage) return;
  if (stage.activeId !== cell.id) buildSpecimenVolume(cell);
  syncModelLoading(cell);
  syncPendingModelReveal(cell);
  stage.specimenRoot.rotation.set(
    state.pitch,
    state.rotation,
    Math.sin(state.rotation) * 0.05,
  );
  stage.specimenRoot.updateMatrixWorld(true);
  syncSpecimenHotspot(cell);
  syncVolumeVisibility();
  stage.specimenRoot.position.set(state.panX / 110, -state.panY / 110, 0);
  const pulse = state.animate ? 1 + Math.sin(time * 2.4) * 0.012 : 1;
  const faceVisibility = Math.abs(
    Math.cos(state.rotation) * Math.cos(state.pitch),
  );
  let specimenFitScale =
    cell.id === "plant" && !stage.volumeParts?.isTripo
      ? 0.78 + faceVisibility * 0.22
      : 1;
  if (stage.volumeParts?.isTripo) {
    const rect = els.canvas.getBoundingClientRect();
    specimenFitScale = rect.width < 640 ? Math.max(0.5, rect.width / 740) : 1;
  }
  stage.specimenRoot.scale.setScalar(state.zoom * pulse * specimenFitScale);
  stage.renderer.render(stage.scene, stage.camera);
}

function syncModelLoading(cell) {
  if (!els.modelLoading) return;
  const config = tripoModelSources[cell.id];
  const entry = config ? specimenStage?.tripoModelCache.get(config.src) : null;
  const loadedElapsed =
    entry?.status === "loaded" && entry.readySince
      ? performance.now() - entry.readySince
      : 0;
  const readyHold =
    entry?.status === "loaded" &&
    entry.readySince &&
    (loadedElapsed < 260 || (entry.displayProgress || 0) < 99.5);
  const loading =
    entry &&
    (entry.status === "checking" || entry.status === "loading" || readyHold);
  const failed = entry?.status === "error" || entry?.status === "missing";
  if (!loading && !failed) {
    if (entry?.status === "loaded" && !entry.revealTriggered)
      triggerModelReveal(cell, entry);
    els.modelLoading.hidden = true;
    return;
  }

  const now = performance.now();
  if (entry.phase === "finalizing" && !entry.finalizingStartedAt) {
    entry.finalizingStartedAt = now;
    entry.finalizingStartProgress = clampNumber(
      Math.max(entry.displayProgress || 0, entry.targetProgress || 0, 82),
      72,
      92,
    );
  }

  const readySettling = readyHold && loadedElapsed < 220;
  let target = failed
    ? 0
    : readyHold
      ? readySettling
        ? Math.max(entry.displayProgress || 82, 86)
        : 100
      : entry.targetProgress || (entry.status === "checking" ? 6 : 14);
  if (!failed && !readyHold && entry.status === "checking") {
    target = clampNumber(6 + (now - (entry.startedAt || now)) / 220, 6, 12);
  } else if (
    !failed &&
    !readyHold &&
    entry.status === "loading" &&
    entry.phase !== "finalizing"
  ) {
    const elapsed = now - (entry.startedAt || now);
    target = Math.max(target, clampNumber(14 + elapsed / 110, 14, 76));
    target = clampNumber(target, 14, 90);
  } else if (!failed && !readyHold && entry.status === "loading") {
    const elapsed = now - (entry.finalizingStartedAt || now);
    const start = clampNumber(
      entry.finalizingStartProgress || entry.targetProgress || 84,
      72,
      92,
    );
    const syntheticFinalize =
      start + (98.4 - start) * (1 - Math.exp(-elapsed / 5200));
    target = clampNumber(Math.max(target, syntheticFinalize), start, 98.4);
  }

  const current = Number.isFinite(entry.displayProgress)
    ? entry.displayProgress
    : 1;
  const frameMs = clampNumber(now - (entry.lastDisplayAt || now), 0, 80);
  entry.lastDisplayAt = now;
  const speed = target >= 100 ? 160 : entry.phase === "finalizing" ? 7.5 : 34;
  const maxStep =
    target >= 100
      ? Math.max(6, (speed * frameMs) / 1000)
      : (speed * frameMs) / 1000;
  const step =
    target > current ? Math.min(target - current, maxStep) : target - current;
  entry.displayProgress = failed ? 0 : clampNumber(current + step, 0, target);
  const percent = failed
    ? 0
    : target >= 100
      ? Math.min(100, Math.round(entry.displayProgress))
      : Math.min(98, Math.floor(entry.displayProgress));
  els.modelLoading.hidden = false;
  els.modelLoading.dataset.status = failed ? "error" : "loading";
  els.modelLoading.style.setProperty("--model-progress", `${percent}%`);
  els.modelLoadingPercent.textContent = failed ? "!" : `${percent}%`;
  els.modelLoadingBar?.setAttribute("aria-valuenow", String(percent));
  els.modelLoadingTitle.textContent = failed
    ? "Model unavailable"
    : `Loading ${cell.name}`;
  els.modelLoadingText.textContent = failed
    ? "Using available fallback view"
    : readyHold || entry.phase === "ready"
      ? "Ready"
      : entry.status === "checking"
        ? "Checking local model asset"
        : entry.phase === "finalizing"
          ? "Finalizing geometry and labels"
          : "Streaming geometry and textures";
}

function clearModelReveal() {
  if (modelRevealTimer) {
    clearTimeout(modelRevealTimer);
    modelRevealTimer = null;
  }
  els.stageCard?.classList.remove("is-model-revealing");
  if (els.stageCard) delete els.stageCard.dataset.revealId;
}

function triggerModelReveal(cell, entry) {
  if (!els.stageCard) return;
  entry.revealTriggered = true;
  if (modelRevealTimer) clearTimeout(modelRevealTimer);
  els.stageCard.classList.remove("is-model-revealing");
  els.stageCard.dataset.revealId = cell.id;
  void els.stageCard.offsetWidth;
  els.stageCard.classList.add("is-model-revealing");
  modelRevealTimer = setTimeout(() => {
    if (els.stageCard?.dataset.revealId === cell.id) {
      els.stageCard.classList.remove("is-model-revealing");
      delete els.stageCard.dataset.revealId;
    }
    modelRevealTimer = null;
  }, 760);
}

function syncPendingModelReveal(cell) {
  if (state.pendingRevealId !== cell.id) return;
  const config = tripoModelSources[cell.id];
  const entry = config ? specimenStage?.tripoModelCache.get(config.src) : null;
  if (entry?.status !== "loaded" || specimenStage?.activeId !== cell.id) return;
  state.pendingRevealId = null;
  triggerModelReveal(cell, entry);
}

function resetModelLoadingOverlay() {
  if (!els.modelLoading) return;
  els.modelLoading.hidden = true;
  els.modelLoading.style.setProperty("--model-progress", "0%");
  els.modelLoadingPercent.textContent = "0%";
  els.modelLoadingBar?.setAttribute("aria-valuenow", "0");
  els.modelLoadingTitle.textContent = "Loading model";
  els.modelLoadingText.textContent = "Preparing specimen geometry";
}

function resize3D() {
  if (!specimenStage) return;
  const rect = els.canvas.getBoundingClientRect();
  specimenStage.renderer.setSize(
    Math.max(1, rect.width),
    Math.max(1, rect.height),
    false,
  );
  specimenStage.camera.aspect =
    Math.max(1, rect.width) / Math.max(1, rect.height);
  specimenStage.camera.updateProjectionMatrix();
}

function organelle(name, tagline, color, size, location, visible, purpose) {
  return { name, tagline, color, size, location, visible, purpose };
}

function setTheme(cell) {
  els.root.style.setProperty("--accent", cell.accent);
  els.root.style.setProperty("--accent-2", cell.accent2);
  els.root.style.setProperty("--accent-soft", hexToRgba(cell.accent, 0.16));
}

function hexToRgba(hex, alpha) {
  const raw = hex.replace("#", "");
  const value = parseInt(raw, 16);
  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
}

function wrapAngle(value) {
  const fullTurn = Math.PI * 2;
  return ((value % fullTurn) + fullTurn) % fullTurn;
}

function init() {
  renderCellList();
  renderOriginList();
  bindControls();
  resizeAll();
  selectCell(0);
  requestAnimationFrame(loop);
}

function renderCellList() {
  updateSpecimenDropdownLabels();
  renderOpenSpecimenDropdowns();
}

function getSpecimenDropdownMenu(kind) {
  return kind === "origin" ? els.originDropdownMenu : els.cellDropdownMenu;
}

function getSpecimenDropdownButton(kind) {
  return kind === "origin" ? els.originDropdownBtn : els.cellDropdownBtn;
}

function resetSpecimenDropdownMenu(menu) {
  if (!menu) return;
  menu.hidden = true;
  menu.innerHTML = "";
}

function isSpecimenDropdownOpen(kind) {
  return Boolean(state.specimenDropdowns?.[kind]);
}

function closeSpecimenDropdowns() {
  setSpecimenDropdownOpen("cell", false);
  setSpecimenDropdownOpen("origin", false);
}

function setSpecimenDropdownOpen(kind, open) {
  state.specimenDropdowns[kind] = open;
  const menu = getSpecimenDropdownMenu(kind);
  getSpecimenDropdownButton(kind)?.setAttribute(
    "aria-expanded",
    open ? "true" : "false",
  );
  if (open) renderSpecimenDropdownMenu(kind, menu);
  else resetSpecimenDropdownMenu(menu);
}

function toggleSpecimenDropdown(kind) {
  setSpecimenDropdownOpen(kind, !isSpecimenDropdownOpen(kind));
}

function renderOpenSpecimenDropdowns() {
  ["cell", "origin"].forEach((kind) => {
    setSpecimenDropdownOpen(kind, isSpecimenDropdownOpen(kind));
  });
}

function updateSpecimenDropdownLabels() {
  const cell = specimens[state.active];
  if (els.cellDropdownLabel) {
    els.cellDropdownLabel.textContent =
      cell?.type === "origin" ? "Choose cell" : cell?.name || "Choose cell";
  }
  if (els.originDropdownLabel) {
    els.originDropdownLabel.textContent =
      cell?.type === "origin" ? cell.name : "Origins";
  }
}

function applySpecimenSearch() {
  state.searchOpen = true;
  renderSearchSuggestions();
}

function renderOriginList() {
  updateSpecimenDropdownLabels();
  renderOpenSpecimenDropdowns();
}

function renderSpecimenDropdownMenu(
  kind,
  menu = getSpecimenDropdownMenu(kind),
) {
  if (!menu || !kind) return;
  const query = "";
  const menuItems =
    kind === "origin"
      ? originItems.map((item, index) => ({
          specimen: item,
          index: cellTypes.length + index,
        }))
      : cellTypes.map((item, index) => ({ specimen: item, index }));
  const filtered = menuItems.filter(({ specimen }) => {
    const haystack = [
      specimen.id,
      specimen.name,
      specimen.subtitle,
      specimen.occurrence,
      ...specimen.organelles.map((item) => item.name),
    ]
      .join(" ")
      .toLowerCase();
    return !query || haystack.includes(query);
  });

  const rows = filtered
    .map(({ specimen, index }) => {
      const thumb = specimenThumbBackground(specimen);
      return `
        <button type="button" class="cell-button" data-index="${index}" aria-current="${state.active === index ? "true" : "false"}">
          <span class="cell-thumb" style="--thumb:${thumb}" aria-hidden="true"></span>
          <span>
            <strong>${specimen.name}</strong>
            <span>${specimen.subtitle}</span>
          </span>
          <span class="star-mark" aria-hidden="true"></span>
        </button>
      `;
    })
    .join("");
  menu.hidden = false;
  menu.innerHTML =
    rows ||
    `<div class="cell-list-empty">No matching ${kind === "origin" ? "origin concept" : "specimen"}</div>`;
}

function getSpecimenSearchMatches() {
  const query = state.searchQuery.trim().toLowerCase();
  const entries = specimens.map((specimen, index) => ({
    specimen,
    index,
    kind: specimen.type === "origin" ? "Life Origin" : "Cell Type",
  }));

  if (!query) return entries.slice(0, 8);

  return entries
    .map((entry) => {
      const { specimen } = entry;
      const primary = [specimen.name, specimen.id]
        .join(" ")
        .toLowerCase();
      const secondary = [specimen.subtitle, specimen.occurrence]
        .join(" ")
        .toLowerCase();
      const structureText = specimen.organelles
        .map((item) => item.name)
        .join(" ")
        .toLowerCase();
      const haystack = [
        specimen.id,
        specimen.name,
        specimen.subtitle,
        specimen.occurrence,
        specimen.type === "origin" ? "life origin origin of life" : "cell type",
        ...specimen.organelles.map((item) => item.name),
      ]
        .join(" ")
        .toLowerCase();

      let score = 4;
      if (primary.startsWith(query)) score = 0;
      else if (primary.includes(query)) score = 1;
      else if (secondary.includes(query)) score = 2;
      else if (structureText.includes(query)) score = 3;
      return { ...entry, score, matched: haystack.includes(query) };
    })
    .filter((entry) => entry.matched)
    .sort((a, b) => a.score - b.score || a.index - b.index)
    .slice(0, 8);
}

function renderSearchSuggestions() {
  if (!els.searchSuggestions) return;
  els.specimenSearch?.setAttribute(
    "aria-expanded",
    state.searchOpen ? "true" : "false",
  );
  if (!state.searchOpen) {
    els.searchSuggestions.hidden = true;
    els.searchSuggestions.innerHTML = "";
    return;
  }

  const matches = getSpecimenSearchMatches();
  els.searchSuggestions.hidden = false;
  els.searchSuggestions.innerHTML = matches.length
    ? matches
        .map(({ specimen, index, kind }) => {
          const thumb = specimenThumbBackground(specimen);
          return `
            <button type="button" class="search-suggestion" data-search-index="${index}" aria-current="${state.active === index ? "true" : "false"}">
              <span class="search-suggestion-thumb" style="--thumb:${thumb}" aria-hidden="true"></span>
              <span class="search-suggestion-copy">
                <strong>${specimen.name}</strong>
                <span>${specimen.subtitle}</span>
              </span>
              <span class="search-suggestion-kind">${kind}</span>
            </button>
          `;
        })
        .join("")
    : `<div class="search-empty">No matching specimen</div>`;
}

function closeSearchSuggestions() {
  state.searchOpen = false;
  renderSearchSuggestions();
}

function selectSearchSuggestion(index) {
  if (!Number.isFinite(index) || !specimens[index]) return;
  state.searchQuery = specimens[index].name;
  if (els.specimenSearch) els.specimenSearch.value = state.searchQuery;
  closeSearchSuggestions();
  selectCell(index);
}

function openSearchWithFocus() {
  state.searchOpen = true;
  renderSearchSuggestions();
  syncTopControls();
  requestAnimationFrame(() => els.specimenSearch?.focus());
}

function isTextEntryTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  const tagName = target.tagName.toLowerCase();
  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    target.isContentEditable
  );
}

function getTouchGestureSnapshot() {
  const [first, second] = [...state.activePointers.values()];
  if (!first || !second) return null;
  const centerX = (first.x + second.x) / 2;
  const centerY = (first.y + second.y) / 2;
  return {
    centerX,
    centerY,
    distance: Math.max(1, Math.hypot(first.x - second.x, first.y - second.y)),
  };
}

function beginPinchGesture() {
  const snapshot = getTouchGestureSnapshot();
  if (!snapshot) return;
  state.pinch = {
    centerX: snapshot.centerX,
    centerY: snapshot.centerY,
    distance: snapshot.distance,
    zoom: state.zoom,
    panX: state.panX,
    panY: state.panY,
  };
}

function updatePinchGesture() {
  if (!state.pinch) beginPinchGesture();
  const snapshot = getTouchGestureSnapshot();
  if (!snapshot || !state.pinch) return;
  state.dragMoved = true;
  state.zoom = clampNumber(
    state.pinch.zoom * (snapshot.distance / state.pinch.distance),
    0.72,
    1.62,
  );
  state.panX = state.pinch.panX + snapshot.centerX - state.pinch.centerX;
  state.panY = state.pinch.panY + snapshot.centerY - state.pinch.centerY;
}

function renderOrganelleList(cell) {
  els.organelleList.innerHTML = cell.organelles
    .map(
      (item, index) => `
        <button type="button" class="organelle-chip" data-organelle="${index}">
          <span class="color-dot" style="--dot:${item.color}" aria-hidden="true"></span>
          <span>${item.name}</span>
        </button>
      `,
    )
    .join("");

  els.organelleList.querySelectorAll("[data-organelle]").forEach((button) => {
    button.addEventListener("click", () => {
      state.organelle = Number(button.dataset.organelle);
      updateUI();
    });
  });
}

function bindControls() {
  document.querySelector(".brand")?.addEventListener("click", (event) => {
    event.preventDefault();
    selectCell(2);
    showToast("Returned to the default neuron view");
  });

  els.navSearch.addEventListener("click", (event) => {
    event.stopPropagation();
    openSearchWithFocus();
  });

  els.specimenSearch.addEventListener("focus", () => {
    state.searchOpen = true;
    renderSearchSuggestions();
    syncTopControls();
  });

  els.specimenSearch.addEventListener("input", () => {
    state.searchQuery = els.specimenSearch.value;
    applySpecimenSearch();
    syncTopControls();
  });

  els.specimenSearch.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      closeSearchSuggestions();
      syncTopControls();
      return;
    }
    if (event.key !== "Enter") return;
    const [firstMatch] = getSpecimenSearchMatches();
    if (!firstMatch) return;
    event.preventDefault();
    selectSearchSuggestion(firstMatch.index);
  });

  els.searchSuggestions?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-search-index]");
    if (!button) return;
    selectSearchSuggestion(Number(button.dataset.searchIndex));
  });

  els.cellDropdownBtn?.addEventListener("click", () =>
    toggleSpecimenDropdown("cell"),
  );
  els.originDropdownBtn?.addEventListener("click", () =>
    toggleSpecimenDropdown("origin"),
  );

  [els.cellDropdownMenu, els.originDropdownMenu].forEach((menu) => {
    menu?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-index]");
      if (button) {
        const nextIndex = Number(button.dataset.index);
        selectCell(nextIndex);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (
      event.target.closest(".global-search") ||
      event.target.closest("#navSearch")
    ) {
      return;
    }
    closeSearchSuggestions();
    syncTopControls();
  });

  els.navHelp.addEventListener("click", () => {
    state.helpOpen = !state.helpOpen;
    updateUI();
    showToast(
      state.helpOpen ? "Viewer tips are visible" : "Viewer tips hidden",
    );
  });

  els.navSound.addEventListener("click", () => {
    state.sound = !state.sound;
    updateUI();
    showToast(state.sound ? "Interface sound on" : "Interface sound off");
  });

  els.navSettings.addEventListener("click", () => {
    state.settingsOpen = !state.settingsOpen;
    updateUI();
  });

  els.settingsPanel.addEventListener("click", (event) => {
    const button = event.target.closest("[data-setting]");
    if (!button) return;
    const setting = button.dataset.setting;
    if (setting === "labels") state.labels = !state.labels;
    if (setting === "rotate") state.autoRotate = !state.autoRotate;
    if (setting === "reset") resetView();
    updateUI();
    showToast(setting === "reset" ? "View reset" : "Setting updated");
  });

  document.querySelectorAll(".panel-heading").forEach((heading) => {
    const panel = heading.closest(".panel");
    const button = heading.querySelector(".tiny-chevron");
    if (!button) return;
    button?.setAttribute(
      "aria-expanded",
      panel?.classList.contains("is-collapsed") ? "false" : "true",
    );
    heading.addEventListener("click", () => {
      panel?.classList.toggle("is-collapsed");
      button?.setAttribute(
        "aria-expanded",
        panel?.classList.contains("is-collapsed") ? "false" : "true",
      );
    });
  });

  els.modeModel.addEventListener("click", () => {
    state.cross = false;
    state.animate = false;
    updateUI();
  });

  els.modeCross.addEventListener("click", () => {
    state.cross = true;
    updateUI();
  });

  els.modeAnimate.addEventListener("click", () => {
    state.animate = !state.animate;
    updateUI();
  });

  els.crossToggle.addEventListener("change", () => {
    state.cross = els.crossToggle.checked;
    updateUI();
  });

  els.rotateBtn.addEventListener("click", () => {
    state.autoRotate = !state.autoRotate;
    updateUI();
  });

  els.zoomBtn.addEventListener("click", () => {
    state.zoom = state.zoom > 1.01 ? 1 : 1.28;
    updateUI();
  });

  els.isolateBtn.addEventListener("click", () => {
    state.isolate = !state.isolate;
    if (state.isolate) state.hideOthers = false;
    updateUI();
  });

  els.hideBtn.addEventListener("click", () => {
    state.hideOthers = !state.hideOthers;
    if (state.hideOthers) state.isolate = false;
    updateUI();
  });

  els.resetBtn.addEventListener("click", () => {
    resetView();
    updateUI();
  });

  els.labelToggle.addEventListener("change", () => {
    state.labels = els.labelToggle.checked;
    updateUI();
  });

  els.favoriteBtn.addEventListener("click", () => {
    const key = favoriteKey();
    if (state.favorites.has(key)) {
      state.favorites.delete(key);
      showToast("Removed from favorites");
    } else {
      state.favorites.add(key);
      showToast("Saved to favorites");
    }
    updateUI();
  });

  els.screenshotBtn.addEventListener("click", downloadCurrentScreenshot);
  els.exportBtn.addEventListener("click", downloadCurrentModel);

  els.canvas.addEventListener("pointerdown", (event) => {
    try {
      els.canvas.setPointerCapture(event.pointerId);
    } catch {
      // Some synthetic or interrupted touch streams cannot be captured.
    }
    if (event.pointerType === "touch") {
      event.preventDefault();
      state.activePointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
      });
      clearHoveredCallout();
      if (state.activePointers.size >= 2) {
        beginPinchGesture();
        state.drag = false;
        state.dragMoved = true;
        return;
      }
    }
    state.drag = true;
    clearHoveredCallout();
    state.dragX = event.clientX;
    state.dragY = event.clientY;
    state.dragStartX = event.clientX;
    state.dragStartY = event.clientY;
    state.dragMoved = false;
  });

  els.canvas.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch" && state.activePointers.has(event.pointerId)) {
      event.preventDefault();
      state.activePointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
      });
      if (state.activePointers.size >= 2) {
        updatePinchGesture();
        return;
      }
    }
    if (!state.drag) {
      updateCalloutHoverFromPointer(event);
      return;
    }
    clearHoveredCallout();
    const totalDx = event.clientX - state.dragStartX;
    const totalDy = event.clientY - state.dragStartY;
    if (Math.hypot(totalDx, totalDy) > 6) state.dragMoved = true;
    const dx = event.clientX - state.dragX;
    const dy = event.clientY - state.dragY;
    if (event.ctrlKey || event.metaKey) {
      state.panX += dx;
      state.panY += dy;
    } else {
      state.autoRotate = false;
      state.rotation = wrapAngle(state.rotation + dx * 0.012);
      state.pitch = wrapAngle(state.pitch + dy * 0.009);
    }
    state.dragX = event.clientX;
    state.dragY = event.clientY;
  });

  els.canvas.addEventListener("pointerup", (event) => {
    if (event.pointerType === "touch") {
      const wasPinching = Boolean(state.pinch);
      state.activePointers.delete(event.pointerId);
      if (wasPinching) {
        state.pinch = null;
        const [remainingPointer] = state.activePointers.values();
        if (remainingPointer) {
          state.drag = true;
          state.dragX = remainingPointer.x;
          state.dragY = remainingPointer.y;
          state.dragStartX = remainingPointer.x;
          state.dragStartY = remainingPointer.y;
          state.dragMoved = true;
        } else {
          state.drag = false;
          state.dragMoved = false;
        }
        if (els.canvas.hasPointerCapture(event.pointerId)) {
          els.canvas.releasePointerCapture(event.pointerId);
        }
        return;
      }
    }
    const totalDx = event.clientX - state.dragStartX;
    const totalDy = event.clientY - state.dragStartY;
    const wasClick = !state.dragMoved && Math.hypot(totalDx, totalDy) <= 6;
    state.drag = false;
    if (els.canvas.hasPointerCapture(event.pointerId)) {
      els.canvas.releasePointerCapture(event.pointerId);
    }
    const hitName = updateCalloutHoverFromPointer(event);
    if (wasClick && hitName) selectCalloutFeature(hitName);
    state.dragMoved = false;
  });

  els.canvas.addEventListener("pointercancel", (event) => {
    state.activePointers.delete(event.pointerId);
    state.pinch = null;
    state.drag = false;
    state.dragMoved = false;
    clearHoveredCallout();
  });

  els.canvas.addEventListener("pointerleave", (event) => {
    if (event.pointerType === "touch") return;
    clearHoveredCallout();
  });

  els.canvas.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const nextZoom = state.zoom + (event.deltaY < 0 ? 0.08 : -0.08);
      state.zoom = Math.min(1.48, Math.max(0.72, nextZoom));
    },
    { passive: false },
  );

  window.addEventListener("resize", resizeAll);
  window.addEventListener("keydown", (event) => {
    if (
      event.key === "/" &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.altKey &&
      !isTextEntryTarget(event.target)
    ) {
      event.preventDefault();
      openSearchWithFocus();
      return;
    }
    if (event.key === "Escape") {
      state.searchOpen = false;
      state.helpOpen = false;
      state.settingsOpen = false;
      updateUI();
    }
    if (event.key === "ArrowRight")
      selectCell((state.active + 1) % specimens.length);
    if (event.key === "ArrowLeft")
      selectCell((state.active - 1 + specimens.length) % specimens.length);
  });
}

function resetView() {
  state.rotation = 0;
  state.pitch = 0;
  state.zoom = 1;
  state.panX = 0;
  state.panY = 0;
  state.isolate = false;
  state.hideOthers = false;
}

function favoriteKey() {
  const cell = specimens[state.active];
  return `${cell.id}:${state.organelle}`;
}

function selectCell(index) {
  const nextIndex = Math.min(Math.max(index, 0), specimens.length - 1);
  const previousIndex = state.active;
  const nextCell = specimens[nextIndex];
  const config = tripoModelSources[nextCell.id];
  const cachedEntry = config
    ? specimenStage?.tripoModelCache.get(config.src)
    : null;
  state.active = nextIndex;
  state.organelle = 0;
  state.hoveredCalloutName = null;
  state.pendingRevealId =
    previousIndex !== nextIndex && cachedEntry?.status === "loaded"
      ? nextCell.id
      : null;
  resetView();
  clearModelReveal();
  resetModelLoadingOverlay();
  renderOrganelleList(nextCell);
  updateUI();
}

function updateUI() {
  const cell = specimens[state.active];
  const item = cell.organelles[state.organelle];
  const isOrigin = cell.type === "origin";
  setTheme(cell);

  els.cellName.textContent = isOrigin
    ? cell.name
    : cell.name.endsWith("Cell")
      ? cell.name
      : `${cell.name} Cell`;
  els.cellSubtitle.textContent = cell.subtitle;
  els.stageCard.dataset.activeId = cell.id;
  els.stageCard.dataset.scopeMode = state.microscopeMode;
  els.featurePanelTitle.textContent = isOrigin
    ? "Origin Features"
    : "Organelles";
  els.detailPanelTitle.textContent = isOrigin ? "Origin Info" : "Information";
  els.crossToggle.checked = state.cross;
  els.labelToggle.checked = state.labels;
  els.root.querySelector(".studio-shell").dataset.searchOpen = String(
    state.searchOpen,
  );
  els.root.querySelector(".studio-shell").dataset.helpOpen = String(
    state.helpOpen,
  );

  syncButtonState(els.modeModel, !state.cross && !state.animate);
  syncButtonState(els.modeCross, state.cross);
  syncButtonState(els.modeAnimate, state.animate);
  syncButtonState(els.rotateBtn, state.autoRotate);
  syncButtonState(els.zoomBtn, state.zoom > 1.01);
  syncButtonState(els.isolateBtn, state.isolate);
  syncButtonState(els.hideBtn, state.hideOthers);
  syncButtonState(els.favoriteBtn, state.favorites.has(favoriteKey()));
  syncTopControls();
  syncSettingsPanel();

  document.querySelectorAll(".cell-button").forEach((button) => {
    button.setAttribute(
      "aria-current",
      Number(button.dataset.index) === state.active ? "true" : "false",
    );
  });

  document.querySelectorAll(".organelle-chip").forEach((button, index) => {
    button.setAttribute(
      "aria-current",
      index === state.organelle ? "true" : "false",
    );
  });

  updateSpecimenDropdownLabels();
  renderOpenSpecimenDropdowns();
  renderSearchSuggestions();
  renderDetailPanel(cell, item, isOrigin);
  els.biologyNote.textContent = cell.note;
  els.funFact.textContent = cell.fact;

  renderMicroscope(cell);
  renderLegend(cell, item, isOrigin);
  drawOccurrence();
}

function renderDetailPanel(cell, item, isOrigin, options = {}) {
  const isPreview = Boolean(options.preview);
  const detailLabels = isOrigin
    ? ["Scale", "Setting", "Evidence", "Role"]
    : ["Cell Type", "Key Structures", "Visible in LM", "Primary Role"];
  els.detailPanel?.style.setProperty("--detail-accent", item.color);
  if (isPreview) els.detailPanel?.setAttribute("data-detail-mode", "hover");
  else els.detailPanel?.removeAttribute("data-detail-mode");
  els.detailIcon.style.setProperty(
    "--detail",
    makeDetailBackground(
      isPreview || isOrigin ? item.color : cell.accent,
      cell.accent2,
    ),
  );

  if (isPreview) {
    els.organelleName.textContent = item.name;
    els.organelleTagline.textContent = item.tagline;
    els.detailFacts.innerHTML = `
      <div class="info-summary hover-summary"><dd>${item.purpose}</dd></div>
      <div class="info-group quick-facts">
        <dt>${isOrigin ? "Feature Facts" : "Structure Facts"}</dt>
        <dd>
          <span><b>${isOrigin ? "Scale" : "Size"}:</b> ${item.size}</span>
          <span><b>${isOrigin ? "Setting" : "Location"}:</b> ${item.location}</span>
          <span><b>${isOrigin ? "Evidence" : "Visible"}:</b> ${item.visible}</span>
          <span><b>Specimen:</b> ${cell.name}</span>
        </dd>
      </div>
    `;
    return;
  }

  els.organelleName.textContent = isOrigin
    ? cell.name
    : cell.name.endsWith("Cell")
      ? cell.name
      : `${cell.name} Cell`;
  els.organelleTagline.textContent = cell.subtitle;
  const referenceCopy = referencePanelCopy[cell.id];
  const panelFunctions =
    referenceCopy?.functions ||
    cell.organelles.map((organelle) => organelle.purpose);
  const panelFacts = referenceCopy?.facts || {
    "Cell Type": cell.subtitle,
    Length: item.size,
    Structure: cell.organelles.map((organelle) => organelle.name).join(", "),
    Function: item.purpose,
    Location: item.location,
  };
  els.detailFacts.innerHTML = isOrigin
    ? `
      <div><dt>${detailLabels[0]}</dt><dd>${item.size}</dd></div>
      <div><dt>${detailLabels[1]}</dt><dd>${item.location}</dd></div>
      <div><dt>${detailLabels[2]}</dt><dd>${item.visible}</dd></div>
      <div><dt>${detailLabels[3]}</dt><dd>${item.purpose}</dd></div>
    `
    : `
      <div class="info-summary"><dd>${cell.note}</dd></div>
      <div class="info-group key-functions">
        <dt>Key Functions</dt>
        <dd>
          <ul>
            ${panelFunctions.map((line) => `<li>${line}</li>`).join("")}
          </ul>
        </dd>
      </div>
      <div class="info-group quick-facts">
        <dt>Quick Facts</dt>
        <dd>
          ${Object.entries(panelFacts)
            .map(([label, value]) => `<span><b>${label}:</b> ${value}</span>`)
            .join("")}
        </dd>
      </div>
    `;
}

function syncButtonState(button, value) {
  button.setAttribute("aria-pressed", value ? "true" : "false");
}

function syncTopControls() {
  els.root.querySelector(".studio-shell").dataset.searchOpen = String(
    state.searchOpen,
  );
  els.navSearch.setAttribute(
    "aria-expanded",
    state.searchOpen ? "true" : "false",
  );
  els.specimenSearch?.setAttribute(
    "aria-expanded",
    state.searchOpen ? "true" : "false",
  );
  els.navHelp.setAttribute("aria-expanded", state.helpOpen ? "true" : "false");
  els.navSettings.setAttribute(
    "aria-expanded",
    state.settingsOpen ? "true" : "false",
  );
  syncButtonState(els.navSearch, state.searchOpen);
  syncButtonState(els.navHelp, state.helpOpen);
  syncButtonState(els.navSound, state.sound);
  syncButtonState(els.navSettings, state.settingsOpen);
  els.settingsPanel.hidden = !state.settingsOpen;
}

function syncSettingsPanel() {
  const values = {
    labels: state.labels ? "On" : "Off",
    rotate: state.autoRotate ? "On" : "Off",
    reset: "Run",
  };
  els.settingsPanel.querySelectorAll("[data-setting]").forEach((button) => {
    const setting = button.dataset.setting;
    const enabled =
      setting === "labels"
        ? state.labels
        : setting === "rotate"
            ? state.autoRotate
            : false;
    button.setAttribute("aria-pressed", enabled ? "true" : "false");
    const value = button.querySelector("b");
    if (value) value.textContent = values[setting] || "";
  });
}

function makeDetailBackground(primary, secondary) {
  return `radial-gradient(circle at 42% 38%, #fff 0 10%, transparent 11%), radial-gradient(circle at 52% 52%, ${primary} 0 45%, transparent 46%), radial-gradient(circle at 50% 50%, ${secondary} 0 68%, transparent 69%)`;
}

function renderMicroscope() {
  const modes = [
    ["model", "3D View", "cube-icon"],
    ["light", "Light<br>Microscope", "scope-light-icon"],
    ["fluorescence", "Fluorescence<br>View", "scope-glow-icon"],
    ["electron", "Electron<br>Microscope", "scope-electron-icon"],
  ];

  els.microscopeStrip.innerHTML = modes
    .map(
      ([id, label, icon]) => `
        <button class="scope-mode" type="button" data-scope-mode="${id}" aria-pressed="${state.microscopeMode === id ? "true" : "false"}">
          <span class="${icon}" aria-hidden="true"></span>
          <strong>${label}</strong>
        </button>
      `,
    )
    .join("");

  els.microscopeStrip
    .querySelectorAll("[data-scope-mode]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        state.microscopeMode = button.dataset.scopeMode;
        updateUI();
        showToast(`${button.textContent.trim().replace(/\s+/g, " ")} enabled`);
      });
    });
}

function renderLegend(cell, activeItem, isOrigin, options = {}) {
  const activeIndex = options.activeIndex ?? state.organelle;
  const isPreview = Boolean(options.preview);
  els.legendCount.textContent = String(cell.organelles.length);
  els.structureLegend.innerHTML = `
    <section class="legend-focus" data-legend-mode="${isPreview ? "hover" : "selected"}" style="--legend:${activeItem.color}">
      <span>${isPreview ? (isOrigin ? "Hovered Feature" : "Hovered Structure") : isOrigin ? "Selected Feature" : "Selected Structure"}</span>
      <strong>${activeItem.name}</strong>
      <p>${activeItem.tagline}</p>
    </section>
    <div class="legend-items" role="list" aria-label="${cell.name} structure legend">
      ${cell.organelles
        .map(
          (item, index) => `
            <button class="legend-item" type="button" role="listitem" data-legend-index="${index}" aria-current="${index === activeIndex ? "true" : "false"}" data-legend-mode="${isPreview && index === activeIndex ? "hover" : "selected"}" style="--legend:${item.color}">
              <i style="--legend:${item.color}" aria-hidden="true"></i>
              <span>
                <strong>${item.name}</strong>
                <em>${item.tagline}</em>
              </span>
              <b>${item.visible}</b>
            </button>
          `,
        )
        .join("")}
    </div>
  `;

  els.structureLegend
    .querySelectorAll("[data-legend-index]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        state.organelle = Number(button.dataset.legendIndex);
        updateUI();
        showToast(`${cell.organelles[state.organelle].name} selected`);
      });
    });
}

function downloadCurrentScreenshot() {
  drawMain(performance.now() * 0.001);
  const cell = specimens[state.active];
  try {
    const link = document.createElement("a");
    link.download = `${cell.id}-cell-explorer.png`;
    link.href = els.canvas.toDataURL("image/png");
    link.click();
    showToast("Screenshot exported");
  } catch {
    showToast("Screenshot export is not available for this browser");
  }
}

function downloadCurrentModel() {
  const cell = specimens[state.active];
  const config = tripoModelSources[cell.id];
  if (!config?.src) {
    showToast("No GLB model has been generated for this specimen yet");
    return;
  }
  const link = document.createElement("a");
  link.download = `${cell.id}-tripo.glb`;
  link.href = config.src;
  link.click();
  showToast("3D model download started");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.dataset.visible = "true";
  playUiTone();
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    els.toast.dataset.visible = "false";
  }, 2200);
}

function playUiTone() {
  if (!state.sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 580;
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.035,
      audioContext.currentTime + 0.01,
    );
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioContext.currentTime + 0.12,
    );
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.14);
  } catch {
    state.sound = false;
  }
}

function resizeCanvas(canvas, context) {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function resizeAll() {
  if (specimenStage) {
    resize3D();
  } else if (ctx) {
    resizeCanvas(els.canvas, ctx);
  }
  resizeCanvas(els.occurCanvas, occurCtx);
  drawMain(performance.now() * 0.001);
  drawOccurrence();
}

function loop(time) {
  const delta = Math.min(34, time - (state.lastTime || time));
  state.lastTime = time;
  if (state.autoRotate) {
    state.rotation = wrapAngle(state.rotation + delta * 0.0012);
    state.pitch = Math.sin(time * 0.00038) * 0.22;
  }
  drawMain(time * 0.001);
  requestAnimationFrame(loop);
}

function drawMain(time) {
  const cell = specimens[state.active];
  if (specimenStage) {
    renderSpecimen3D(cell, time);
    return;
  }
  if (!ctx) return;
  const width = els.canvas.clientWidth || els.canvas.width;
  const height = els.canvas.clientHeight || els.canvas.height;
  ctx.clearRect(0, 0, width, height);
  drawBackdrop(ctx, width, height, cell, time);

  ctx.save();
  ctx.translate(width / 2 + state.panX, height / 2 + state.panY + 6);
  const layout =
    generatedSpecimenLayouts[cell.id] || generatedSpecimenLayouts.plant;
  const image = getSpecimenImage(cell);
  const naturalRatio = image?.naturalWidth
    ? image.naturalHeight / image.naturalWidth
    : 9 / 16;
  const targetHeight = layout.width * naturalRatio;
  const fit = Math.min(
    1,
    (width - 68) / layout.width,
    (height - 34) / targetHeight,
  );
  ctx.scale(Math.max(0.46, fit) * state.zoom, Math.max(0.46, fit) * state.zoom);

  if (image?.complete && image.naturalWidth) {
    drawGeneratedCellSpecimen(ctx, cell, image, time);
  } else if (cell.type === "origin") {
    drawOriginFallback(ctx, cell, time);
  } else {
    drawPlant(ctx, cell, time);
  }

  ctx.restore();
}

function drawBackdrop(context, width, height, cell, time) {
  context.save();
  for (let i = 0; i < 42; i += 1) {
    const x = (seed(i * 11 + cell.id.length) * width + time * (i % 3)) % width;
    const y = seed(i * 23 + cell.id.length) * height;
    context.fillStyle =
      i % 5 === 0 ? hexToRgba(cell.accent, 0.26) : "rgba(91,78,53,0.12)";
    context.beginPath();
    context.arc(x, y, 1 + seed(i) * 1.6, 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

function selected(name) {
  return specimens[state.active].organelles[state.organelle].name === name;
}

function alphaFor(name) {
  if (state.isolate) return selected(name) ? 1 : 0.12;
  if (state.hideOthers) return selected(name) ? 1 : 0.04;
  return selected(name) ? 1 : 0.86;
}

function label(context, text, x, y, color) {
  if (!state.labels) return;
  context.save();
  context.font = "700 13px IBM Plex Mono, monospace";
  context.fillStyle = color || "#5d4a93";
  context.strokeStyle = "rgba(255,251,238,0.88)";
  context.lineWidth = 4;
  context.strokeText(text, x, y);
  context.fillText(text, x, y);
  context.restore();
}

function organelleGlow(context, x, y, size, color, active) {
  if (!active) return;
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 2;
  context.setLineDash([6, 6]);
  context.beginPath();
  context.ellipse(
    x,
    y,
    size,
    size * 0.62,
    state.rotation * 0.5,
    0,
    Math.PI * 2,
  );
  context.stroke();
  context.restore();
}

function withAlpha(context, alpha, draw) {
  context.save();
  context.globalAlpha *= alpha;
  draw();
  context.restore();
}

function drawPlant(context, cell, time) {
  const r = state.rotation;
  context.save();
  context.translate(0, 8);
  context.rotate(r * 0.035);
  drawPlantHull(context, r, time);

  context.save();
  plantInnerPath(context, 0, 1);
  context.clip();
  drawCytoplasmFloor(context, time);
  drawPlantFilaments(context, time);

  withAlpha(context, alphaFor("Vacuole"), () => {
    draw3DVacuole(context, -70, -18, 142, 76, -0.12 + r * 0.02, time);
    organelleGlow(context, -70, -18, 150, "#6fbfd1", selected("Vacuole"));
    if (selected("Vacuole")) label(context, "Vacuole", -22, -108, "#357f91");
  });

  drawPlantMicrotubes(context, time);

  const chloroplasts = [
    [-220, 48, 60, 30, -0.08],
    [-170, -104, 58, 28, -0.22],
    [206, -48, 58, 28, -0.1],
    [92, 98, 60, 29, 0.28],
  ];
  chloroplasts.forEach(([x, y, rx, ry, angle], index) => {
    withAlpha(context, alphaFor("Chloroplast"), () => {
      draw3DChloroplast(
        context,
        x,
        y,
        rx,
        ry,
        angle + Math.sin(r + index) * 0.05,
        time + index,
      );
    });
  });
  organelleGlow(context, -188, -58, 80, "#7fb85b", selected("Chloroplast"));
  if (selected("Chloroplast"))
    label(context, "Chloroplast", -274, -130, "#497d36");

  withAlpha(context, alphaFor("Chloroplast"), () => {
    draw3DMito(context, -224, -24, 44, 24, -0.18, "#e88740", time);
    draw3DMito(context, -160, 112, 56, 25, 0.08, "#f0a44b", time + 2);
  });

  draw3DGolgi(context, 126, 18, "#df7657");
  drawERStack(context, 128, -86, "#7345a6", "#3f7a61");
  drawVesicleCloud(context, 34, 32, 44, cell.accent2, time);

  withAlpha(context, alphaFor("Nucleus"), () => {
    draw3DNucleus(context, 154, -92, 86, 64, r, time);
    organelleGlow(context, 154, -92, 94, "#8d62c9", selected("Nucleus"));
    if (selected("Nucleus")) label(context, "Nucleus", 202, -164, "#6d3da8");
  });

  context.restore();

  if (state.cross) {
    drawSubtleSectionSheen(context, -70, -8, 390, 224, "#fff4c7", "#7fb85b");
  }
  drawPlantWallDetails(context, time);
  context.restore();
}

const generatedSpecimenLayouts = {
  plant: {
    width: 760,
    y: 4,
    rotate: 0.025,
    shadow: [0, 0.32, 0.42, 0.14],
    hotspots: {
      Nucleus: {
        x: 174,
        y: -126,
        rx: 104,
        ry: 72,
        color: "#8d62c9",
        labelX: 226,
        labelY: -204,
      },
      Chloroplast: {
        x: -208,
        y: -92,
        rx: 70,
        ry: 38,
        color: "#7fb85b",
        labelX: -306,
        labelY: -154,
      },
      Vacuole: {
        x: -92,
        y: -38,
        rx: 138,
        ry: 86,
        color: "#6fbfd1",
        labelX: -44,
        labelY: -142,
      },
    },
  },
  white: {
    width: 670,
    y: 2,
    rotate: 0.018,
    shadow: [0, 0.31, 0.34, 0.14],
    hotspots: {
      Lysosome: {
        x: 178,
        y: -116,
        rx: 76,
        ry: 50,
        color: "#7b4fba",
        labelX: 218,
        labelY: -184,
      },
      "Lobed Nucleus": {
        x: -34,
        y: -28,
        rx: 126,
        ry: 78,
        color: "#6f3aa8",
        labelX: -132,
        labelY: -126,
      },
      Granules: {
        x: 126,
        y: 56,
        rx: 164,
        ry: 82,
        color: "#df5f86",
        labelX: 210,
        labelY: 4,
      },
    },
  },
  neuron: {
    width: 760,
    heightScale: 1.55,
    y: -4,
    rotate: 0.01,
    shadow: [0, 0.28, 0.46, 0.1],
    hotspots: {
      Axon: {
        x: 158,
        y: -12,
        rx: 238,
        ry: 44,
        color: "#8b76cf",
        labelX: 110,
        labelY: -78,
      },
      Soma: {
        x: -238,
        y: -28,
        rx: 122,
        ry: 104,
        color: "#d25f99",
        labelX: -304,
        labelY: -168,
      },
      Dendrites: {
        x: -324,
        y: -36,
        rx: 170,
        ry: 136,
        color: "#6fa3d4",
        labelX: -418,
        labelY: -198,
      },
    },
  },
  epithelial: {
    width: 650,
    y: 4,
    rotate: 0.014,
    shadow: [0, 0.34, 0.34, 0.13],
    hotspots: {
      Microvilli: {
        x: -8,
        y: -136,
        rx: 232,
        ry: 54,
        color: "#d87393",
        labelX: 116,
        labelY: -204,
      },
      "Tight Junctions": {
        x: -226,
        y: -4,
        rx: 72,
        ry: 152,
        color: "#6caed1",
        labelX: -314,
        labelY: -82,
      },
      Nucleus: {
        x: 18,
        y: 64,
        rx: 112,
        ry: 76,
        color: "#8d62c9",
        labelX: 98,
        labelY: -8,
      },
    },
  },
  bacteria: {
    width: 870,
    y: 0,
    rotate: 0.012,
    shadow: [0, 0.3, 0.45, 0.11],
    hotspots: {
      Nucleoid: {
        x: -18,
        y: -20,
        rx: 190,
        ry: 70,
        color: "#7b4fba",
        labelX: -120,
        labelY: -118,
      },
      "Cell Wall": {
        x: 0,
        y: -4,
        rx: 358,
        ry: 122,
        color: "#59b98c",
        labelX: -358,
        labelY: -154,
      },
      Flagellum: {
        x: 322,
        y: 74,
        rx: 162,
        ry: 84,
        color: "#c57945",
        labelX: 286,
        labelY: -18,
      },
    },
  },
  animal: {
    width: 760,
    y: 4,
    rotate: 0.018,
    shadow: [0, 0.32, 0.42, 0.14],
    hotspots: {
      Mitochondrion: {
        x: -222,
        y: -38,
        rx: 82,
        ry: 50,
        color: "#e3644f",
        labelX: -312,
        labelY: -108,
      },
      Nucleus: {
        x: 132,
        y: -116,
        rx: 128,
        ry: 88,
        color: "#7252ba",
        labelX: 214,
        labelY: -204,
      },
      "Rough ER": {
        x: 84,
        y: -40,
        rx: 170,
        ry: 90,
        color: "#d783b1",
        labelX: 154,
        labelY: 42,
      },
    },
  },
  muscle: {
    width: 880,
    y: 4,
    rotate: 0.01,
    shadow: [0, 0.32, 0.46, 0.12],
    hotspots: {
      Myofibril: {
        x: 176,
        y: 8,
        rx: 210,
        ry: 108,
        color: "#c9575f",
        labelX: 70,
        labelY: -132,
      },
      Sarcolemma: {
        x: -28,
        y: -6,
        rx: 374,
        ry: 132,
        color: "#7a5bc7",
        labelX: -334,
        labelY: -156,
      },
      Sarcoplasm: {
        x: -118,
        y: -24,
        rx: 218,
        ry: 82,
        color: "#d19c69",
        labelX: -212,
        labelY: -116,
      },
    },
  },
  protocell: {
    width: 760,
    y: 0,
    rotate: 0.014,
    shadow: [0, 0.31, 0.4, 0.14],
    hotspots: {
      "Lipid Vesicle": {
        x: 0,
        y: -10,
        rx: 314,
        ry: 160,
        color: "#d99a34",
        labelX: -318,
        labelY: -182,
      },
      "RNA Template": {
        x: 44,
        y: -42,
        rx: 172,
        ry: 72,
        color: "#b765c6",
        labelX: 112,
        labelY: -140,
      },
      "Metabolic Droplets": {
        x: -86,
        y: 54,
        rx: 190,
        ry: 74,
        color: "#e0b24f",
        labelX: -170,
        labelY: 140,
      },
    },
  },
  progenote: {
    width: 780,
    y: 8,
    rotate: 0.012,
    shadow: [0, 0.32, 0.42, 0.13],
    hotspots: {
      "Loose Genome": {
        x: -20,
        y: -42,
        rx: 206,
        ry: 76,
        color: "#8c61c7",
        labelX: 74,
        labelY: -146,
      },
      "Proto-Ribosomes": {
        x: 150,
        y: 54,
        rx: 198,
        ry: 90,
        color: "#c6a56d",
        labelX: 210,
        labelY: 140,
      },
      "Peptide Networks": {
        x: -166,
        y: 18,
        rx: 188,
        ry: 94,
        color: "#e26e56",
        labelX: -284,
        labelY: -82,
      },
    },
  },
  "rna-world": {
    width: 800,
    y: 2,
    rotate: 0.01,
    shadow: [0, 0.33, 0.43, 0.12],
    hotspots: {
      "Ribozyme Fold": {
        x: -132,
        y: -34,
        rx: 174,
        ry: 98,
        color: "#b75fc3",
        labelX: -284,
        labelY: -144,
      },
      "Template Pairing": {
        x: 92,
        y: -24,
        rx: 224,
        ry: 78,
        color: "#d35fa0",
        labelX: 130,
        labelY: -130,
      },
      "Mineral Surface": {
        x: 4,
        y: 56,
        rx: 350,
        ry: 126,
        color: "#9c855f",
        labelX: -44,
        labelY: 166,
      },
    },
  },
  "hydrothermal-vent": {
    width: 780,
    y: 10,
    rotate: 0.01,
    shadow: [0, 0.34, 0.43, 0.12],
    hotspots: {
      "Mineral Pores": {
        x: 74,
        y: 30,
        rx: 238,
        ry: 116,
        color: "#9a7d5d",
        labelX: 124,
        labelY: 142,
      },
      "Proton Gradient": {
        x: 38,
        y: -58,
        rx: 116,
        ry: 132,
        color: "#e6842f",
        labelX: 92,
        labelY: -174,
      },
      "Organic Precursors": {
        x: 176,
        y: 72,
        rx: 152,
        ry: 82,
        color: "#d3b24c",
        labelX: 210,
        labelY: -4,
      },
    },
  },
  luca: {
    width: 820,
    y: 2,
    rotate: 0.012,
    shadow: [0, 0.31, 0.44, 0.12],
    hotspots: {
      Nucleoid: {
        x: -8,
        y: -48,
        rx: 190,
        ry: 64,
        color: "#7a5ac5",
        labelX: -96,
        labelY: -144,
      },
      Ribosomes: {
        x: -76,
        y: 32,
        rx: 246,
        ry: 96,
        color: "#c6a56d",
        labelX: -226,
        labelY: 124,
      },
      "Membrane Proteins": {
        x: 14,
        y: -10,
        rx: 346,
        ry: 142,
        color: "#e6842f",
        labelX: 148,
        labelY: -156,
      },
    },
  },
};

function drawGeneratedCellSpecimen(context, cell, image, time) {
  context.save();
  const layout =
    generatedSpecimenLayouts[cell.id] || generatedSpecimenLayouts.plant;
  context.translate(0, layout.y || 0);
  const projection = getSpecimenProjection(layout);

  const w = layout.width;
  const h = w * (image.naturalHeight / image.naturalWidth);
  context.save();
  context.globalAlpha = 0.24;
  context.fillStyle = "rgba(65, 47, 22, 0.34)";
  const [shadowX, shadowY, shadowW, shadowH] = layout.shadow;
  context.beginPath();
  context.ellipse(
    w * shadowX,
    h * shadowY,
    w * shadowW * projection.shadowScale,
    h * shadowH,
    0,
    0,
    Math.PI * 2,
  );
  context.fill();
  context.restore();

  context.save();
  context.rotate(projection.spin);
  context.transform(
    projection.scaleX,
    projection.skewY,
    projection.skewX,
    projection.scaleY,
    0,
    0,
  );
  if (state.isolate || state.hideOthers) {
    context.globalAlpha = state.hideOthers ? 0.7 : 0.82;
  }
  context.drawImage(image, -w / 2, -h / 2, w, h);

  if (projection.backTint > 0) {
    context.save();
    context.globalCompositeOperation = "multiply";
    context.globalAlpha = projection.backTint;
    context.fillStyle = "#c6b28c";
    context.fillRect(-w / 2, -h / 2, w, h);
    context.restore();
  }

  if (state.cross) {
    context.save();
    context.globalCompositeOperation = "screen";
    context.globalAlpha = 0.18;
    const sheen = context.createLinearGradient(
      -w * 0.22,
      -h * 0.18,
      w * 0.28,
      h * 0.14,
    );
    sheen.addColorStop(0, "rgba(255,255,255,0)");
    sheen.addColorStop(0.44, "rgba(255,255,255,0.62)");
    sheen.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = sheen;
    context.beginPath();
    context.ellipse(-50, -8, 250, 108, -0.06, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  drawGeneratedHotspotOverlay(context, cell, layout, time, false);
  context.restore();

  if (cell.id !== "neuron")
    drawGeneratedHotspotLabel(context, cell, layout, projection);
  context.restore();
}

function getSpecimenProjection(layout) {
  const yaw = state.rotation;
  const pitch = state.pitch;
  const yawCos = Math.cos(yaw);
  const pitchCos = Math.cos(pitch);
  const yawDepth = Math.sin(yaw);
  const pitchDepth = Math.sin(pitch);
  const squashX = Math.max(0.72, Math.abs(yawCos));
  const squashY = Math.max(0.82, Math.abs(pitchCos));
  const scaleX = squashX * (yawCos < 0 ? -1 : 1);
  const scaleY = squashY * (pitchCos < 0 ? -1 : 1);

  return {
    scaleX,
    scaleY,
    skewX: yawDepth * 0.13,
    skewY: -pitchDepth * 0.09,
    spin:
      yawDepth * (layout.rotate || 0.012) +
      pitchDepth * (layout.rotate || 0.012) * 0.7,
    shadowScale: 0.72 + squashX * 0.32,
    backTint: (yawCos < 0 ? 0.1 : 0) + (pitchCos < 0 ? 0.08 : 0),
  };
}

function projectSpecimenPoint(x, y, projection) {
  const transformedX = x * projection.scaleX + y * projection.skewX;
  const transformedY = x * projection.skewY + y * projection.scaleY;
  const cos = Math.cos(projection.spin);
  const sin = Math.sin(projection.spin);
  return {
    x: transformedX * cos - transformedY * sin,
    y: transformedX * sin + transformedY * cos,
  };
}

function drawGeneratedHotspotOverlay(
  context,
  cell,
  layout,
  time,
  drawText = true,
) {
  const active = cell.organelles[state.organelle]?.name;
  const target = layout.hotspots[active];
  if (!target) return;
  context.save();
  context.strokeStyle = target.color;
  context.lineWidth = 3;
  context.setLineDash([9, 8]);
  context.lineDashOffset = -time * 18;
  context.beginPath();
  context.ellipse(
    target.x,
    target.y,
    target.rx,
    target.ry,
    -0.08,
    0,
    Math.PI * 2,
  );
  context.stroke();
  context.setLineDash([]);
  context.globalAlpha = 0.18;
  context.fillStyle = target.color;
  context.beginPath();
  context.ellipse(
    target.x,
    target.y,
    target.rx,
    target.ry,
    -0.08,
    0,
    Math.PI * 2,
  );
  context.fill();
  context.globalAlpha = 1;
  if (drawText)
    label(context, active, target.labelX, target.labelY, target.color);
  context.restore();
}

function drawGeneratedHotspotLabel(context, cell, layout, projection) {
  const active = cell.organelles[state.organelle]?.name;
  const target = layout.hotspots[active];
  if (!target || !state.labels) return;
  const point = projectSpecimenPoint(target.labelX, target.labelY, projection);
  label(context, active, point.x, point.y, target.color);
}

function drawOriginFallback(context, cell, time) {
  context.save();
  context.rotate(state.rotation * 0.025);
  drawBlob(
    context,
    0,
    0,
    286,
    166,
    hexToRgba(cell.accent, 0.5),
    cell.accent2,
    0.28,
  );
  context.strokeStyle = hexToRgba(cell.accent, 0.62);
  context.lineWidth = 7;
  context.beginPath();
  context.ellipse(0, 0, 300, 174, -0.04, 0, Math.PI * 2);
  context.stroke();
  for (let i = 0; i < 52; i += 1) {
    const a = seed(i * 17) * Math.PI * 2;
    const d = 34 + seed(i * 7) * 210;
    drawSphere(
      context,
      Math.cos(a) * d,
      Math.sin(a) * d * 0.52,
      4 + seed(i + 4) * 6,
      i % 2 ? cell.accent : cell.accent2,
      "#fff",
    );
  }
  context.strokeStyle = cell.accent2;
  context.lineWidth = 8;
  context.lineCap = "round";
  context.beginPath();
  for (let i = 0; i < 12; i += 1) {
    const x = -170 + i * 32;
    const y = Math.sin(i * 1.5 + time) * 38 - 18;
    if (i === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.stroke();
  context.restore();
}

function drawWhiteBlood(context, cell, time) {
  const r = state.rotation;
  context.save();
  context.rotate(r * 0.06);
  drawBlob(context, 0, 0, 255, 215, "rgba(219,228,240,0.8)", "#9eb0c7", 0.36);
  for (let i = 0; i < 30; i += 1) {
    const a = seed(i) * Math.PI * 2 + r * 0.12;
    const d = 40 + seed(i + 2) * 160;
    const x = Math.cos(a) * d;
    const y = Math.sin(a) * d * 0.76;
    withAlpha(context, alphaFor("Granules"), () =>
      drawSphere(
        context,
        x,
        y,
        8 + seed(i + 9) * 10,
        i % 2 ? "#df5f86" : "#7b4fba",
        "#fff",
      ),
    );
  }
  organelleGlow(context, 86, -66, 54, "#df5f86", selected("Granules"));

  withAlpha(context, alphaFor("Lobed Nucleus") * alphaFor("Lysosome"), () => {
    drawNucleus(context, -52, -8, 72, "#7043a8", r);
    drawNucleus(context, 54, 0, 66, "#7b4fba", r + 1);
  });
  organelleGlow(
    context,
    0,
    -4,
    112,
    "#7b4fba",
    selected("Lobed Nucleus") || selected("Lysosome"),
  );
  label(
    context,
    selected("Lysosome") ? "Lysosomes" : "Lobed nucleus",
    -96,
    -122,
    "#65359f",
  );
  drawPseudopods(context, r);
  context.restore();
}

function drawNeuron(context, cell, time) {
  const r = state.rotation;
  context.save();
  context.translate(-150, 0);
  context.rotate(r * 0.035);
  drawDendrites(context, -60, -10, cell.accent2);
  withAlpha(context, alphaFor("Soma"), () => {
    drawBlob(context, -24, -4, 92, 74, "#b990d9", "#5f4caa", 0.28);
    drawNucleus(context, -12, -8, 38, "#d25f99", r);
  });
  label(context, "Soma", -68, -82, "#b04784");

  withAlpha(context, alphaFor("Axon"), () => {
    drawAxon(context, 50, -2, 420, cell.accent);
  });
  label(context, "Axon", 180, -46, "#6853ad");

  withAlpha(context, alphaFor("Dendrites"), () => {
    drawDendriteBranch(context, -96, -16, -210, -108, cell.accent);
    drawDendriteBranch(context, -92, 10, -250, 62, cell.accent);
    drawDendriteBranch(context, -56, -60, -104, -178, cell.accent2);
  });
  context.restore();
}

function drawEpithelial(context, cell, time) {
  const r = state.rotation;
  context.save();
  context.translate(-20, 12);
  context.rotate(r * 0.035);
  for (let i = 0; i < 5; i += 1) {
    const x = -160 + i * 80;
    drawRoundedRect(
      context,
      x,
      -130,
      72,
      254,
      24,
      i % 2 ? "#e8a3ad" : "#d98298",
      "#8d5aa8",
    );
    withAlpha(context, alphaFor("Nucleus"), () =>
      drawNucleus(context, x + 36, 42, 28, "#8d62c9", r),
    );
    withAlpha(context, alphaFor("Tight Junctions"), () => {
      context.strokeStyle = "#6caed1";
      context.lineWidth = 7;
      context.beginPath();
      context.moveTo(x + 70, -96);
      context.lineTo(x + 80, -96);
      context.stroke();
    });
  }
  withAlpha(context, alphaFor("Microvilli"), () => {
    for (let i = 0; i < 38; i += 1) {
      const x = -168 + i * 12;
      context.strokeStyle = "#ca5f83";
      context.lineWidth = 5;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(x, -134);
      context.quadraticCurveTo(
        x + 3,
        -168 - Math.sin(i + time * 2) * 7,
        x + 8,
        -136,
      );
      context.stroke();
    }
  });
  label(context, "Microvilli", -186, -188, "#b05273");
  label(context, "Tight junctions", 90, -98, "#4b8aa6");
  context.restore();
}

function drawBacteria(context, cell, time) {
  const r = state.rotation;
  context.save();
  context.rotate(r * 0.04);
  drawCapsule(context, 0, 0, 455, 178, "#59b98c", "#256b62");

  withAlpha(context, alphaFor("Cell Wall"), () => {
    context.strokeStyle = "#267a65";
    context.lineWidth = 12;
    roundedPath(context, -218, -80, 436, 160, 76);
    context.stroke();
  });

  withAlpha(context, alphaFor("Nucleoid"), () => {
    drawNucleoid(context, -20, -4, "#7b4fba", time);
  });
  label(context, "Nucleoid", -92, -58, "#6c43ad");

  for (let i = 0; i < 80; i += 1) {
    const x = -175 + seed(i) * 350;
    const y = -58 + seed(i + 6) * 116;
    drawSphere(
      context,
      x,
      y,
      3 + seed(i + 14) * 4,
      i % 2 ? "#e2a34e" : "#6caed1",
      "#fff",
    );
  }

  withAlpha(context, alphaFor("Flagellum"), () => {
    context.strokeStyle = "#c57945";
    context.lineWidth = 9;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(220, 28);
    for (let i = 0; i < 7; i += 1) {
      const x = 250 + i * 38;
      const y = 42 + Math.sin(i * 1.5 + time * 4) * 25;
      context.lineTo(x, y);
    }
    context.stroke();
  });
  label(context, "Flagellum", 266, 96, "#9b5b2f");
  drawPili(context, time);
  context.restore();
}

function drawAnimal(context, cell, time) {
  const r = state.rotation;
  context.save();
  context.rotate(r * 0.06);
  drawBlob(context, 0, 0, 305, 202, "rgba(103,166,203,0.72)", "#4a6f9f", 0.32);

  withAlpha(context, alphaFor("Nucleus"), () => {
    drawNucleus(context, 80, -66, 76, "#7252ba", r);
    label(context, "Nucleus", 130, -130, "#5d43a2");
  });

  withAlpha(context, alphaFor("Rough ER"), () => {
    drawER(context, -62, -40, "#d783b1");
    label(context, "Rough ER", -200, -92, "#ab5d89");
  });

  for (let i = 0; i < 4; i += 1) {
    const x = -150 + i * 86;
    const y = i % 2 ? 82 : 50;
    withAlpha(context, alphaFor("Mitochondrion"), () =>
      drawMito(context, x, y, 42, "#e3644f", r + i),
    );
  }
  label(context, "Mitochondria", -218, 132, "#c6513f");
  drawCytoskeleton(context);
  drawParticles(context, 0, 0, 60, cell.accent2, time);
  context.restore();
}

function drawMuscle(context, cell, time) {
  const r = state.rotation;
  context.save();
  context.rotate(r * 0.04);
  drawMuscleBody(context, -16, 6, 470, 204, cell.accent, cell.accent2);

  withAlpha(context, alphaFor("Myofibril"), () => {
    for (let i = 0; i < 6; i += 1) {
      drawFiberBundle(
        context,
        -170 + i * 68,
        -30 + (i % 2) * 56,
        54,
        "#f5a3a4",
        "#c9575f",
      );
    }
    label(context, "Myofibrils", -210, -116, "#b84f56");
  });

  withAlpha(context, alphaFor("Sarcolemma"), () => {
    context.strokeStyle = "#7a5bc7";
    context.lineWidth = 7;
    roundedPath(context, -244, -110, 488, 220, 96);
    context.stroke();
  });

  withAlpha(context, alphaFor("Sarcoplasm"), () => {
    drawParticles(context, 0, 0, 80, "#d19c69", time);
  });
  context.restore();
}

function plantOuterPoints(offsetY = 0, scale = 1) {
  return [
    [-362, -82 + offsetY],
    [-296, -150 + offsetY],
    [-118, -204 + offsetY],
    [84, -202 + offsetY],
    [266, -146 + offsetY],
    [354, -50 + offsetY],
    [348, 48 + offsetY],
    [260, 132 + offsetY],
    [88, 188 + offsetY],
    [-122, 176 + offsetY],
    [-298, 106 + offsetY],
    [-372, 18 + offsetY],
  ].map(([x, y]) => [x * scale, y * scale]);
}

function plantInnerPoints(offsetY = 0, scale = 1) {
  return [
    [-296, -62 + offsetY],
    [-230, -112 + offsetY],
    [-92, -148 + offsetY],
    [78, -148 + offsetY],
    [220, -102 + offsetY],
    [286, -32 + offsetY],
    [284, 44 + offsetY],
    [206, 104 + offsetY],
    [70, 142 + offsetY],
    [-98, 134 + offsetY],
    [-238, 82 + offsetY],
    [-300, 18 + offsetY],
  ].map(([x, y]) => [x * scale, y * scale]);
}

function smoothClosedPath(context, points) {
  context.beginPath();
  points.forEach(([x, y], index) => {
    const next = points[(index + 1) % points.length];
    const midX = (x + next[0]) / 2;
    const midY = (y + next[1]) / 2;
    if (index === 0) context.moveTo(midX, midY);
    context.quadraticCurveTo(
      next[0],
      next[1],
      (next[0] + points[(index + 2) % points.length][0]) / 2,
      (next[1] + points[(index + 2) % points.length][1]) / 2,
    );
  });
  context.closePath();
}

function plantOuterPath(context, offsetY = 0, scale = 1) {
  smoothClosedPath(context, plantOuterPoints(offsetY, scale));
}

function plantInnerPath(context, offsetY = 0, scale = 1) {
  smoothClosedPath(context, plantInnerPoints(offsetY, scale));
}

function drawPlantHull(context, rotation, time) {
  context.save();
  context.fillStyle = "rgba(79, 57, 25, 0.18)";
  context.beginPath();
  context.ellipse(0, 74, 360, 170, -0.02, 0, Math.PI * 2);
  context.fill();

  const outer = plantOuterPoints(0);
  drawPlantSideWalls(context, outer, 58);

  const wallGradient = context.createLinearGradient(-280, -210, 260, 170);
  wallGradient.addColorStop(0, "#d3e99a");
  wallGradient.addColorStop(0.38, "#95c85e");
  wallGradient.addColorStop(0.72, "#6da447");
  wallGradient.addColorStop(1, "#4d8434");
  plantOuterPath(context);
  context.fillStyle = wallGradient;
  context.fill();
  context.lineWidth = 12;
  context.strokeStyle = "rgba(69, 124, 48, 0.72)";
  context.stroke();
  context.lineWidth = 4;
  context.strokeStyle = "rgba(235, 250, 174, 0.64)";
  context.stroke();

  const innerGradient = context.createRadialGradient(
    -86,
    -60,
    30,
    -20,
    18,
    320,
  );
  innerGradient.addColorStop(0, "#cbe8a2");
  innerGradient.addColorStop(0.42, "#9fc575");
  innerGradient.addColorStop(1, "#5d9b47");
  plantInnerPath(context);
  context.fillStyle = innerGradient;
  context.fill();
  context.lineWidth = 9;
  context.strokeStyle = "rgba(64, 121, 49, 0.54)";
  context.stroke();

  context.globalAlpha = 0.42;
  context.strokeStyle = "#e5f2a9";
  context.lineWidth = 3;
  for (let i = 0; i < 3; i += 1) {
    plantInnerPath(context, i * 12, 1 - i * 0.038);
    context.stroke();
  }
  context.restore();
}

function drawPlantSideWalls(context, points, depth) {
  context.save();
  const bottom = points.map(([x, y]) => [x, y + depth]);
  smoothClosedPath(context, bottom);
  const base = context.createLinearGradient(0, -120, 0, 250);
  base.addColorStop(0, "#7cae45");
  base.addColorStop(1, "#426d2c");
  context.fillStyle = base;
  context.fill();

  for (let i = 0; i < points.length; i += 1) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    const avgY = (a[1] + b[1]) / 2;
    if (avgY < -40) continue;
    const shade = avgY > 70 ? "#597f36" : "#6a9a3f";
    context.fillStyle = shade;
    context.beginPath();
    context.moveTo(a[0], a[1]);
    context.lineTo(b[0], b[1]);
    context.lineTo(b[0], b[1] + depth);
    context.lineTo(a[0], a[1] + depth);
    context.closePath();
    context.fill();
    context.strokeStyle = "rgba(53, 92, 37, 0.38)";
    context.lineWidth = 2;
    context.stroke();
  }
  context.restore();
}

function drawCellWallNubs(context) {
  context.save();
  const nubs = [
    [-336, -10, -0.2, 54, 34],
    [-286, 108, 0.36, 62, 36],
    [-102, 178, 0.08, 72, 34],
    [116, 170, -0.12, 76, 34],
    [300, 80, -0.5, 58, 34],
    [330, -56, 0.58, 50, 32],
  ];
  nubs.forEach(([x, y, angle, w, h], index) => {
    context.save();
    context.translate(x, y);
    context.rotate(angle);
    const g = context.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
    g.addColorStop(0, "#cce58d");
    g.addColorStop(0.58, "#79a94a");
    g.addColorStop(1, "#466f2f");
    context.fillStyle = g;
    context.strokeStyle = "rgba(61, 111, 41, 0.62)";
    context.lineWidth = 4;
    roundedPath(context, -w / 2, -h / 2, w, h, 11);
    context.fill();
    context.stroke();
    context.globalAlpha = 0.46;
    context.strokeStyle = "#315f2d";
    context.lineWidth = 1.8;
    for (let i = -2; i <= 2; i += 1) {
      context.beginPath();
      context.moveTo(-w * 0.32, i * 5);
      context.quadraticCurveTo(
        0,
        i * 5 + Math.sin(index + i) * 5,
        w * 0.32,
        i * 5,
      );
      context.stroke();
    }
    context.restore();
  });
  context.restore();
}

function drawCytoplasmFloor(context, time) {
  const cytoplasm = context.createRadialGradient(-80, -46, 40, 0, 28, 320);
  cytoplasm.addColorStop(0, "#d9e79b");
  cytoplasm.addColorStop(0.5, "#7bb799");
  cytoplasm.addColorStop(1, "#3d7c66");
  context.fillStyle = cytoplasm;
  context.fillRect(-340, -220, 680, 430);

  context.save();
  context.globalAlpha = 0.28;
  context.fillStyle = "#fff9dd";
  context.beginPath();
  context.ellipse(-88, -42, 230, 112, -0.08, 0, Math.PI * 2);
  context.fill();
  context.restore();

  for (let i = 0; i < 110; i += 1) {
    const x = -282 + seed(i * 3) * 564;
    const y = -146 + seed(i * 7) * 292;
    context.fillStyle =
      i % 5 === 0 ? "rgba(255, 236, 154, 0.55)" : "rgba(62, 91, 72, 0.18)";
    context.beginPath();
    context.arc(x, y, 1.2 + seed(i + 4) * 2.5, 0, Math.PI * 2);
    context.fill();
  }
}

function drawPlantWallDetails(context, time) {
  context.save();
  context.globalAlpha = 0.46;
  context.strokeStyle = "#315f2d";
  context.lineWidth = 2;
  const panels = [
    [-306, 54, -286, 110],
    [-248, 116, -228, 166],
    [48, 178, 102, 204],
    [218, 108, 278, 148],
  ];
  panels.forEach(([x1, y1, x2, y2], index) => {
    for (let i = 0; i < 4; i += 1) {
      context.beginPath();
      context.moveTo(x1 + i * 9, y1 + i * 2);
      context.quadraticCurveTo(
        (x1 + x2) / 2,
        y1 + 18 + Math.sin(time + i + index) * 4,
        x2 - i * 7,
        y2 - i * 3,
      );
      context.stroke();
    }
  });
  context.restore();
  drawCellWallNubs(context);
}

function drawPlantFilaments(context, time) {
  context.save();
  context.strokeStyle = "rgba(214, 175, 91, 0.62)";
  context.lineWidth = 5;
  context.lineCap = "round";
  const paths = [
    [-250, 70, -80, -52, 98, -12, 232, -92],
    [-220, 108, -60, 88, 92, 56, 240, 104],
    [-182, -80, -40, -120, 68, -88, 178, -140],
    [-40, 138, 12, 42, 126, 36, 256, -12],
    [-254, -2, -144, 28, -12, 4, 104, -74],
  ];
  paths.forEach((p, index) => {
    context.beginPath();
    context.moveTo(p[0], p[1]);
    context.bezierCurveTo(
      p[2],
      p[3] + Math.sin(time + index) * 6,
      p[4],
      p[5],
      p[6],
      p[7],
    );
    context.stroke();
    context.strokeStyle = "rgba(245, 213, 131, 0.34)";
    context.lineWidth = 2;
    context.stroke();
    context.strokeStyle = "rgba(214, 175, 91, 0.62)";
    context.lineWidth = 5;
  });
  context.restore();
}

function drawPlantMicrotubes(context, time) {
  context.save();
  context.strokeStyle = "rgba(104, 158, 79, 0.34)";
  context.lineWidth = 3;
  for (let i = 0; i < 10; i += 1) {
    context.beginPath();
    context.ellipse(
      -86 + i * 16,
      14,
      128 + i * 7,
      82 - i * 3,
      -0.08,
      Math.PI * 0.76,
      Math.PI * 1.38,
    );
    context.stroke();
  }
  context.restore();
}

function draw3DVacuole(context, x, y, rx, ry, angle, time) {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
  context.fillStyle = "rgba(32, 76, 66, 0.18)";
  context.beginPath();
  context.ellipse(10, 18, rx * 0.98, ry * 0.84, 0, 0, Math.PI * 2);
  context.fill();
  const g = context.createRadialGradient(-rx * 0.35, -ry * 0.5, 12, 0, 0, rx);
  g.addColorStop(0, "#e5f7ff");
  g.addColorStop(0.22, "#92cddd");
  g.addColorStop(0.78, "#5ca6be");
  g.addColorStop(1, "#37788f");
  context.fillStyle = g;
  context.beginPath();
  context.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
  context.fill();
  context.lineWidth = 6;
  context.strokeStyle = "rgba(57, 106, 87, 0.6)";
  context.stroke();
  context.globalAlpha = 0.2;
  context.fillStyle = "#fff";
  context.beginPath();
  context.ellipse(-36, -26, rx * 0.52, ry * 0.3, -0.2, 0, Math.PI * 2);
  context.fill();
  context.globalAlpha = 0.18;
  for (let i = 0; i < 80; i += 1) {
    const px = -rx * 0.75 + seed(i) * rx * 1.5;
    const py = -ry * 0.55 + seed(i + 10) * ry * 1.1;
    context.fillStyle = i % 2 ? "#f9ffff" : "#1f5b6f";
    context.beginPath();
    context.arc(px, py, 0.8 + seed(i + 5) * 1.4, 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

function draw3DNucleus(context, x, y, rx, ry, phase, time) {
  context.save();
  context.translate(x, y);
  context.rotate(phase * 0.03);
  context.fillStyle = "rgba(45, 20, 67, 0.22)";
  context.beginPath();
  context.ellipse(4, 24, rx * 1.05, ry * 0.58, 0, 0, Math.PI * 2);
  context.fill();
  const g = context.createRadialGradient(
    -rx * 0.42,
    -ry * 0.45,
    4,
    0,
    0,
    rx * 1.1,
  );
  g.addColorStop(0, "#f0c9ff");
  g.addColorStop(0.22, "#a979dd");
  g.addColorStop(0.68, "#7344b4");
  g.addColorStop(1, "#43216d");
  context.fillStyle = g;
  context.beginPath();
  context.ellipse(0, 0, rx, ry, -0.04, 0, Math.PI * 2);
  context.fill();
  context.lineWidth = 7;
  context.strokeStyle = "#513080";
  context.stroke();

  context.save();
  context.globalAlpha = 0.52;
  context.fillStyle = "#c59be9";
  context.beginPath();
  context.moveTo(-10, -ry * 0.92);
  context.quadraticCurveTo(rx * 0.1, -20, rx * 0.78, -ry * 0.1);
  context.lineTo(rx * 0.12, ry * 0.2);
  context.closePath();
  context.fill();
  context.strokeStyle = "rgba(62, 27, 98, 0.6)";
  context.lineWidth = 2;
  context.stroke();
  context.restore();

  context.strokeStyle = "rgba(67, 33, 109, 0.42)";
  context.lineWidth = 2;
  for (let i = -2; i <= 2; i += 1) {
    context.beginPath();
    context.moveTo(i * 26, -ry * 0.9);
    context.quadraticCurveTo(i * 10, -8, i * 28, ry * 0.75);
    context.stroke();
  }
  for (let i = 0; i < 30; i += 1) {
    const a = seed(i) * Math.PI * 2;
    const d = seed(i + 3) * rx * 0.88;
    drawSphere(
      context,
      Math.cos(a) * d,
      Math.sin(a) * d * 0.72,
      2.4,
      i % 2 ? "#7c4eb9" : "#cba8e7",
      "#fff",
    );
  }
  drawSphere(context, 28, -2, 25, "#6b2cc2", "#e3bfff");
  context.restore();
}

function draw3DChloroplast(context, x, y, rx, ry, angle, time) {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
  context.fillStyle = "rgba(32, 76, 35, 0.22)";
  context.beginPath();
  context.ellipse(7, 12, rx * 0.95, ry * 0.78, 0, 0, Math.PI * 2);
  context.fill();
  const shell = context.createLinearGradient(-rx, -ry, rx, ry);
  shell.addColorStop(0, "#d9f18c");
  shell.addColorStop(0.36, "#8ec85a");
  shell.addColorStop(1, "#326c31");
  context.fillStyle = shell;
  context.beginPath();
  context.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
  context.fill();
  context.lineWidth = 6;
  context.strokeStyle = "#477e3a";
  context.stroke();
  context.fillStyle = "#bde57d";
  context.beginPath();
  context.ellipse(-4, -2, rx * 0.72, ry * 0.58, 0, 0, Math.PI * 2);
  context.fill();
  for (let i = -3; i <= 3; i += 1) {
    context.strokeStyle = "#5b923e";
    context.lineWidth = 6;
    context.beginPath();
    context.moveTo(-rx * 0.42, i * 7);
    context.quadraticCurveTo(
      0,
      i * 7 + Math.sin(time + i) * 4,
      rx * 0.44,
      i * 7 - 2,
    );
    context.stroke();
    context.strokeStyle = "rgba(240, 255, 181, 0.5)";
    context.lineWidth = 2;
    context.stroke();
  }
  context.restore();
}

function draw3DMito(context, x, y, rx, ry, angle, color, time) {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
  context.fillStyle = "rgba(83, 38, 22, 0.22)";
  context.beginPath();
  context.ellipse(8, 10, rx, ry * 0.7, 0, 0, Math.PI * 2);
  context.fill();
  const g = context.createLinearGradient(-rx, -ry, rx, ry);
  g.addColorStop(0, "#ffd58b");
  g.addColorStop(0.52, color);
  g.addColorStop(1, "#994431");
  context.fillStyle = g;
  context.beginPath();
  context.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#7f3a2b";
  context.stroke();
  context.strokeStyle = "#8b2e22";
  context.lineWidth = 4;
  context.lineCap = "round";
  context.beginPath();
  for (let i = 0; i < 10; i += 1) {
    const px = -rx * 0.62 + i * rx * 0.14;
    const py = Math.sin(i * 1.6 + time) * ry * 0.44;
    if (i === 0) context.moveTo(px, py);
    else context.lineTo(px, py);
  }
  context.stroke();
  context.restore();
}

function draw3DGolgi(context, x, y, color) {
  context.save();
  context.translate(x, y);
  context.rotate(-0.06);
  context.lineCap = "round";
  for (let i = 0; i < 8; i += 1) {
    context.strokeStyle = i % 2 ? "#f08c67" : color;
    context.lineWidth = 9;
    context.beginPath();
    context.moveTo(-72 + i * 2, -10 + i * 10);
    context.bezierCurveTo(
      -30,
      -34 + i * 8,
      28,
      -14 + i * 7,
      72 - i * 2,
      -6 + i * 8,
    );
    context.stroke();
    context.strokeStyle = "rgba(255, 210, 172, 0.62)";
    context.lineWidth = 2;
    context.stroke();
  }
  context.restore();
}

function drawERStack(context, x, y, purple, teal) {
  context.save();
  context.translate(x, y);
  context.rotate(-0.08);
  context.lineCap = "round";
  for (let i = 0; i < 9; i += 1) {
    context.strokeStyle = i % 2 ? purple : teal;
    context.lineWidth = 8;
    context.beginPath();
    context.ellipse(
      0,
      24 + i * 4,
      92 - i * 5,
      34 - i * 1.6,
      0,
      Math.PI * 0.05,
      Math.PI * 1.05,
    );
    context.stroke();
  }
  context.restore();
}

function drawVesicleCloud(context, cx, cy, count, color, time) {
  for (let i = 0; i < count; i += 1) {
    const a = seed(i * 19) * Math.PI * 2 + (state.animate ? time * 0.2 : 0);
    const d = 16 + seed(i * 7) * 170;
    const x = cx + Math.cos(a) * d;
    const y = cy + Math.sin(a) * d * 0.72;
    const palette =
      i % 4 === 0
        ? "#f0a94e"
        : i % 4 === 1
          ? color
          : i % 4 === 2
            ? "#d87ac3"
            : "#69b6ce";
    drawSphere(context, x, y, 3 + seed(i + 4) * 5.5, palette, "#fff8e8");
  }
}

function drawSubtleSectionSheen(context, x, y, w, h, fill, stroke) {
  context.save();
  context.globalAlpha = 0.18;
  const g = context.createLinearGradient(
    x - w / 2,
    y - h / 2,
    x + w / 2,
    y + h / 2,
  );
  g.addColorStop(0, fill);
  g.addColorStop(0.48, "rgba(255,255,255,0.18)");
  g.addColorStop(1, hexToRgba(stroke, 0.12));
  context.fillStyle = g;
  context.beginPath();
  context.ellipse(x, y, w * 0.5, h * 0.5, -0.08, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawBlob(context, cx, cy, rx, ry, fill, stroke, wobble) {
  context.save();
  const gradient = context.createRadialGradient(
    cx - rx * 0.35,
    cy - ry * 0.45,
    10,
    cx,
    cy,
    rx,
  );
  gradient.addColorStop(0, "#fff9e8");
  gradient.addColorStop(0.22, fill);
  gradient.addColorStop(1, stroke);
  context.beginPath();
  for (let i = 0; i <= 64; i += 1) {
    const a = (i / 64) * Math.PI * 2;
    const w =
      1 +
      Math.sin(a * 3 + state.rotation) * wobble * 0.18 +
      Math.cos(a * 5) * wobble * 0.1;
    const x = cx + Math.cos(a) * rx * w;
    const y = cy + Math.sin(a) * ry * w;
    if (i === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.closePath();
  context.fillStyle = gradient;
  context.fill();
  context.lineWidth = 8;
  context.strokeStyle = hexToRgba(stroke, 0.65);
  context.stroke();
  context.restore();
}

function drawSlicePlane(context, x, y, w, h, fill, stroke) {
  context.save();
  context.globalAlpha = 0.36;
  context.fillStyle = fill;
  context.strokeStyle = hexToRgba(stroke, 0.5);
  context.lineWidth = 3;
  context.beginPath();
  context.ellipse(x, y, w * 0.5, h * 0.5, -0.08, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.globalAlpha = 0.48;
  for (let i = -3; i <= 3; i += 1) {
    context.beginPath();
    context.ellipse(x + i * 24, y, w * 0.12, h * 0.48, -0.08, 0, Math.PI * 2);
    context.stroke();
  }
  context.restore();
}

function drawOval(context, x, y, rx, ry, fill, highlight, angle) {
  context.save();
  context.rotate(angle);
  const g = context.createRadialGradient(
    x - rx * 0.3,
    y - ry * 0.45,
    8,
    x,
    y,
    rx,
  );
  g.addColorStop(0, highlight);
  g.addColorStop(0.65, fill);
  g.addColorStop(1, "rgba(42,37,32,0.18)");
  context.fillStyle = g;
  context.beginPath();
  context.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawNucleus(context, x, y, size, color, phase) {
  context.save();
  const g = context.createRadialGradient(
    x - size * 0.28,
    y - size * 0.35,
    2,
    x,
    y,
    size,
  );
  g.addColorStop(0, "#f5d7ff");
  g.addColorStop(0.45, color);
  g.addColorStop(1, "#4e2777");
  context.fillStyle = g;
  context.beginPath();
  context.ellipse(x, y, size, size * 0.78, phase * 0.12, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "rgba(54,26,89,0.45)";
  context.lineWidth = 5;
  context.stroke();
  context.fillStyle = "rgba(255,255,255,0.22)";
  context.beginPath();
  context.arc(x - size * 0.2, y - size * 0.23, size * 0.17, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawChloroplast(context, x, y, rx, ry, angle) {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
  const g = context.createLinearGradient(-rx, -ry, rx, ry);
  g.addColorStop(0, "#e9f6a3");
  g.addColorStop(0.5, "#8cc94d");
  g.addColorStop(1, "#3d7b37");
  context.fillStyle = g;
  context.beginPath();
  context.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#2e6b31";
  context.lineWidth = 4;
  context.stroke();
  for (let i = -2; i <= 2; i += 1) {
    context.strokeStyle = "rgba(37,94,39,0.72)";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(-rx * 0.62, i * 7);
    context.quadraticCurveTo(0, i * 7 + Math.sin(i) * 8, rx * 0.62, i * 7);
    context.stroke();
  }
  context.restore();
}

function drawMito(context, x, y, size, color, phase) {
  context.save();
  context.translate(x, y);
  context.rotate(phase * 0.15);
  drawOval(context, 0, 0, size, size * 0.48, color, "#ffd4a8", 0);
  context.strokeStyle = "rgba(103,41,35,0.75)";
  context.lineWidth = 3;
  context.beginPath();
  for (let i = 0; i < 8; i += 1) {
    const px = -size * 0.58 + i * (size * 0.16);
    const py = Math.sin(i * 1.6) * size * 0.18;
    if (i === 0) context.moveTo(px, py);
    else context.lineTo(px, py);
  }
  context.stroke();
  context.restore();
}

function drawGolgi(context, x, y, color) {
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 7;
  context.lineCap = "round";
  for (let i = 0; i < 6; i += 1) {
    context.beginPath();
    context.moveTo(x - 46, y + i * 9);
    context.quadraticCurveTo(x, y - 22 + i * 11, x + 48, y + i * 6);
    context.stroke();
  }
  context.restore();
}

function drawSphere(context, x, y, r, color, shine) {
  const g = context.createRadialGradient(
    x - r * 0.35,
    y - r * 0.35,
    1,
    x,
    y,
    r,
  );
  g.addColorStop(0, shine || "#fff");
  g.addColorStop(0.35, color);
  g.addColorStop(1, "rgba(42,37,32,0.42)");
  context.fillStyle = g;
  context.beginPath();
  context.arc(x, y, r, 0, Math.PI * 2);
  context.fill();
}

function drawParticles(context, cx, cy, count, color, time) {
  context.save();
  for (let i = 0; i < count; i += 1) {
    const a = seed(i * 5) * Math.PI * 2 + (state.animate ? time * 0.25 : 0);
    const d = 24 + seed(i * 9) * 190;
    const x = cx + Math.cos(a) * d;
    const y = cy + Math.sin(a) * d * 0.68;
    drawSphere(
      context,
      x,
      y,
      3 + seed(i) * 5,
      i % 3 ? color : "#efb04c",
      "#fff8e8",
    );
  }
  context.restore();
}

function drawPseudopods(context, phase) {
  context.save();
  context.strokeStyle = "rgba(154,171,194,0.78)";
  context.lineWidth = 20;
  context.lineCap = "round";
  const arms = [
    [-196, 82, -270, 122],
    [178, -96, 248, -136],
    [-208, -72, -286, -112],
    [168, 112, 242, 150],
  ];
  arms.forEach(([x1, y1, x2, y2], index) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.quadraticCurveTo(
      (x1 + x2) / 2,
      y1 + Math.sin(phase + index) * 40,
      x2,
      y2,
    );
    context.stroke();
  });
  context.restore();
}

function drawDendrites(context, x, y, color) {
  drawDendriteBranch(context, x, y, x - 130, y - 90, color);
  drawDendriteBranch(context, x + 10, y + 12, x - 150, y + 80, color);
  drawDendriteBranch(context, x + 20, y - 40, x - 40, y - 170, color);
}

function drawDendriteBranch(context, x1, y1, x2, y2, color) {
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 9;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(x1, y1);
  context.quadraticCurveTo((x1 + x2) / 2 + 20, (y1 + y2) / 2 - 20, x2, y2);
  context.stroke();
  context.lineWidth = 5;
  for (let i = 0; i < 3; i += 1) {
    const t = 0.45 + i * 0.18;
    const bx = x1 + (x2 - x1) * t;
    const by = y1 + (y2 - y1) * t;
    context.beginPath();
    context.moveTo(bx, by);
    context.lineTo(bx - 30 - i * 6, by + (i % 2 ? 28 : -28));
    context.stroke();
  }
  context.restore();
}

function drawAxon(context, x, y, length, color) {
  context.save();
  context.strokeStyle = "#6e5eb1";
  context.lineWidth = 13;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(x, y);
  context.bezierCurveTo(x + 120, y - 40, x + 260, y + 36, x + length, y - 8);
  context.stroke();
  for (let i = 0; i < 7; i += 1) {
    const px = x + 52 + i * 52;
    context.fillStyle = i % 2 ? "#cfd7e9" : "#e7d2c9";
    context.beginPath();
    context.roundRect(px, y - 22 + Math.sin(i) * 9, 38, 34, 12);
    context.fill();
    context.strokeStyle = "#7d6fb8";
    context.lineWidth = 3;
    context.stroke();
  }
  context.strokeStyle = color;
  context.lineWidth = 6;
  context.beginPath();
  context.moveTo(x + length, y - 8);
  context.lineTo(x + length + 70, y - 70);
  context.moveTo(x + length, y - 8);
  context.lineTo(x + length + 72, y + 46);
  context.stroke();
  context.restore();
}

function drawRoundedRect(context, x, y, w, h, radius, fill, stroke) {
  context.save();
  const g = context.createLinearGradient(x, y, x + w, y + h);
  g.addColorStop(0, "#ffd1d8");
  g.addColorStop(0.55, fill);
  g.addColorStop(1, "#8b507e");
  roundedPath(context, x, y, w, h, radius);
  context.fillStyle = g;
  context.fill();
  context.strokeStyle = stroke;
  context.lineWidth = 4;
  context.stroke();
  context.restore();
}

function drawCapsule(context, x, y, w, h, fill, stroke) {
  context.save();
  const g = context.createLinearGradient(
    x - w / 2,
    y - h / 2,
    x + w / 2,
    y + h / 2,
  );
  g.addColorStop(0, "#d9f3d8");
  g.addColorStop(0.36, fill);
  g.addColorStop(1, "#2a6b68");
  roundedPath(context, x - w / 2, y - h / 2, w, h, h / 2);
  context.fillStyle = g;
  context.fill();
  context.strokeStyle = stroke;
  context.lineWidth = 9;
  context.stroke();
  context.restore();
}

function drawNucleoid(context, x, y, color, time) {
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 8;
  context.lineCap = "round";
  context.beginPath();
  for (let i = 0; i < 55; i += 1) {
    const t = i / 54;
    const px = x - 95 + t * 190;
    const py =
      y +
      Math.sin(t * Math.PI * 8 + time * 0.7) * 28 +
      Math.sin(t * Math.PI * 17) * 8;
    if (i === 0) context.moveTo(px, py);
    else context.lineTo(px, py);
  }
  context.stroke();
  context.restore();
}

function drawPili(context, time) {
  context.save();
  context.strokeStyle = "rgba(166,105,143,0.7)";
  context.lineWidth = 4;
  context.lineCap = "round";
  for (let i = 0; i < 34; i += 1) {
    const a = (i / 34) * Math.PI * 2;
    const x = Math.cos(a) * 230;
    const y = Math.sin(a) * 92;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(
      x + Math.cos(a) * (22 + Math.sin(time + i) * 5),
      y + Math.sin(a) * 22,
    );
    context.stroke();
  }
  context.restore();
}

function drawER(context, x, y, color) {
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 8;
  context.lineCap = "round";
  for (let i = 0; i < 7; i += 1) {
    context.beginPath();
    context.moveTo(x - 92, y + i * 16);
    context.bezierCurveTo(
      x - 40,
      y - 30 + i * 17,
      x + 30,
      y + 28 + i * 12,
      x + 88,
      y + i * 13,
    );
    context.stroke();
  }
  context.restore();
}

function drawCytoskeleton(context) {
  context.save();
  context.strokeStyle = "rgba(238,244,247,0.48)";
  context.lineWidth = 4;
  for (let i = 0; i < 12; i += 1) {
    context.beginPath();
    context.moveTo(-220 + seed(i) * 100, -100 + i * 18);
    context.quadraticCurveTo(
      -20 + seed(i + 2) * 80,
      -160 + seed(i + 3) * 300,
      212 - seed(i + 4) * 80,
      100 - i * 15,
    );
    context.stroke();
  }
  context.restore();
}

function drawMuscleBody(context, x, y, w, h, color, line) {
  context.save();
  const g = context.createLinearGradient(
    x - w / 2,
    y - h / 2,
    x + w / 2,
    y + h / 2,
  );
  g.addColorStop(0, "#ffd2d2");
  g.addColorStop(0.5, color);
  g.addColorStop(1, "#743d72");
  roundedPath(context, x - w / 2, y - h / 2, w, h, 94);
  context.fillStyle = g;
  context.fill();
  context.strokeStyle = line;
  context.lineWidth = 8;
  context.stroke();
  context.restore();
}

function drawFiberBundle(context, x, y, radius, fill, stroke) {
  context.save();
  context.fillStyle = fill;
  context.strokeStyle = stroke;
  context.lineWidth = 4;
  context.beginPath();
  context.ellipse(x, y, radius, radius * 0.72, 0, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  for (let i = 0; i < 18; i += 1) {
    const a = seed(i) * Math.PI * 2;
    const d = seed(i + 9) * radius * 0.72;
    drawSphere(
      context,
      x + Math.cos(a) * d,
      y + Math.sin(a) * d * 0.64,
      5,
      "#e4777b",
      "#fff0e9",
    );
  }
  context.restore();
}

function roundedPath(context, x, y, w, h, r) {
  context.beginPath();
  context.moveTo(x + r, y);
  context.lineTo(x + w - r, y);
  context.quadraticCurveTo(x + w, y, x + w, y + r);
  context.lineTo(x + w, y + h - r);
  context.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  context.lineTo(x + r, y + h);
  context.quadraticCurveTo(x, y + h, x, y + h - r);
  context.lineTo(x, y + r);
  context.quadraticCurveTo(x, y, x + r, y);
  context.closePath();
}

function drawOccurrence() {
  const cell = specimens[state.active];
  const w = els.occurCanvas.clientWidth;
  const h = els.occurCanvas.clientHeight;
  if (!w || !h) return;
  occurCtx.clearRect(0, 0, w, h);
  occurCtx.save();
  occurCtx.translate(w * 0.5, h * 0.5);

  drawMiniContext(occurCtx, cell, -58, 0);
  occurCtx.strokeStyle = hexToRgba(cell.accent, 0.55);
  occurCtx.setLineDash([4, 5]);
  occurCtx.lineWidth = 1.4;
  occurCtx.beginPath();
  occurCtx.moveTo(-10, -24);
  occurCtx.lineTo(42, -46);
  occurCtx.moveTo(-10, 18);
  occurCtx.lineTo(42, 38);
  occurCtx.stroke();
  occurCtx.setLineDash([]);
  drawOccurrenceInset(occurCtx, cell, 64, 0);
  occurCtx.restore();
}

function drawMiniContext(context, cell, x, y) {
  context.save();
  context.translate(x, y);
  context.fillStyle = "#f6e4c5";
  context.strokeStyle = "rgba(91,78,53,0.22)";
  context.lineWidth = 2;
  if (cell.occurrence === "leaf") {
    context.fillStyle = "#8abf53";
    context.beginPath();
    context.ellipse(0, 0, 46, 22, -0.4, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.strokeStyle = "#4b813a";
    context.beginPath();
    context.moveTo(-36, 12);
    context.lineTo(38, -12);
    context.stroke();
  } else if (cell.occurrence === "blood") {
    drawSphere(context, -18, -6, 18, "#d85c73", "#fff");
    drawSphere(context, 18, 8, 20, "#d85c73", "#fff");
    drawSphere(context, 0, 0, 15, "#f2b7be", "#fff");
  } else if (cell.occurrence === "brain") {
    context.fillStyle = "#f0b7b0";
    context.beginPath();
    context.ellipse(0, 0, 42, 34, 0, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.strokeStyle = "#b77c89";
    for (let i = -2; i < 3; i += 1) {
      context.beginPath();
      context.arc(i * 10, 0, 14, 0.2, Math.PI * 1.3);
      context.stroke();
    }
  } else if (cell.occurrence === "gut") {
    context.fillStyle = "#efb8a9";
    context.fillRect(-28, -46, 56, 92);
    context.strokeRect(-28, -46, 56, 92);
    context.fillStyle = "#d87393";
    context.fillRect(-20, -24, 40, 48);
  } else if (cell.occurrence === "soil") {
    context.fillStyle = "#b7854f";
    context.fillRect(-46, 18, 92, 16);
    context.fillStyle = "#7fb85b";
    for (let i = 0; i < 8; i += 1) {
      context.fillRect(-34 + i * 10, -12 - seed(i) * 18, 4, 32 + seed(i) * 16);
    }
  } else if (cell.occurrence === "animal") {
    context.fillStyle = "#d6a36c";
    context.beginPath();
    context.ellipse(-8, 0, 28, 36, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#8b5a3a";
    context.beginPath();
    context.arc(-12, -28, 16, 0, Math.PI * 2);
    context.fill();
  } else if (cell.occurrence === "protocell") {
    context.fillStyle = "rgba(90, 167, 191, 0.32)";
    context.strokeStyle = "#d99a34";
    context.lineWidth = 5;
    context.beginPath();
    context.ellipse(0, 0, 48, 30, -0.08, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.strokeStyle = "#b765c6";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(-22, -4);
    for (let i = 0; i < 7; i += 1)
      context.lineTo(-18 + i * 7, Math.sin(i * 1.5) * 12);
    context.stroke();
    drawSphere(context, 18, 8, 9, "#e0b24f", "#fff7dc");
  } else if (cell.occurrence === "progenote") {
    drawBlob(context, 0, 0, 48, 31, "rgba(126,168,183,0.52)", "#7ea8b7", 0.34);
    context.strokeStyle = "#8c61c7";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(-28, -2);
    for (let i = 0; i < 9; i += 1)
      context.lineTo(-24 + i * 7, -4 + Math.sin(i * 1.2) * 13);
    context.stroke();
    for (let i = 0; i < 7; i += 1)
      drawSphere(context, -26 + i * 8, 16 - seed(i) * 20, 4, "#c6a56d", "#fff");
  } else if (cell.occurrence === "rna") {
    context.fillStyle = "#bba98b";
    context.strokeStyle = "#8b785f";
    roundedPath(context, -48, -24, 96, 48, 14);
    context.fill();
    context.stroke();
    context.strokeStyle = "#b75fc3";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(-34, 2);
    for (let i = 0; i < 9; i += 1)
      context.lineTo(-30 + i * 8, Math.sin(i * 1.25) * 15);
    context.stroke();
    drawSphere(context, 24, -16, 6, "#6d6bc7", "#fff");
  } else if (cell.occurrence === "vent") {
    context.fillStyle = "#293033";
    context.beginPath();
    context.moveTo(-44, 36);
    context.lineTo(-18, -36);
    context.lineTo(22, -44);
    context.lineTo(46, 36);
    context.closePath();
    context.fill();
    context.stroke();
    context.strokeStyle = "#e6842f";
    context.lineWidth = 8;
    context.beginPath();
    context.moveTo(2, 28);
    context.lineTo(2, -34);
    context.stroke();
    context.strokeStyle = "#3897bd";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(-42, 14);
    context.lineTo(-4, 22);
    context.stroke();
  } else if (cell.occurrence === "luca") {
    drawCapsule(context, 0, 0, 88, 40, "#62a9bd", "#426f84");
    context.strokeStyle = "#7a5ac5";
    context.lineWidth = 4;
    context.beginPath();
    context.ellipse(0, -2, 22, 10, -0.2, 0, Math.PI * 2);
    context.stroke();
    for (let i = 0; i < 8; i += 1)
      drawSphere(
        context,
        -28 + i * 8,
        10 - seed(i) * 18,
        3.5,
        "#c6a56d",
        "#fff",
      );
  } else {
    context.strokeStyle = "#c9575f";
    context.lineWidth = 9;
    context.lineCap = "round";
    for (let i = -2; i < 3; i += 1) {
      context.beginPath();
      context.moveTo(-42, i * 12);
      context.lineTo(42, i * 12 + Math.sin(i) * 6);
      context.stroke();
    }
  }
  context.restore();
}

function drawOccurrenceInset(context, cell, x, y) {
  context.save();
  context.translate(x, y);
  context.fillStyle = "#fff9ec";
  context.strokeStyle = hexToRgba(cell.accent, 0.65);
  context.lineWidth = 3;
  context.beginPath();
  context.arc(0, 0, 50, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.clip();
  for (let i = 0; i < 18; i += 1) {
    drawSphere(
      context,
      -42 + seed(i) * 84,
      -38 + seed(i + 5) * 76,
      7 + seed(i + 2) * 8,
      i % 2 ? cell.accent : cell.accent2,
      "#fff",
    );
  }
  context.restore();
}

function seed(value) {
  const x = Math.sin(value * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

loadRendererAndInit();
