export function classifyUser({ role, activity }) {
  if (role === "admin") {
    return "مدير نظام";
  } else if (activity > 50) {
    return "مستخدم نشط";
  } else {
    return "مستخدم عادي";
  }
}
