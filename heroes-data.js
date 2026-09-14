const HERO_DATA = [
  {
    "id": "01",
    "name": "Glitch Noir",
    "file": "01-glitch-noir.png",
    "subtitle": "Monochrome & high contrast"
  },
  {
    "id": "02",
    "name": "Liquid Mercury",
    "file": "02-liquid-mercury.png",
    "subtitle": "3D metallic chrome fluid"
  },
  {
    "id": "03",
    "name": "Paper Universe",
    "file": "03-paper-universe.png",
    "subtitle": "Tactile origami & craft"
  },
  {
    "id": "04",
    "name": "Infinite Cosmos",
    "file": "04-infinite-cosmos.png",
    "subtitle": "Deep-space nebula gradient"
  },
  {
    "id": "05",
    "name": "Brutalist Terminal",
    "file": "05-brutalist-terminal.png",
    "subtitle": "Raw monospace grid energy"
  },
  {
    "id": "06",
    "name": "Textile Riot",
    "file": "06-textile-riot.png",
    "subtitle": "Pattern clash & folk color"
  },
  {
    "id": "07",
    "name": "Dream Architecture",
    "file": "07-dream-architecture.png",
    "subtitle": "Surreal spatial gradients"
  },
  {
    "id": "08",
    "name": "Kinetic Type",
    "file": "08-kinetic-type.png",
    "subtitle": "Motion-led typography"
  },
  {
    "id": "09",
    "name": "Particle Organism",
    "file": "09-particle-organism.png",
    "subtitle": "Living dots & swarm forms"
  },
  {
    "id": "10",
    "name": "Neon Alley",
    "file": "10-neon-alley.png",
    "subtitle": "Rain-slick cyberpunk glow"
  },
  {
    "id": "11",
    "name": "Sketchbook",
    "file": "11-sketchbook.png",
    "subtitle": "Hand-drawn pencil texture"
  },
  {
    "id": "12",
    "name": "Isometric Toy",
    "file": "12-isometric-toy.png",
    "subtitle": "Playful 3D miniatures"
  },
  {
    "id": "13",
    "name": "Film Cinema",
    "file": "13-film-cinema.png",
    "subtitle": "Widescreen grain & drama"
  },
  {
    "id": "14",
    "name": "Botanical Growth",
    "file": "14-botanical-growth.png",
    "subtitle": "Organic leaf forms"
  },
  {
    "id": "15",
    "name": "Blueprint",
    "file": "15-blueprint.png",
    "subtitle": "Technical drawing precision"
  },
  {
    "id": "16",
    "name": "Comic Panels",
    "file": "16-comic-panels.png",
    "subtitle": "Pop-art panel layout"
  },
  {
    "id": "17",
    "name": "Steampunk",
    "file": "17-steampunk.png",
    "subtitle": "Brass gears & vintage steam"
  },
  {
    "id": "18",
    "name": "Underwater Abyss",
    "file": "18-underwater-abyss.png",
    "subtitle": "Bioluminescent ocean depth"
  },
  {
    "id": "19",
    "name": "Desert Mirage",
    "file": "19-desert-mirage.png",
    "subtitle": "Heat haze & sand tones"
  },
  {
    "id": "20",
    "name": "Graffiti Layers",
    "file": "20-graffiti-layers.png",
    "subtitle": "Street-art spray texture"
  },
  {
    "id": "21",
    "name": "Crystal Facets",
    "file": "21-crystal-facets.png",
    "subtitle": "Prismatic light refraction"
  },
  {
    "id": "22",
    "name": "Vintage Poster",
    "file": "22-vintage-poster.png",
    "subtitle": "Mid-century print charm"
  },
  {
    "id": "23",
    "name": "Hud Scifi",
    "file": "23-hud-scifi.png",
    "subtitle": "Tactical interface overlay"
  },
  {
    "id": "24",
    "name": "Origami Fold",
    "file": "24-origami-fold.png",
    "subtitle": "Paper crease geometry"
  },
  {
    "id": "25",
    "name": "Shadow Puppet",
    "file": "25-shadow-puppet.png",
    "subtitle": "Dramatic silhouette play"
  },
  {
    "id": "26",
    "name": "Generative Noise",
    "file": "26-generative-noise.png",
    "subtitle": "Algorithmic grain fields"
  },
  {
    "id": "27",
    "name": "Monolith Void",
    "file": "27-monolith-void.png",
    "subtitle": "Minimal dark mass"
  },
  {
    "id": "28",
    "name": "Transparency Stack",
    "file": "28-transparency-stack.png",
    "subtitle": "Layered glass panels"
  },
  {
    "id": "29",
    "name": "Soundwave Pulse",
    "file": "29-soundwave-pulse.png",
    "subtitle": "Audio-reactive rhythm"
  },
  {
    "id": "30",
    "name": "Artifact Cabinet",
    "file": "30-artifact-cabinet.png",
    "subtitle": "Curated museum display"
  },
  {
    "id": "31",
    "name": "Cubist Fragments",
    "file": "31-cubist-fragments.png",
    "subtitle": "Shattered geometric planes"
  },
  {
    "id": "32",
    "name": "Memphis Geometry",
    "file": "32-memphis-geometry.png",
    "subtitle": "Playful 80s shapes"
  },
  {
    "id": "33",
    "name": "Ink Wash Zen",
    "file": "33-ink-wash-zen.png",
    "subtitle": "Sumi-e brush calm"
  },
  {
    "id": "34",
    "name": "Carnival",
    "file": "34-carnival.png",
    "subtitle": "Festive color explosion"
  },
  {
    "id": "35",
    "name": "Hidden Library",
    "file": "35-hidden-library.png",
    "subtitle": "Warm scholarly archive"
  },
  {
    "id": "36",
    "name": "Antique Map",
    "file": "36-antique-map.png",
    "subtitle": "Aged cartography detail"
  },
  {
    "id": "37",
    "name": "Clockwork",
    "file": "37-clockwork.png",
    "subtitle": "Intricate mechanical motion"
  },
  {
    "id": "38",
    "name": "Fire Ice",
    "file": "38-fire-ice.png",
    "subtitle": "Elemental contrast clash"
  },
  {
    "id": "39",
    "name": "Puzzle Box",
    "file": "39-puzzle-box.png",
    "subtitle": "Interlocking hidden parts"
  },
  {
    "id": "40",
    "name": "Echo Recursion",
    "file": "40-echo-recursion.png",
    "subtitle": "Infinite mirrored repeats"
  },
  {
    "id": "41",
    "name": "Funhouse",
    "file": "41-funhouse.png",
    "subtitle": "Warped playful distortion"
  },
  {
    "id": "42",
    "name": "Culinary Plating",
    "file": "42-culinary-plating.png",
    "subtitle": "Chef-precise composition"
  },
  {
    "id": "43",
    "name": "Musical Score",
    "file": "43-musical-score.png",
    "subtitle": "Notation-driven rhythm"
  },
  {
    "id": "44",
    "name": "Scientific Specimen",
    "file": "44-scientific-specimen.png",
    "subtitle": "Lab-precise detail"
  },
  {
    "id": "45",
    "name": "Fashion Runway",
    "file": "45-fashion-runway.png",
    "subtitle": "Editorial couture drama"
  },
  {
    "id": "46",
    "name": "Superhero Comic",
    "file": "46-superhero-comic.png",
    "subtitle": "Bold ink & halftone"
  },
  {
    "id": "47",
    "name": "Space Odyssey",
    "file": "47-space-odyssey.png",
    "subtitle": "Retro-future exploration"
  },
  {
    "id": "48",
    "name": "Textile Weave",
    "file": "48-textile-weave.png",
    "subtitle": "Threaded loom patterns"
  },
  {
    "id": "49",
    "name": "Glass Caustics",
    "file": "49-glass-caustics.png",
    "subtitle": "Refracted light play"
  },
  {
    "id": "50",
    "name": "Typewriter",
    "file": "50-typewriter.png",
    "subtitle": "Vintage ink & paper"
  },
  {
    "id": "51",
    "name": "Living Organism",
    "file": "51-living-organism.png",
    "subtitle": "Cellular organic motion"
  },
  {
    "id": "52",
    "name": "Torn Collage",
    "file": "52-torn-collage.png",
    "subtitle": "Layered ripped paper"
  },
  {
    "id": "53",
    "name": "Radial Explosion",
    "file": "53-radial-explosion.png",
    "subtitle": "Energy burst focal point"
  },
  {
    "id": "54",
    "name": "River Flow",
    "file": "54-river-flow.png",
    "subtitle": "Fluid natural currents"
  },
  {
    "id": "55",
    "name": "Micro Worlds",
    "file": "55-micro-worlds.png",
    "subtitle": "Tiny-scale universes"
  },
  {
    "id": "56",
    "name": "Variable Font",
    "file": "56-variable-font.png",
    "subtitle": "Weight-morphing type"
  },
  {
    "id": "57",
    "name": "Light Sculpture",
    "file": "57-light-sculpture.png",
    "subtitle": "Neon tube installations"
  },
  {
    "id": "58",
    "name": "Retro Arcade",
    "file": "58-retro-arcade.png",
    "subtitle": "8-bit game nostalgia"
  },
  {
    "id": "59",
    "name": "Quantum Superposition",
    "file": "59-quantum-superposition.png",
    "subtitle": "Dual-state visual paradox"
  },
  {
    "id": "60",
    "name": "Mood Atmosphere",
    "file": "60-mood-atmosphere.png",
    "subtitle": "Soft tonal gradients"
  },
  {
    "id": "61",
    "name": "Single Stroke",
    "file": "61-single-stroke.png",
    "subtitle": "One-line minimal drawing"
  },
  {
    "id": "62",
    "name": "Exploded Engineering",
    "file": "62-exploded-engineering.png",
    "subtitle": "Part-by-part breakdown"
  },
  {
    "id": "63",
    "name": "Memory Palace",
    "file": "63-memory-palace.png",
    "subtitle": "Layered nostalgic spaces"
  },
  {
    "id": "64",
    "name": "Glitch Garden",
    "file": "64-glitch-garden.png",
    "subtitle": "Organic digital corruption"
  },
  {
    "id": "65",
    "name": "Tactile Materials",
    "file": "65-tactile-materials.png",
    "subtitle": "Rich surface textures"
  }
];
