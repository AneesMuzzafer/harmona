/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

export enum Route {
    DASHBOARD = "/",
    HISTORY = "/history",
    REQUESTS = "/requests",
    PROFILE = "/profile",
}

export enum RouteName {
    DASHBOARD = "Dashboard",
    HISTORY = "History",
    REQUESTS = "Requests",
    PROFILE = "Profile",
}

export const Routes = [
    { key: Route.DASHBOARD, label: RouteName.DASHBOARD, icon: "ic:round-dashboard" },
    { key: Route.HISTORY, label: RouteName.HISTORY, icon: "mdi:calendar" },
    { key: Route.REQUESTS, label: RouteName.REQUESTS, icon: "ant-design:form-outlined" },
    { key: Route.PROFILE, label: RouteName.PROFILE, icon: "iconamoon:profile-circle-light" },
];
