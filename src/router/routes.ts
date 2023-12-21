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
    REQUESTS = "/requests",
    CALENDAR = "/calendar",
    PROFILE = "/profile",
}

export enum RouteName {
    DASHBOARD = "Dashboard",
    REQUESTS = "Requests",
    CALENDAR = "Calendar",
    PROFILE = "Profile",
}

export const Routes = [
    { key: Route.DASHBOARD, label: RouteName.DASHBOARD, icon: "ic:round-dashboard" },
    { key: Route.REQUESTS, label: RouteName.REQUESTS, icon: "ant-design:form-outlined" },
    { key: Route.CALENDAR, label: RouteName.CALENDAR, icon: "mdi:calendar" },
    { key: Route.PROFILE, label: RouteName.PROFILE, icon: "iconamoon:profile-circle-light" },
];
