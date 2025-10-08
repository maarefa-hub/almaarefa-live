import { classify } from "./classificationService.js";
import { renderClassification } from "./classificationView.js";

export function initClassification(input) {
  const result = classify(input);
  renderClassification(result);
}
