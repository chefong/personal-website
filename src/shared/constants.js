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
    imagePath: "/imgs/experience/intuit.png",
    nameId: "EXPERIENCE_INTUIT",
    position: "Software Engineer",
    duration: "July 2020 - Present",
    descriptionId: "EXPERIENCE_INTUIT_DESCRIPTION"
  },
  {
    imagePath: "imgs/experience/opentable.png",
    nameId: "EXPERIENCE_OPENTABLE",
    position: "Software Engineering Intern",
    duration: "June 2019 - August 2019",
    descriptionId: "EXPERIENCE_OPENTABLE_DESCRIPTION"
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

export { navItems, projects, experiences, handles, revealProps };