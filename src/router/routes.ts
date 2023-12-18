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
    CALENDAR = "/calendar",
    REQUESTS = "/requests",
    PROFILE = "/profile",
}

export enum RouteName {
    DASHBOARD = "Dashboard",
    CALENDAR = "Calendar",
    REQUESTS = "Requests",
    PROFILE = "Profile",
}

export const Routes = [
    { key: Route.DASHBOARD, label: RouteName.DASHBOARD, icon: "ic:round-dashboard" },
    { key: Route.CALENDAR, label: RouteName.CALENDAR, icon: "mdi:calendar" },
    { key: Route.REQUESTS, label: RouteName.REQUESTS, icon: "ant-design:form-outlined" },
    { key: Route.PROFILE, label: RouteName.PROFILE, icon: "iconamoon:profile-circle-light" },
];
