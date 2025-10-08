export function login(username, password) {
  if (username === "admin" && password === "1234") {
    return { success: true, token: "demo-token" };
  } else {
    return { success: false, message: "بيانات الدخول غير صحيحة" };
  }
}
