export function renderSystemSettingsForm(settings) {
  const container = document.getElementById("system-settings");
  container.innerHTML = `
    <h3>إعدادات النظام</h3>
    <label>السمة:</label>
    <select id="theme">
      <option value="light" ${settings.theme === "light" ? "selected" : ""}>فاتحة</option>
      <option value="dark" ${settings.theme === "dark" ? "selected" : ""}>داكنة</option>
    </select>
    <label>الحفظ التلقائي:</label>
    <input type="checkbox" id="autoSave" ${settings.autoSave ? "checked" : ""} />
    <button onclick="submitSystemSettings()">حفظ</button>
  `;
}

window.submitSystemSettings = function () {
  const theme = document.getElementById("theme").value;
  const autoSave = document.getElementById("autoSave").checked;
  window.handleSystemSettingsUpdate({ theme, autoSave });
};
