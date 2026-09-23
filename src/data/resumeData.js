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
      "An AI pipeline that turns a prompt into a branded video ad and publishes it across social platforms.",
    tags: ["Gemini", "LTX Video", "FastAPI", "Celery"],
    demoType: "video",
    details: {
      heading: "ReelCast",
      subheading: "Senior Project — AI-Powered Social Media Reel Generator",
      problem:
        "Making a branded video ad usually means shooting footage, editing it, and coordinating a team — or settling for a generic AI tool that just drops text over stock footage. Even once it exists, getting it published means uploading it to every platform separately by hand.",
      description:
        "ReelCast automates the whole loop instead. A prompt and a product become a finished, branded video — Gemini plans the shot and writes the caption, LTX Video generates the footage — and it publishes straight to TikTok, Instagram, Facebook, and YouTube from one screen.",
      highlights: [
        "Full pipeline from prompt to a finished, branded video — no separate script, footage, or editing tools needed.",
        "Publishes straight to TikTok, Instagram, Facebook, and YouTube — no manual re-uploading per platform.",
      ],
      techStack: [
        "Python",
        "FastAPI",
        "Celery",
        "Redis",
        "Next.js",
        "PostgreSQL",
        "Cloudflare R2",
        "Google Gemini",
        "LTX Video",
        "Docker",
      ],
      architecture: {
        stages: [
          {
            icon: "prompt",
            label: "Prompt + Product",
            detail: "Member describes the ad and picks a product",
            flow: "prompt",
          },
          {
            icon: "sparkle",
            label: "Gemini",
            detail: "Generates a cinematic first frame, then writes captions and hashtags",
            flow: "first frame",
          },
          {
            icon: "film",
            label: "LTX Video",
            detail: "Animates the first frame into a full video clip",
            flow: "raw video",
          },
          {
            icon: "gear",
            label: "FFmpeg",
            detail: "Adds branding overlays and strips audio",
          },
        ],
      },
      moreFeatures: [
        "Schedule a post for later and a background worker publishes it automatically the moment it's due — no need to be online when it goes live.",
        "A performance dashboard pulling real revenue, views, and clicks from TikTok Shop, Shopee, and Lazada is still in progress.",
      ],
      featureClip: {
        src: "/demos/reelcast/feature-distribute.mp4",
        poster: "/demos/reelcast/feature-distribute-poster.jpg",
        caption: "Gemini drafts the caption and hashtags, then the reel schedules straight to the connected accounts.",
      },
      heroClip: "/demos/reelcast/hero-prompt-to-video.mp4",
      heroPoster: "/demos/reelcast/hero-poster.jpg",
      demoAspect: "16:9",
      demoLabel: "Video demo coming soon",
    },
  },
  {
    id: "iot-gesture-player",
    name: "Gesture-Controlled Media Player",
    subtitle: "Personal / Coursework Project",
    blurb:
      "A touchless media control system powered by computer vision and an ESP32-CAM.",
    tags: ["Python", "Computer Vision", "ESP32-CAM", "Spotify API"],
    demoType: "gif",
    repoUrl: "https://github.com/kaitidfun/GestureMusicController",
    details: {
      heading: "Gesture-Controlled Media Player",
      subheading: "Computer Vision + ESP32-CAM + Spotify API",
      problem:
        "Controlling music while your hands are busy, dirty, or across the room usually means walking over to a keyboard or digging out a phone — and with more than one device in play, each one needs its own remote or app.",
      description:
        "This project skips the physical controller entirely. An ESP32-CAM streams live video over Wi-Fi to a Python app that reads hand gestures with OpenCV and MediaPipe, then relays the matching command straight to the Spotify Web API — so a gesture in the air is the remote.",
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
          problem: "The ESP32-CAM overheats during longer sessions.",
          solution:
            "The camera module itself is a weak point — it heats up fast, and once it does, the video feed loses quality and starts stuttering. Still unresolved; a better camera module with more stable thermal performance, sharper image quality, and no stutter under sustained use would fix it for good.",
        },
        {
          problem: "Volume and Seek felt jittery.",
          solution:
            "Raw hand position is noisy frame-to-frame, causing the value to jump around. Fixed by smoothing the tracked position over a short rolling window before mapping it to a volume or seek delta.",
        },
        {
          problem: "Volume and Seek only track near-perfectly straight movement.",
          solution:
            "Seek reads hand motion almost purely along the X-axis and Volume along the Y-axis. Move diagonally — say, drifting sideways while lifting your hand — and the gesture drops out of both instead of registering on either axis. Still a limitation the system doesn't handle.",
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
