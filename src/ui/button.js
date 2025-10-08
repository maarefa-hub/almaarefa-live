export function createButton(label, onClick) {
  const button = document.createElement("button");
  button.textContent = label;
  button.className = "ui-button";
  button.addEventListener("click", onClick);
  return button;
}
