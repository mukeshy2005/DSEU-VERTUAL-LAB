// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    📋 PRACTICALS DATA FILE                          ║
// ║  ──────────────────────────────────────────────────────────────────  ║
// ║  This is the ONLY file you need to edit to add your simulations,    ║
// ║  PPTs, and practical details.                                       ║
// ║                                                                     ║
// ║  HOW TO ADD A PRACTICAL:                                            ║
// ║  1. Copy one of the practical objects below                         ║
// ║  2. Update the fields with your data                                ║
// ║  3. For PPT/PDF files: place them in the /public/ppts/ folder       ║
// ║     and set pptFile to the filename (e.g., "practical1.pptx")       ║
// ║  4. For simulation links: paste the full URL                        ║
// ╚══════════════════════════════════════════════════════════════════════╝

export const practicals = [
  {
    id: 1,
    title: "PV Diagram of a SI Engine",
    description:
      "Measure and plot the pressure vs volume (P-V) and pressure vs crank angle (P-θ) diagrams as a function of crank position for a four-stroke Spark Ignition engine. Understand the thermodynamic cycle and combustion characteristics.",
    category: "Engine Performance",
    icon: "🔥",
    // ✅ PASTE YOUR SIMULATION LINK BELOW
    simulationUrl: "https://mukeshy2005.github.io/simulation/",
    // ✅ FILE IN /public/ppts/
    pptFile: "pv_diagram_si_engine.pdf",
    tags: ["PV Diagram", "SI Engine", "Thermodynamics", "Crank Angle"],
    difficulty: "Intermediate",
    duration: "45 min",
  },
  {
    id: 2,
    title: "Torque Crank Angle Curve of a SI Engine",
    description:
      "Study and plot the torque variation as a function of crank angle for a Spark Ignition engine. Analyze the torque fluctuations during different strokes and understand their effect on engine smoothness.",
    category: "Engine Performance",
    icon: "🔄",
    // ✅ PASTE YOUR SIMULATION LINK BELOW
    simulationUrl: "https://grand-lebkuchen-0d8b5b.netlify.app/",
    // ✅ FILE IN /public/ppts/
    pptFile: "torque_crank_angle_si_engine.pdf",
    tags: ["Torque", "Crank Angle", "SI Engine", "Engine Dynamics"],
    difficulty: "Intermediate",
    duration: "40 min",
  },
  {
    id: 3,
    title: "Load Test on a SI Engine",
    description:
      "Perform a load test on a Spark Ignition engine to determine the Brake Horse Power (BHP) at various RPM. Plot BHP vs RPM curves and analyze engine performance characteristics under different loading conditions.",
    category: "Engine Performance",
    icon: "📊",
    // ✅ PASTE YOUR SIMULATION LINK BELOW
    simulationUrl: "https://dheeyansh.github.io/SI-Engine-Performance-Lab/",
    // ✅ FILE IN /public/ppts/
    pptFile: "load_test_si_engine.pdf",
    tags: ["Load Test", "BHP", "RPM", "Engine Performance"],
    difficulty: "Beginner",
    duration: "35 min",
  },
  {
    id: 4,
    title: "Mechanical Efficiency of a SI Engine",
    description:
      "Determine the mechanical efficiency of a Spark Ignition engine by measuring the indicated power and brake power. Understand frictional losses and their impact on overall engine performance.",
    category: "Engine Performance",
    icon: "⚙️",
    // ✅ PASTE YOUR SIMULATION LINK BELOW
    simulationUrl: "https://mechanical-efficency-simulation.netlify.app/",
    // ✅ FILE IN /public/ppts/
    pptFile: "mechanical_efficiency_si_engine.pdf",
    tags: ["Mechanical Efficiency", "Friction Loss", "SI Engine", "Power"],
    difficulty: "Intermediate",
    duration: "40 min",
  },
  {
    id: 5,
    title: "Determination of Cylinder Mean Effective Pressure",
    description:
      "Calculate the Mean Effective Pressure (MEP) of an engine cylinder using indicator diagrams. Understand how MEP relates to engine output, displacement volume, and overall power generation.",
    category: "Engine Performance",
    icon: "🎯",
    // ✅ PASTE YOUR SIMULATION LINK BELOW
    simulationUrl: "#",
    // ✅ FILE IN /public/ppts/
    pptFile: "cylinder_mean_effective_pressure.pdf",
    tags: ["Mean Effective Pressure", "Indicator Diagram", "Cylinder", "MEP"],
    difficulty: "Advanced",
    duration: "50 min",
  },
  {
    id: 6,
    title: "Engine Health Monitoring by Vibration Analysis",
    description:
      "Learn to monitor engine health using vibration analysis techniques. Study vibration patterns, frequency spectra, and amplitude variations to detect faults and predict maintenance needs.",
    category: "Engine Diagnostics",
    icon: "📈",
    // ✅ PASTE YOUR SIMULATION LINK BELOW
    simulationUrl: "https://agent-69d6b15b45a7862f--legendary-tarsier-e37a72.netlify.app/",
    // ✅ FILE IN /public/ppts/
    pptFile: "engine_health_vibration_analysis.pdf",
    tags: ["Vibration Analysis", "Engine Health", "Diagnostics", "Monitoring"],
    difficulty: "Advanced",
    duration: "45 min",
  },
  {
    id: 7,
    title: "Variation of Exhaust Noise with Engine Speed",
    description:
      "Measure and analyze how exhaust noise levels vary with changes in engine speed. Understand the acoustic characteristics of engine exhaust and factors affecting noise emission.",
    category: "Engine Diagnostics",
    icon: "🔊",
    // ✅ PASTE YOUR SIMULATION LINK BELOW
    simulationUrl: "#",
    // ✅ FILE IN /public/ppts/
    pptFile: "exhaust_noise_engine_speed.pdf",
    tags: ["Exhaust Noise", "Engine Speed", "Acoustics", "Emissions"],
    difficulty: "Beginner",
    duration: "30 min",
  },
  {
    id: 8,
    title: "Torsional Vibrations of an Engine",
    description:
      "Study the torsional vibration characteristics of an engine crankshaft. Analyze the causes, effects, and measurement of torsional vibrations and understand damping techniques used in automobiles.",
    category: "Engine Diagnostics",
    icon: "🌀",
    // ✅ PASTE YOUR SIMULATION LINK BELOW
    simulationUrl: "#",
    // ✅ FILE IN /public/ppts/
    pptFile: "torsional_vibrations_engine.pdf",
    tags: ["Torsional Vibration", "Crankshaft", "Damping", "NVH"],
    difficulty: "Advanced",
    duration: "45 min",
  },
  {
    id: 9,
    title: "Vibration Based Engine Health Assessment",
    description:
      "Perform a comprehensive engine health assessment using vibration-based diagnostic methods. Learn to interpret vibration data, identify common engine faults, and implement condition-based maintenance strategies.",
    category: "Engine Diagnostics",
    icon: "🔬",
    // ✅ PASTE YOUR SIMULATION LINK BELOW
    simulationUrl: "https://agent-69d6b15b45a7862f--legendary-tarsier-e37a72.netlify.app/",
    // ✅ FILE IN /public/ppts/
    pptFile: "vibration_engine_health.pdf",
    tags: ["Vibration Diagnostics", "Engine Health", "Fault Detection", "CBM"],
    difficulty: "Advanced",
    duration: "50 min",
  },
];

// ──────────────────────────────────────────────
// 🏫 UNIVERSITY INFO - Update if needed
// ──────────────────────────────────────────────
export const universityInfo = {
  name: "Delhi Skill & Entrepreneurship University",
  shortName: "DSEU",
  tagline: "Crafting Excellence",
  department: "Automobile Engineering",
  courseName: "Automobile Engineering Virtual Lab",
  courseCode: "AE-LAB",
  website: "https://dseu.ac.in",
  description:
    "Welcome to the DSEU Automobile Engineering Virtual Lab — an interactive platform where students can explore, experiment, and learn through hands-on simulations of core automobile engineering concepts.",
};
