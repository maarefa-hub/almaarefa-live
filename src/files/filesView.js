export function renderFiles(files) {
  const container = document.getElementById("files");
  container.innerHTML = "";
  files.forEach(f => {
    const item = document.createElement("div");
    item.className = "file-item";
    item.textContent = `📄 ${f.name}`;
    container.appendChild(item);
  });
}
