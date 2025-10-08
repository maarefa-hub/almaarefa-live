let systemSettings = {
  theme: "light",
  autoSave: true
};

export function getSystemSettings() {
  return systemSettings;
}

export function updateSystemSettings(newSettings) {
  systemSettings = { ...systemSettings, ...newSettings };
}
