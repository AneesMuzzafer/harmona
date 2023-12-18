<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

import TableCustom from '@/components/TableCustom.vue';
import { type TableColumn, type TableRow } from '@/App.d';
import { TableDataType } from "./../utils/util";

const columns: TableColumn[] = [
    {
        type: TableDataType.Date,
        key: "request_at",
        name: "Request Date",
    },
    {
        type: TableDataType.Date,
        key: "start_at",
        name: "Start Date",
    },
    {
        type: TableDataType.Date,
        key: "end_at",
        name: "End Date",
    },
    {
        type: TableDataType.Status,
        key: "status",
        name: "Status",
    },
    {
        type: TableDataType.Text,
        key: "reason_title",
        name: "Reason",
    },
    {
        type: TableDataType.Type,
        key: "request_type",
        name: "Type",
    },
];

const data: TableRow[] = [
    {
        request_at: new Date(),
        start_at: new Date(),
        end_at: new Date(),
        status: "approved",
        reason_title: "Sick",
        request_type: "leave"
    },
    {
        request_at: new Date(),
        start_at: new Date(),
        end_at: new Date(),
        status: "rejected",
        reason_title: "Urgent Work",
        request_type: "leave"
    },
    {
        request_at: new Date(),
        start_at: new Date(),
        end_at: new Date(),
        status: "rejected",
        reason_title: "Sick",
        request_type: "wfh"
    },
    {
        request_at: new Date(),
        start_at: new Date(),
        end_at: new Date(),
        status: "approved",
        reason_title: "Urgent Work",
        request_type: "wfh"
    },
]

</script>

<template>
    <div class="flex flex-col gap-6 p-6">
        <div>

        </div>
        <div class="p-6 bg-white rounded-2xl">
            <TableCustom :columns="columns" :data="data"/>
        </div>
    </div>
</template>
