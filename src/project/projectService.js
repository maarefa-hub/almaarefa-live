const projects = [];

export function createProject(name) {
  const project = { id: Date.now(), name };
  projects.push(project);
}

export function getProjects() {
  return projects;
}
