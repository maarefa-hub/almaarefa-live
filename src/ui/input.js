export function createInput(placeholder, type = "text") {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  input.className = "ui-input";
  return input;
}
