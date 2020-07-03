const isDarkModeOn = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

const filterProject = (project, option) => {
  if (option === "Hackathon") {
    return project.isHackathon;
  } else if (option === "School") {
    return project.isSchool;
  } else if (option === "Personal") {
    return project.isPersonal;
  }

  return true;
}

export { filterProject, isDarkModeOn };