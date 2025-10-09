📄 src/user/user.js
────────────────────
import { getUser, updateUser } from "./userService.js";
import { renderUserProfile } from "./userView.js";

export function initUser() {
  const user = getUser();
  renderUserProfile(user);
}

export function handleUserUpdate(data) {
  updateUser(data);
  renderUserProfile(getUser());
}
