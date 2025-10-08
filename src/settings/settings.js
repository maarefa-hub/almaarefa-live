import { getSystemSettings, updateSystemSettings } from "./settingsService.js";
import { renderSystemSettingsForm } from "./settingsView.js";

export function initSystemSettings() {
  const settings = getSystemSettings();
  renderSystemSettingsForm(settings);
}

export function handleSystemSettingsUpdate(newSettings) {
  updateSystemSettings(newSettings);
  alert("تم تحديث إعدادات النظام");
}
