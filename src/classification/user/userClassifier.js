import { classifyUser } from "./userClassifierService.js";
import { renderUserClassification } from "./userClassifierView.js";

export function initUserClassification(userData) {
  const result = classifyUser(userData);
  renderUserClassification(result);
}
