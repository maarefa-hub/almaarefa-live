📄 src/user/userService.js
────────────────────────────
let currentUser = {
  name: "خالد المنتصر",
  email: "khaled@almaarefa.live"
};

export function getUser() {
  return currentUser;
}

export function updateUser(data) {
  currentUser = { ...currentUser, ...data };
}
