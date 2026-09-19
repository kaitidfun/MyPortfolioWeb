export const profile = {
  name: "Chanagun Khunphet",
  title: "Software Engineer Intern",
  tagline: "Bridging the gap between code and creativity.",
  summary:
    "A Software Engineering student experienced in full-stack feature development, IoT, and API integrations — with a keen interest in applying technology to multimedia production, video generation, and interactive media.",
  education: {
    degree: "B.S. in Software Engineering",
    school: "Chiang Mai University, College of Art Media and Technology (CAMT)",
    period: "2023 – current (Expected Grad: 2027)",
    gpax: "GPAX: 2.92",
  },
  contact: {
    phone: "093-161-3142",
    email: "totemsan0.1@gmail.com",
    github: "https://github.com/kaitidfun",
    githubLabel: "github.com/kaitidfun",
  },
  resumeFile: "/resume-chanagun-khunphet.pdf",
};

export const projects = [
  {
    id: "reelcast",
    name: "ReelCast",
    subtitle: "Senior Project",
    blurb:
      "Automated full commercial video generation system — not just background imagery.",
    tags: ["Python", "FastAPI", "LTX", "Gemini"],
    demoType: "video",
    details: {
      heading: "ReelCast",
      subheading: "Senior Project — Automated Commercial Video Generation",
      description:
        "An end-to-end system that automates the full production of commercial videos by integrating LTX and Gemini APIs. Rather than simply layering text over stock footage, ReelCast generates the video content itself, orchestrating generative AI models across the entire creative pipeline.",
      highlights: [
        "Automated full commercial video generation by integrating LTX and Gemini APIs.",
        "Developed core features end-to-end and integrated API endpoints for a seamless system workflow.",
      ],
      techStack: ["Python", "FastAPI", "Generative AI (LTX)", "Gemini API"],
      demoAspect: "16:9",
      demoLabel: "Video demo coming soon",
    },
  },
  {
    id: "iot-gesture-player",
    name: "IoT Gesture-Controlled Media Player",
    subtitle: "Personal / Coursework Project",
    blurb:
      "A touchless media control system powered by computer vision and Arduino hardware.",
    tags: ["Python", "Computer Vision", "Arduino", "Spotify API"],
    demoType: "gif",
    details: {
      heading: "IoT Gesture-Controlled Media Player",
      subheading: "Computer Vision + Arduino + Spotify API",
      description:
        "A touchless media control system that translates real-time hand gestures into playback commands. Computer vision handles gesture recognition in Python, while an Arduino bridges the software to physical hardware, and the Spotify API drives live playback control.",
      highlights: [
        "Built a touchless media control system using Python (Computer Vision) and Arduino.",
        "Integrated Spotify API to translate real-time hand gestures into playback commands.",
      ],
      techStack: ["Python", "Computer Vision", "Arduino", "Spotify API"],
      demoAspect: "video",
      demoLabel: "GIF / video demo coming soon",
    },
  },
  {
    id: "nature-conservation-game",
    name: "Nature Conservation Game",
    subtitle: "CAU x CMU Hackathon",
    blurb:
      "UI/UX prototypes for an educational app, designed under intense hackathon time constraints.",
    tags: ["Figma", "UX/UI", "Teamwork"],
    demoType: "gallery",
    details: {
      heading: "Nature Conservation Game",
      subheading: "CAU x CMU Joint Hackathon 2025",
      description:
        "An educational game concept designed to raise awareness of nature conservation. Working under intense hackathon time constraints, the focus was on rapid UI/UX prototyping in Figma and close cross-functional collaboration with a diverse team.",
      highlights: [
        "Designed UI/UX prototypes (Figma) for an educational app under intense time constraints.",
        "Collaborated cross-functionally with a diverse team, demonstrating rapid problem-solving.",
      ],
      techStack: ["Figma", "Teamwork", "Rapid Problem-Solving"],
      demoAspect: "gallery",
      demoLabel: "Image gallery / mockups coming soon",
      certification:
        "Certification: CAU x CMU Joint Hackathon — Chiang Mai University & Chung-Ang University, 2025",
    },
  },
];

export const skillCategories = [
  {
    title: "AI & Emerging Tech",
    skills: ["Generative AI Integration (LTX, Gemini)", "AI Automation"],
  },
  {
    title: "Hardware & IoT",
    skills: ["Arduino", "Circuit Design", "Sensor Integration"],
  },
  {
    title: "Design & Tools",
    skills: ["Figma (UX/UI)", "GitHub", "VS Code", "Claude Code"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "C++"],
  },
];

export const softSkills = [
  {
    title: "Team Collaboration",
    description:
      "Divided development by features and integrated them seamlessly with a teammate.",
  },
  {
    title: "Effective Communication",
    description:
      "Presented progress to advisors and applied feedback to hit project milestones.",
  },
  {
    title: "Rapid Problem-Solving",
    description:
      "Resolved critical issues under strict time constraints during a joint hackathon.",
  },
];
