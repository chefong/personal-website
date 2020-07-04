import { skillsText, projectsText, experienceText } from './content';

// Projects images
// import joyride from './static/imgs/projects/joyride.png';
// import joyrideSC from './static/imgs/projects/joyrideModal.png';
// import bandsonmap from './static/imgs/projects/bandsonmap.png';
// import bandsonmapGIF from './static/imgs/projects/bandsonmapModal.gif';
// import rshell from './static/imgs/projects/rshell.png';
// import rshellGIF from './static/imgs/projects/rshellModal.gif';

// Experience images
// import intuit from './static/imgs/experience/intuit.png';
// import opentable from './static/imgs/experience/opentable.png';
// import urc from './static/imgs/experience/urc.png';
// import wttb from './static/imgs/experience/wttb.png';
// import ucr from './static/imgs/experience/ucr.png';
// import acm from './static/imgs/experience/acm.png';
// import ieee from './static/imgs/experience/ieee.png';

export const email = "ericong18@gmail.com";

const languagesSkills = [
  {
    name: "C++",
    imagePath: "/imgs/skills/cplusplus.svg"
  },
  {
    name: "HTML",
    imagePath: "/imgs/skills/html5.svg"
  },
  {
    name: "CSS",
    imagePath: "/imgs/skills/css3.svg"
  },
  {
    name: "JavaScript",
    imagePath: "/imgs/skills/javascript.svg",
  },
  {
    name: "Python",
    imagePath: "/imgs/skills/python.svg"
  }
];

const technologiesSkills = [
  {
    name: "Git",
    imagePath: "/imgs/skills/git.svg"
  },
  {
    name: "React",
    imagePath: "/imgs/skills/react.svg"
  },
  {
    name: "Vue.js",
    imagePath: "/imgs/skills/vue.svg"
  },
  {
    name: "Node.js",
    imagePath: "/imgs/skills/nodejs.svg"
  },
  {
    name: "Redux",
    imagePath: "/imgs/skills/redux.png"
  },
  {
    name: "Jest",
    imagePath: "/imgs/skills/jest.svg"
  },
  {
    name: "MongoDB",
    imagePath: "/imgs/skills/mongodb.svg"
  },
  {
    name: "PostgreSQL",
    imagePath: "/imgs/skills/postgresql.svg"
  },
  {
    name: "Bootstrap",
    imagePath: "/imgs/skills/bootstrap.svg"
  }
];

const othersSkills = [
  {
    name: "Figma",
    imagePath: "/imgs/skills/figma.png"
  },
  {
    name: "Adobe Photoshop",
    imagePath: "/imgs/skills/photoshop.png"
  },
  {
    name: "Adobe Lightroom",
    imagePath: "/imgs/skills/lightroom.png"
  },
  {
    name: "Sketch",
    imagePath: "/imgs/skills/sketch.png"
  },
  {
    name: "Audacity",
    imagePath: "/imgs/skills/audacity.png"
  }
];

export const navigationItems = [
  {
    to: "title",
    href: "/",
    label: "Home"
  },
  {
    to: "about",
    href: "/about",
    label: "About"
  },
  {
    to: "skills",
    href: "/skills",
    label: "Skills"
  },
  {
    to: "projects",
    href: "/projects",
    label: "Projects"
  },
  {
    to: "experience",
    href: "/experience",
    label: "Experience"
  }
];

export const skillsSection = [
  {
    type: skillsText.languages,
    icons: languagesSkills
  },
  {
    type: skillsText.technologies,
    icons: technologiesSkills
  },
  {
    type: skillsText.others,
    icons: othersSkills
  }
];

