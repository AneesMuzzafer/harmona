/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

import type { CalendarDate } from "@/App";
import * as Date from "date-fns";

export const weekdays = [
    { long: "Sunday", short: "Sun" },
    { long: "Monday", short: "Mon" },
    { long: "Tuesday", short: "Tue" },
    { long: "Wednesday", short: "Wed" },
    { long: "Thursday", short: "Thu" },
    { long: "Friday", short: "Fri" },
    { long: "Saturday", short: "Sat" },
];

export const getDays = (activeDate: Date):Array<CalendarDate> => {
    const monthStart = Date.startOfMonth(activeDate);
    const daysInMonth = Date.getDaysInMonth(monthStart);
    const startWeekDay = Date.getDay(monthStart);

    const arr = Array.from({ length: 35 }, (_, i) => i < daysInMonth ? (i + 1) : "");

    const days = [];

    for (let i = 0; i < 35; i++) {
        const index = (i + startWeekDay) % 35;
        days[index] = {
            date: Date.set(activeDate, { date: arr[i] || 1 }),
            label: arr[i],
            isActiveMonth: !!arr[i]
        };
    }

    return days;
};

export const formatTime = (d: Date) => Date.format(d, "hh:mm bb");
export const formatDateCalendar = (d: Date) => Date.format(d, "MMMM dd, yyyy");
export const formatDateShort = (d: Date) => Date.format(d, "MMM dd, yyyy");
