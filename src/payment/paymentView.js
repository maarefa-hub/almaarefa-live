export function renderPaymentForm() {
  const container = document.getElementById("payment");
  container.innerHTML = `
    <h3>الدفع</h3>
    <input type="number" id="amount" placeholder="المبلغ" />
    <select id="method">
      <option value="credit">بطاقة ائتمان</option>
      <option value="paypal">باي بال</option>
    </select>
    <button onclick="submitPayment()">ادفع الآن</button>
  `;
}

window.submitPayment = function () {
  const amount = parseFloat(document.getElementById("amount").value);
  const method = document.getElementById("method").value;
  window.handlePayment({ amount, method });
};
