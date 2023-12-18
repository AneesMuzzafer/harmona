/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

export interface CalendarDate {
    date: Date;
    label: string | number;
    isActiveMonth: boolean;
}

export interface TableColumn {
    type: TableDataType;
    key: string;
    name: string;
}

export interface TableRow {
    [key: string]: string | Date;
}