export const projects = [
  {
    name: "Patch",
    imagePath: "/imgs/projects/patch.png",
    screenshotPath: "/imgs/projects/patchModal.png",
    text: projectsText.patch,
    githubLink: "https://github.com/willshiao/patch",
    demoLink: null,
    devpostLink: "https://devpost.com/software/patch-8bg6x2",
    isHackathonWinner: true,
    isHackathon: true,
    isSchool: false,
    isPersonal: false
  },
  {
    name: "Cheater Beater",
    imagePath: "/imgs/projects/cheaterBeater.png",
    screenshotPath: "/imgs/projects/cheaterBeaterModal.png",
    text: projectsText.cheaterBeater,
    githubLink: "https://github.com/willshiao/CheaterBeater",
    demoLink: null,
    devpostLink: "https://devpost.com/software/cheaterbeater",
    isHackathonWinner: true,
    isHackathon: true,
    isSchool: false,
    isPersonal: false
  },
  {
    name: "birdie",
    imagePath: "/imgs/projects/birdie.png",
    screenshotPath: "/imgs/projects/birdieModal.gif",
    text: projectsText.birdie,
    githubLink: "https://github.com/chefong/birdie",
    demoLink: null,
    devpostLink: null,
    isHackathonWinner: false,
    isHackathon: false,
    isSchool: true,
    isPersonal: false
  },
  {
    name: "stock overflow",
    imagePath: "/imgs/projects/stockOverflow.png",
    screenshotPath: "/imgs/projects/stockOverflowModal.gif",
    text: projectsText.stockOverflow,
    githubLink: null,
    demoLink: null,
    devpostLink: null,
    isHackathonWinner: false,
    isHackathon: false,
    isSchool: true,
    isPersonal: false
  },
  {
    name: "baut",
    imagePath: "/imgs/projects/baut.png",
    screenshotPath: "/imgs/projects/bautModal.png",
    text: projectsText.baut,
    githubLink: "https://github.com/KirbyDownB/GEICOChatBot",
    demoLink: null,
    devpostLink: null,
    isHackathonWinner: true,
    isHackathon: true,
    isSchool: false,
    isPersonal: false
  },
  {
    name: "skancare",
    imagePath: "/imgs/projects/skancare.png",
    screenshotPath: "/imgs/projects/skancareModal.png",
    text: projectsText.skancare,
    githubLink: "https://github.com/jshin029/skancare",
    demoLink: null,
    devpostLink: "https://devpost.com/software/skancare",
    isHackathonWinner: true,
    isHackathon: true,
    isSchool: false,
    isPersonal: false
  },
  {
    name: "joyride",
    imagePath: "/imgs/projects/joyride.png",
    screenshotPath: "/imgs/projects/joyrideModal.png",
    text: projectsText.joyride,
    githubLink: "https://github.com/ericong18/joyride",
    demoLink: null,
    devpostLink: "https://devpost.com/software/carpuul",
    isHackathonWinner: true,
    isHackathon: true,
    isSchool: false,
    isPersonal: false
  },
  {
    name: "bandsonmap",
    imagePath: "/imgs/projects/bandsonmap.png",
    screenshotPath: "/imgs/projects/bandsonmapModal.gif",
    text: projectsText.bandsonmap,
    githubLink: "https://github.com/ericong18/bandsonmap",
    demoLink: "https://bandsonmap.firebaseapp.com",
    devpostLink: null,
    isHackathonWinner: false,
    isHackathon: false,
    isSchool: false,
    isPersonal: true
  },
  {
    name: "rshell",
    imagePath: "/imgs/projects/rshell.png",
    screenshotPath: "/imgs/projects/rshellModal.gif",
    text: projectsText.rshell,
    githubLink: "https://github.com/ericong18/rshell",
    demoLink: null,
    devpostLink: null,
    isHackathonWinner: false,
    isHackathon: false,
    isSchool: true,
    isPersonal: false
  }
];

// export const experiences = [
//   {
//     title: experienceText.intuitTitle,
//     subtitle: experienceText.intuitSubtitle,
//     description: experienceText.intuitDescription,
//     image: intuit
//   },
//   {
//     title: experienceText.opentableTitle,
//     subtitle: experienceText.opentableSubtitle,
//     description: experienceText.opentableDescription,
//     image: opentable
//   },
//   {
//     title: experienceText.urcTitle,
//     subtitle: experienceText.urcSubtitle,
//     description: experienceText.urcDescription,
//     image: urc
//   },
//   {
//     title: experienceText.csambaTitle,
//     subtitle: experienceText.csambaSubtitle,
//     description: experienceText.csambaDescription,
//     image: wttb
//   },
//   {
//     title: experienceText.geospatialTitle,
//     subtitle: experienceText.geospatialSubtitle,
//     description: experienceText.geospatialDescription,
//     image: ucr
//   },
//   {
//     title: experienceText.acmTitle,
//     subtitle: experienceText.acmSubtitle,
//     description: experienceText.acmDescription,
//     image: acm
//   },
//   {
//     title: experienceText.ieeeTitle,
//     subtitle: experienceText.ieeeSubtitle,
//     description: experienceText.ieeeDescription,
//     image: ieee
//   }
// ];

export const selectProjectOptions = [
  'All',
  'Hackathon',
  'School',
  'Personal'
];

export const links = [
  {
    url: "https://github.com/chefong",
    icon: ['fab', 'github'],
  },
  {
    url: "https://www.linkedin.com/in/ericong18/",
    icon: ['fab', 'linkedin-in'],
  },
  {
    url: "https://medium.com/@ericong18",
    icon: ['fab', 'medium'],
  },
  {
    url: "https://www.flickr.com/people/133538935@N03/",
    icon: ['fab', 'flickr'],
  },
  {
    url: `mailto:${email}`,
    icon: "envelope",
  }
];

export const fontAwesomeSize = "2x";
export const githubUsername = "chefong";
export const resume = "https://drive.google.com/file/d/1p9soqZuF9Ud7QaSsN0SV9fIjAScFseV3/view?usp=sharing";
export const scrollOffsetDesktop = 0;
export const scrollDuration = 1000;