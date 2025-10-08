export function processPayment({ amount, method }) {
  if (amount > 0 && method) {
    return { success: true, message: "تمت عملية الدفع بنجاح" };
  } else {
    return { success: false, message: "فشل الدفع، تحقق من البيانات" };
  }
}
