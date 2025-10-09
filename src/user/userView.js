📄 src/user/userView.js
────────────────────────────
export function renderUserProfile(user) {
  const container = document.getElementById("user");
  container.innerHTML = `
    <h3>الملف الشخصي</h3>
    <p>الاسم: ${user.name}</p>
    <p>البريد الإلكتروني: ${user.email}</p>
  `;
}
