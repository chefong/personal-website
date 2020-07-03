import { skillsText, projectsText, experienceText } from './content';

// Skills images
// import bootstrapIcon from './static/imgs/skills/bootstrap.svg';
// import gitIcon from './static/imgs/skills/git.svg';
// import nodeIcon from './static/imgs/skills/nodejs.svg';
// import psIcon from './static/imgs/skills/photoshop.png';
// import reactIcon from './static/imgs/skills/react.svg';
// import lrIcon from './static/imgs/skills/lightroom.png';
// import audacityIcon from './static/imgs/skills/audacity.png';
// import sketchIcon from './static/imgs/skills/sketch.png';
// import reduxIcon from './static/imgs/skills/redux.png';
// import psqlIcon from './static/imgs/skills/postgresql.svg';
// import figmaIcon from './static/imgs/skills/figma.png';
// import vueIcon from './static/imgs/skills/vue.svg';
// import jestIcon from './static/imgs/skills/jest.svg';
// import mongodbIcon from './static/imgs/skills/mongodb.svg';

// Projects images
// import patch from './static/imgs/projects/patch.png';
// import patchSC from './static/imgs/projects/patchModal.png';
// import cheaterBeater from './static/imgs/projects/cheaterBeater.png';
// import cheaterBeaterSC from './static/imgs/projects/cheaterBeaterModal.png';
// import birdie from './static/imgs/projects/birdie.png';
// import birdieGIF from './static/imgs/projects/birdieModal.gif';
// import stockOverflow from './static/imgs/projects/stockOverflow.png';
// import stockOverflowGIF from './static/imgs/projects/stockOverflowModal.gif';
// import baut from './static/imgs/projects/baut.png';
// import bautSC from './static/imgs/projects/bautModal.png';
// import skancare from './static/imgs/projects/skancare.png';
// import skancareSC from './static/imgs/projects/skancareModal.png';
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
    imagePath: "/static/imgs/skills/cplusplus.svg'"
  },
  {
    name: "HTML",
    imagePath: "/static/imgs/skills/html5.svg"
  },
  {
    name: "CSS",
    imagePath: "/static/imgs/skills/css3.svg"
  },
  {
    name: "JavaScript",
    imagePath: "/static/imgs/skills/javascript.svg",
  },
  {
    name: "Python",
    imagePath: "/static/imgs/skills/python.svg"
  }
];

// const technologiesSkills = [
//   {
//     name: "Git",
//     image: gitIcon
//   },
//   {
//     name: "React",
//     image: reactIcon
//   },
//   {
//     name: "Vue.js",
//     image: vueIcon
//   },
//   {
//     name: "Node.js",
//     image: nodeIcon
//   },
//   {
//     name: "Redux",
//     image: reduxIcon
//   },
//   {
//     name: "Jest",
//     image: jestIcon
//   },
//   {
//     name: "MongoDB",
//     image: mongodbIcon
//   },
//   {
//     name: "PostgreSQL",
//     image: psqlIcon
//   },
//   {
//     name: "Bootstrap",
//     image: bootstrapIcon
//   }
// ];

// const othersSkills = [
//   {
//     name: "Figma",
//     image: figmaIcon
//   },
//   {
//     name: "Adobe Photoshop",
//     image: psIcon
//   },
//   {
//     name: "Adobe Lightroom",
//     image: lrIcon
//   },
//   {
//     name: "Sketch",
//     image: sketchIcon
//   },
//   {
//     name: "Audacity",
//     image: audacityIcon
//   }
// ];

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
  }
  // {
  //   type: skillsText.technologies,
  //   icons: technologiesSkills
  // },
  // {
  //   type: skillsText.others,
  //   icons: othersSkills
  // }
];

// export const projects = [
//   {
//     name: "Patch",
//     image: patch,
//     screenshot: patchSC,
//     text: projectsText.patch,
//     githubLink: "https://github.com/willshiao/patch",
//     demoLink: null,
//     devpostLink: "https://devpost.com/software/patch-8bg6x2",
//     isHackathonWinner: true,
//     isHackathon: true,
//     isSchool: false,
//     isPersonal: false
//   },
//   {
//     name: "Cheater Beater",
//     image: cheaterBeater,
//     screenshot: cheaterBeaterSC,
//     text: projectsText.cheaterBeater,
//     githubLink: "https://github.com/willshiao/CheaterBeater",
//     demoLink: null,
//     devpostLink: "https://devpost.com/software/cheaterbeater",
//     isHackathonWinner: true,
//     isHackathon: true,
//     isSchool: false,
//     isPersonal: false
//   },
//   {
//     name: "birdie",
//     image: birdie,
//     screenshot: birdieGIF,
//     text: projectsText.birdie,
//     githubLink: "https://github.com/chefong/birdie",
//     demoLink: null,
//     devpostLink: null,
//     isHackathonWinner: false,
//     isHackathon: false,
//     isSchool: true,
//     isPersonal: false
//   },
//   {
//     name: "stock overflow",
//     image: stockOverflow,
//     screenshot: stockOverflowGIF,
//     text: projectsText.stockOverflow,
//     githubLink: null,
//     demoLink: null,
//     devpostLink: null,
//     isHackathonWinner: false,
//     isHackathon: false,
//     isSchool: true,
//     isPersonal: false
//   },
//   {
//     name: "baut",
//     image: baut,
//     screenshot: bautSC,
//     text: projectsText.baut,
//     githubLink: "https://github.com/KirbyDownB/GEICOChatBot",
//     demoLink: null,
//     devpostLink: null,
//     isHackathonWinner: true,
//     isHackathon: true,
//     isSchool: false,
//     isPersonal: false
//   },
//   {
//     name: "skancare",
//     image: skancare,
//     screenshot: skancareSC,
//     text: projectsText.skancare,
//     githubLink: "https://github.com/jshin029/skancare",
//     demoLink: null,
//     devpostLink: "https://devpost.com/software/skancare",
//     isHackathonWinner: true,
//     isHackathon: true,
//     isSchool: false,
//     isPersonal: false
//   },
//   {
//     name: "joyride",
//     image: joyride,
//     screenshot: joyrideSC,
//     text: projectsText.joyride,
//     githubLink: "https://github.com/ericong18/joyride",
//     demoLink: null,
//     devpostLink: "https://devpost.com/software/carpuul",
//     isHackathonWinner: true,
//     isHackathon: true,
//     isSchool: false,
//     isPersonal: false
//   },
//   {
//     name: "bandsonmap",
//     image: bandsonmap,
//     screenshot: bandsonmapGIF,
//     text: projectsText.bandsonmap,
//     githubLink: "https://github.com/ericong18/bandsonmap",
//     demoLink: "https://bandsonmap.firebaseapp.com",
//     devpostLink: null,
//     isHackathonWinner: false,
//     isHackathon: false,
//     isSchool: false,
//     isPersonal: true
//   },
//   {
//     name: "rshell",
//     image: rshell,
//     screenshot: rshellGIF,
//     text: projectsText.rshell,
//     githubLink: "https://github.com/ericong18/rshell",
//     demoLink: null,
//     devpostLink: null,
//     isHackathonWinner: false,
//     isHackathon: false,
//     isSchool: true,
//     isPersonal: false
//   }
// ];

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