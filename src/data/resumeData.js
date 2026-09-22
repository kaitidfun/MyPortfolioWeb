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
      "A touchless media control system powered by computer vision and an ESP32-CAM.",
    tags: ["Python", "Computer Vision", "ESP32-CAM", "Spotify API"],
    demoType: "gif",
    repoUrl: "https://github.com/kaitidfun/GestureMusicController",
    details: {
      heading: "IoT Gesture-Controlled Media Player",
      subheading: "Computer Vision + ESP32-CAM + Spotify API",
      description:
        "A touchless media control system that translates real-time hand gestures into playback commands. An ESP32-CAM streams live video over Wi-Fi to a Python script, which handles gesture recognition with computer vision, while the Spotify API drives live playback control.",
      highlights: [
        "Fully touchless from the first gesture — no keyboard, mouse, or remote ever needed to control playback.",
        "Works with any Spotify Connect device — PC, iPad, iPhone, or anything else signed into the same account — so the same gesture set can control several at once.",
      ],
      techStack: ["Python", "OpenCV", "MediaPipe", "ESP32-CAM", "Spotify API"],
      demoAspect: "video",
      demoLabel: "GIF / video demo coming soon",
      stats: [
        { label: "Frame rate", value: "19–20 FPS" },
        { label: "Median latency", value: "340 ms" },
        { label: "Accuracy", value: "94%" },
      ],
      heroClip: "/demos/iot/hero-cross-device.mp4",
      heroPoster: "/demos/iot/hero-poster.jpg",
      gestures: [
        {
          clip: "/demos/iot/gesture-ready.mp4",
          emoji: "🖐️🖐️",
          gesture: "Both hands open",
          action: "Ready",
          howTo:
            "Hold both hands open and visible to the camera. This calibrates tracking and arms the system to accept the next gesture.",
        },
        {
          clip: "/demos/iot/gesture-play-pause.mp4",
          emoji: "✊✊",
          gesture: "Both fists",
          action: "Play / Pause",
          howTo:
            "Close both hands into fists at the same time. Toggles playback between play and pause.",
        },
        {
          clip: "/demos/iot/gesture-next.mp4",
          emoji: "🖐️✊",
          gesture: "Left open + right fist",
          action: "Next track",
          howTo:
            "Keep your left hand open while closing your right hand into a fist. Skips forward to the next track.",
        },
        {
          clip: "/demos/iot/gesture-previous.mp4",
          emoji: "✊🖐️",
          gesture: "Left fist + right open",
          action: "Previous track",
          howTo:
            "The mirror of Next — close your left hand into a fist while keeping your right hand open. Jumps back to the previous track.",
        },
        {
          clip: "/demos/iot/gesture-volume.mp4",
          emoji: "✊↕️",
          gesture: "Fist, move up/down",
          action: "Volume",
          howTo:
            "Make a fist with one hand and move it up or down. Volume follows your hand's vertical position in real time.",
        },
        {
          clip: "/demos/iot/gesture-seek.mp4",
          emoji: "✊↔️",
          gesture: "Fist, move left/right",
          action: "Seek",
          howTo:
            "Make a fist with one hand and move it left or right. Scrubs the current track's playback position.",
        },
      ],
      architecture: {
        stages: [
          {
            icon: "camera",
            label: "ESP32-CAM",
            detail: "Streams live video over Wi-Fi",
            flow: "video frame",
          },
          {
            icon: "python",
            label: "Python",
            detail: "OpenCV + MediaPipe track hand landmarks and classify the gesture",
            flow: "gesture command",
          },
          {
            icon: "spotify",
            label: "Spotify Web API",
            detail: "Applies the playback command",
            flow: "live update",
          },
        ],
        devices: [
          { icon: "laptop", label: "PC" },
          { icon: "tablet", label: "iPad" },
          { icon: "phone", label: "iPhone" },
        ],
      },
      hardwareDescription:
        "The ESP32-CAM module, wired and mounted inside a simple cardboard enclosure for the working prototype — quick to build and easy to reposition while testing camera angles and lighting.",
      hardwarePhoto: {
        src: "/demos/iot/hardware-box-open.jpg",
        caption: "The ESP32-CAM module mounted inside its cardboard enclosure.",
      },
      challenges: [
        {
          problem: "Next and Previous fired interchangeably.",
          solution:
            "The first version only checked how many hands were open vs. closed, not which hand was which. Fixed by identifying left vs. right hand from the landmark data before mapping the gesture to a command.",
        },
        {
          problem: "Volume and Seek felt jittery.",
          solution:
            "Raw hand position is noisy frame-to-frame, causing the value to jump around. Fixed by smoothing the tracked position over a short rolling window before mapping it to a volume or seek delta.",
        },
      ],
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
