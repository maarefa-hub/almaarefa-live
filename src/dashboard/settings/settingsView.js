export function renderSettingsForm(settings) {
  const container = document.getElementById("settings");
  container.innerHTML = `
    <h3>الإعدادات</h3>
    <label>اللغة:</label>
    <select id="language">
      <option value="ar" ${settings.language === "ar" ? "selected" : ""}>العربية</option>
      <option value="en" ${settings.language === "en" ? "selected" : ""}>English</option>
    </select>
    <label>الإشعارات:</label>
    <input type="checkbox" id="notifications" ${settings.notifications ? "checked" : ""} />
    <button onclick="submitSettings()">حفظ</button>
  `;
}

window.submitSettings = function () {
  const language = document.getElementById("language").value;
  const notifications = document.getElementById("notifications").checked;
  window.handleSettingsUpdate({ language, notifications });
};
