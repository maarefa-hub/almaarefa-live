import { getProfile, updateProfile } from "./profileService.js";
import { renderProfileForm } from "./profileView.js";

export function initProfileSettings() {
  const profile = getProfile();
  renderProfileForm(profile);
}

export function handleProfileUpdate(data) {
  updateProfile(data);
  alert("تم تحديث الملف الشخصي");
}
