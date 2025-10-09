📄 src/dashboard/dashboardView.js
────────────────────────────────────
export function renderDashboard(data) {
  const container = document.getElementById("dashboard");
  container.innerHTML = `
    <h2>مرحبًا ${data.user}</h2>
    <ul>
      <li>عدد المشاريع: ${data.stats.projects}</li>
      <li>الرسائل: ${data.stats.messages}</li>
      <li>الإشعارات: ${data.stats.notifications}</li>
    </ul>
  `;
}
