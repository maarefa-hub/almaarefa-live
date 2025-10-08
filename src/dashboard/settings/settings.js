import { getSettings, updateSettings } from "./settingsService.js";
import { renderSettingsForm } from "./settingsView.js";

export function initSettings() {
  const settings = getSettings();
  renderSettingsForm(settings);
}

export function handleSettingsUpdate(newSettings) {
  updateSettings(newSettings);
  alert("تم تحديث الإعدادات");
}
