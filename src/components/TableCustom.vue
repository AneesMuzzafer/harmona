<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

import { type TableRow, type TableColumn } from '@/App.d';
import { TableDataType } from "./../utils/util";
import { formatDateShort } from "./../utils/helper";
import Pill from './Pill.vue';

type status = "approved" | "pending" | "rejected";

defineProps({
    columns: Array<TableColumn>,
    data: Array<TableRow>
});

</script>

<template>
    <table class="w-full">
        <thead>
            <tr class="h-16 bg-indigo-500">
                <th v-for="col in columns" :key="col.key" class="rounded-none first:rounded-l-xl last:rounded-r-xl">
                    <div class="p-4 text-left cursor-pointer gap-2.5 flex-1 font-semibold text-white">
                        {{ col.name }}
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in  data  " :key="index" class="h-16 text-sm border-b">
                <template v-for="(col) in  columns  " :key="col.type + index">
                    <td v-if="(col.type === TableDataType.Status)">
                        <div class="flex-1 p-4">
                            <Pill :label="(row[col.key] as string)" :status="(row[col.key] as status)"/>
                        </div>
                    </td>

                    <td v-else-if="(col.type === TableDataType.Date)">
                        <div class="flex flex-1 p-4 ">
                            {{ formatDateShort(new Date(row[col.key])) }}
                        </div>
                    </td>

                    <td v-else-if="(col.type === TableDataType.Text)">
                        <div class="flex flex-1 p-4">
                            {{ row[col.key] }}
                        </div>
                    </td>

                    <td v-else-if="(col.type === TableDataType.Type)">
                        <div class="flex flex-1 p-4 font-semibold text-slate-700">
                            {{ (row[col.key] as string).toUpperCase() }}
                        </div>
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
    <div v-if="!data?.length" class="text-center text-neutral-600">No items found</div>
</template>
