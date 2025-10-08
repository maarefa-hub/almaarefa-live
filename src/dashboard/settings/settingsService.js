let userSettings = {
  language: "ar",
  notifications: true
};

export function getSettings() {
  return userSettings;
}

export function updateSettings(newSettings) {
  userSettings = { ...userSettings, ...newSettings };
}
