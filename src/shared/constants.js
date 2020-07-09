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
    name: "Patch",
    description: "A web application that retroactively fixes your Zoom audio recordings.",
    githubLink: "https://github.com/willshiao/Patch",
    wonHackathon: true
  },
  {
    name: "CheaterBeater",
    description: "Identify and act on fraudulent Devpost hackathon submissions.",
    githubLink: "https://github.com/willshiao/CheaterBeater",
    wonHackathon: true
  },
  {
    name: "Baut",
    description: "A chatbot that recommends movies and music based on the user's likings.",
    githubLink: "https://github.com/KirbyDownB/GEICOChatBot",
    wonHackathon: true
  },
  {
    name: "birdie",
    description: "A web application that visualizes tweets on a Mapbox map.",
    githubLink: "https://github.com/chefong/birdie",
    wonHackathon: false
  },
  {
    name: "Stock Overflow",
    description: "Use news data to predict how a stock will act in the future.",
    githubLink: "https://github.com/kimjihwan0208/stockoverflow",
    wonHackathon: false
  },
  {
    name: "Joyride",
    description: "Determine the most efficient way to reach a destination with your carpool buddies!",
    githubLink: "https://github.com/ericong18/joyride",
    wonHackathon: true
  }
];

const handles = [
  {
    name: "GitHub",
    iconPath: "/imgs/footer/github.svg",
    link: "https://github.com/chefong"
  },
  {
    name: "LinkedIn",
    iconPath: "/imgs/footer/linkedin.svg",
    link: "https://www.linkedin.com/in/ericong18/"
  },
  {
    name: "Instagram",
    iconPath: "/imgs/footer/instagram.svg",
    link: "https://www.instagram.com/chef_ong/"
  },
  {
    name: "Medium",
    iconPath: "/imgs/footer/medium.svg",
    link: "https://medium.com/@ericong18"
  },
  {
    name: "Email",
    iconPath: "/imgs/footer/envelope.svg",
    link: "mailto:ericong18@gmail.com"
  }
];

export { navItems, projects, handles };