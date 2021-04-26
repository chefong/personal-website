import hamburgerMenuAnimation from '../assets/menu-animation.json';

export const navItems = [
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

export const projects = [
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
    nameId: "PROJECTS_NUTSHELL",
    descriptionId: "PROJECTS_NUTSHELL_DESCRIPTION",
    githubLink: "https://github.com/chefong/nutshell",
    winner: true
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

export const experiences = [
  {
    imagePath: {
      light: "imgs/experience/opentable.png",
      dark: "imgs/experience/opentable-white.png",
    },
    nameId: "EXPERIENCE_OPENTABLE",
    positionId: "SOFTWARE_ENGINEER_1",
    duration: "February 2021 - Present",
    descriptionId: "EXPERIENCE_OPENTABLE_DESCRIPTION_2"
  },
  {
    imagePath: {
      light: "/imgs/experience/intuit.svg",
      dark: "/imgs/experience/intuit-white.svg"
    },
    nameId: "EXPERIENCE_INTUIT",
    positionId: "SOFTWARE_ENGINEER_1",
    duration: "July 2020 - February 2021",
    descriptionId: "EXPERIENCE_INTUIT_DESCRIPTION"
  },
  {
    imagePath: {
      light: "imgs/experience/opentable.png",
      dark: "imgs/experience/opentable-white.png",
    },
    nameId: "EXPERIENCE_OPENTABLE",
    positionId: "SOFTWARE_ENGINEERING_INTERN",
    duration: "June 2019 - August 2019",
    descriptionId: "EXPERIENCE_OPENTABLE_DESCRIPTION_1"
  }
];

export const handles = [
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

export const likes = ['ABOUT_LIKE_TEA', 'ABOUT_LIKE_WATERMELON', 'ABOUT_LIKE_MUSIC', 'ABOUT_LIKE_DESIGN', 'ABOUT_LIKE_PREMIER_LEAGUE'];

export const dislikes = ['ABOUT_DISLIKE_CILANTRO'];

export const themeColors = {
  light: '#fffefb',
  dark: '#222222',
  tan: '#f1e7d0',
};

export const lottieProps = {
  loop: false,
  autoplay: false,
  animationData: hamburgerMenuAnimation,
};

export const reactScrollLinkProps = {
  smooth: true,
  offset: -150,
  duration: 750,
};

// Segment frames for menu open and close
export const menuOpenSegments = [30, 70];
export const menuCloseSegments = [100, 140];

// Box shadow styling for when the nav menu is open
export const menuBoxShadow = '0px 4px 28px rgba(0, 0, 0, 0.06)';

// Menu transition styling for menu
export const menuTransition = 'all 0.5s ease';

export const themeOrder = ['light', 'tan', 'dark'];

export const iconSize = '28px';

export const iconColors = {
  light: themeColors.dark,
  dark: themeColors.light,
  tan: themeColors.dark,
};

export const toastOptions = {
  style: {
    padding: '16px',
    fontFamily: 'GT Walsheim Pro',
    backgroundColor: '#303030',
    color: 'white',
  },
};

export const particlesParams = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.02
    },
    "move": {
      "direction": "right",
      "speed": 0.05
    },
    "size": {
      "value": 1.25
    },
    "opacity": {
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.05
      }
    }
  },
  "retina_detect": true
};
