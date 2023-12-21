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
import InfoCard from '@/components/InfoCard.vue';
import ButtonMain from "@/components/ButtonMain.vue";

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

const info1 = {
    rem: 2,
    total: 12
}
const info2 = {
    rem: 7,
    total: 24
}

const info3 = {
    rem: 6,
    total: 21
}

const handleClick = () => {
    console.log("clicked");
}

</script>

<template>
    <div class="flex flex-wrap gap-6 p-6">
        <div class="flex flex-col flex-1 gap-6">
            <div class="flex justify-between flex-1 p-4 bg-white rounded-2xl">
                <div class="flex gap-4">
                    <ButtonMain variant="outlined" @click=handleClick>Check-in</ButtonMain>
                    <ButtonMain variant="outlined" @click=handleClick>Check-out</ButtonMain>
                </div>
                <ButtonMain variant="filled">Raise a request</ButtonMain>
            </div>
            <div class="flex gap-6">
                <InfoCard :info="info1" :cardname="'Leaves'" :text="'remaining'" :color="'purple'"
                    :icon="'pepicons-pop:leave-circle-filled'" />
                <InfoCard :info="info2" :cardname="'WFH days'" :text="'remaining'" :color="'cyan'"
                    :icon="'ic:round-home-work'" />
                <InfoCard :info="info3" :cardname="'Requests'" :text="'approved'" :color="'rose'"
                    :icon="'ant-design:form-outlined'" />
                <InfoCard :info="info3" :cardname="'Check-in'" :text="'late-ins'" :color="'orange'"
                    :icon="'akar-icons:check-in'" />
            </div>
            <div class="p-6 bg-white rounded-2xl">
                <TableCustom :columns="columns" :data="data" />
            </div>
        </div>
        <div class="bg-white h-80 min-w-[320px] rounded-2xl bg-gre">

        </div>
    </div>
</template>
