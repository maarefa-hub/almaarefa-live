import { processPayment } from "./paymentService.js";
import { renderPaymentForm } from "./paymentView.js";

export function initPayment() {
  renderPaymentForm();
}

export function handlePayment(details) {
  const result = processPayment(details);
  alert(result.message);
}
