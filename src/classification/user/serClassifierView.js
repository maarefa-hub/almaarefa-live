export function renderUserClassification(result) {
  const container = document.getElementById("user-classification");
  container.innerHTML = `<p>👤 تصنيف المستخدم: ${result}</p>`;
}
