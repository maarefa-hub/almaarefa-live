export function renderProfileForm(profile) {
  const container = document.getElementById("profile-settings");
  container.innerHTML = `
    <h3>الملف الشخصي</h3>
    <input type="text" id="name" value="${profile.name}" placeholder="الاسم" />
    <input type="text" id="bio" value="${profile.bio}" placeholder="نبذة" />
    <input type="text" id="location" value="${profile.location}" placeholder="الموقع" />
    <button onclick="submitProfile()">حفظ</button>
  `;
}

window.submitProfile = function () {
  const name = document.getElementById("name").value;
  const bio = document.getElementById("bio").value;
  const location = document.getElementById("location").value;
  window.handleProfileUpdate({ name, bio, location });
};
