const navItems = [
  {
    to: "about",
    num: "01.",
    name: "About"
  },
  {
    to: "projects",
    num: "02.",
    name: "Projects"
  },
  {
    to: "experience",
    num: "03.",
    name: "Experience"
  }
];

const projects = [
  {
    nameId: "PROJECTS_PATCH",
    descriptionId: "PROJECTS_PATCH_DESCRIPTION",
    githubLink: "https://github.com/willshiao/Patch",
    winner: true
  },
  {
    nameId: "PROJECTS_CHEATERBEATER",
    descriptionId: "PROJECTS_CHEATERBEATER_DESCRIPTION",
    githubLink: "https://github.com/willshiao/CheaterBeater",
    winner: true
  },
  {
    nameId: "PROJECTS_BAUT",
    descriptionId: "PROJECTS_BAUT_DESCRIPTION",
    githubLink: "https://github.com/KirbyDownB/GEICOChatBot",
    winner: true
  },
  {
    nameId: "PROJECTS_BIRDIE",
    descriptionId: "PROJECTS_BIRDIE_DESCRIPTION",
    githubLink: "https://github.com/chefong/birdie",
    winner: false
  },
  {
    nameId: "PROJECTS_STOCK_OVERFLOW",
    descriptionId: "PROJECTS_STOCK_OVERFLOW_DESCRIPTION",
    githubLink: "https://github.com/kimjihwan0208/stockoverflow",
    winner: false
  },
  {
    nameId: "PROJECTS_JOYRIDE",
    descriptionId: "PROJECTS_JOYRIDE_DESCRIPTION",
    githubLink: "https://github.com/ericong18/joyride",
    winner: true
  }
];

const experiences = [
  {
    imagePath: {
      light: "imgs/experience/opentable.png",
      dark: "imgs/experience/opentable-white.png",
    },
    nameId: "EXPERIENCE_OPENTABLE",
    position: "Software Engineer 1",
    duration: "February 2021 - Present",
    descriptionId: "EXPERIENCE_OPENTABLE_DESCRIPTION_2"
  },
  {
    imagePath: {
      light: "/imgs/experience/intuit.svg",
      dark: "/imgs/experience/intuit-white.svg"
    },
    nameId: "EXPERIENCE_INTUIT",
    position: "Software Engineer 1",
    duration: "July 2020 - February 2021",
    descriptionId: "EXPERIENCE_INTUIT_DESCRIPTION"
  },
  {
    imagePath: {
      light: "imgs/experience/opentable.png",
      dark: "imgs/experience/opentable-white.png",
    },
    nameId: "EXPERIENCE_OPENTABLE",
    position: "Software Engineering Intern",
    duration: "June 2019 - August 2019",
    descriptionId: "EXPERIENCE_OPENTABLE_DESCRIPTION_1"
  }
];

const handles = [
  {
    name: "GitHub",
    icon: ['fab', 'github'],
    link: "https://github.com/chefong"
  },
  {
    name: "LinkedIn",
    icon: ['fab', 'linkedin-in'],
    link: "https://www.linkedin.com/in/ericong18/"
  },
  {
    name: "Spotify",
    icon: ['fab', 'spotify'],
    link: "https://open.spotify.com/user/ericong18?si=H0kHkFdxQ-GyKIlfLWzDqg"
  },
  {
    name: "Medium",
    icon: ['fab', 'medium'],
    link: "https://medium.com/@ericong18"
  },
  {
    name: "Email",
    icon: "envelope",
    link: "mailto:ericong18@gmail.com"
  }
];

const revealProps = {
  duration: 500,
  delay: 400,
  distance: "1.25em",
  bottom: true
};

const likes = ['ABOUT_LIKE_TEA', 'ABOUT_LIKE_WATERMELON', 'ABOUT_LIKE_MUSIC', 'ABOUT_LIKE_DESIGN', 'ABOUT_LIKE_PREMIER_LEAGUE'];

const dislikes = ['ABOUT_DISLIKE_CILANTRO'];

const themeColors = {
  light: '#fffefb',
  dark: '#222222',
  tan: '#f1e7d0',
};

export { navItems, projects, experiences, handles, revealProps, likes, dislikes, themeColors };
