📄 src/dashboard/dashboard.js
───────────────────────────────
import { getDashboardData } from "./dashboardService.js";
import { renderDashboard } from "./dashboardView.js";

export function initDashboard() {
  const data = getDashboardData();
  renderDashboard(data);
}
