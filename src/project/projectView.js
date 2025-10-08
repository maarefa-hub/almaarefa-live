export function renderProjects(projects) {
  const container = document.getElementById("projects");
  container.innerHTML = "";
  projects.forEach(p => {
    const item = document.createElement("div");
    item.className = "project-item";
    item.textContent = `📁 ${p.name}`;
    container.appendChild(item);
  });
}
