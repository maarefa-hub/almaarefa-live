import { createProject, getProjects } from "./projectService.js";
import { renderProjects } from "./projectView.js";

export function initProjectModule() {
  const projects = getProjects();
  renderProjects(projects);
}

export function handleNewProject(name) {
  createProject(name);
  renderProjects(getProjects());
}
