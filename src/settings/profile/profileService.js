let profileData = {
  name: "خالد المنتصر",
  bio: "رائد منصة المعرفة",
  location: "اليمن"
};

export function getProfile() {
  return profileData;
}

export function updateProfile(data) {
  profileData = { ...profileData, ...data };
}
