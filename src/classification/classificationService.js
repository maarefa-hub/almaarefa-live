export function classify(input) {
  if (input.includes("تعليمي")) {
    return "مشروع تعليمي";
  } else if (input.includes("تجاري")) {
    return "مشروع تجاري";
  } else {
    return "غير مصنف";
  }
}
