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
    DASHBOARD = "dashboard",
    HISTORY = "history",
    REQUESTS = "requests",
    PROFILE = "profile",
}

export const Routes = [
    { key: Route.DASHBOARD, label: RouteName.DASHBOARD },
    { key: Route.HISTORY, label: RouteName.HISTORY },
    { key: Route.REQUESTS, label: RouteName.REQUESTS },
    { key: Route.PROFILE, label: RouteName.PROFILE },
];
