<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

import { ref } from 'vue';
import CalendarTable from '@/components/CalendarTable.vue';
import * as DateFn from "date-fns";
import { formatDateCalendar } from "./../utils/helper";
import { Icon } from '@iconify/vue';

const activeDate = ref(new Date());

</script>

<template>
    <div class="flex flex-wrap gap-6 p-6">
        <div class="flex flex-col flex-1 gap-6">
            <div class="flex items-center gap-6 p-5 bg-indigo-500 rounded-2xl">
                <span class="w-56 text-xl font-bold text-white">{{ DateFn.format(activeDate, "MMMM yyyy") }}</span>
                <div class="flex gap-3">
                    <div class="p-2 bg-white rounded-full cursor-pointer"
                        @click="activeDate = DateFn.subMonths(activeDate, 1)">
                        <Icon icon="lucide:chevron-left" color="indigo" />
                    </div>
                    <div class="p-2 bg-white rounded-full cursor-pointer"
                        @click="activeDate = DateFn.addMonths(activeDate, 1)">
                        <Icon icon="lucide:chevron-right" color="indigo" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-6 p-6 bg-white border rounded-2xl">
                <div class="flex flex-wrap justify-between flex-1 gap-6">
                    <div class="flex gap-3">
                        <div class="w-6 h-6 rounded-[4px] border border-border-dark"></div>
                        <span class="text-sm font-bold text-neutral-900">Leave</span>
                    </div>
                    <div class="flex gap-3">
                        <div class="w-6 h-6 rounded-[4px] border border-border-dark bg-neutral-50"></div>
                        <span class="text-sm font-bold text-neutral-900">WFH</span>
                    </div>
                    <div class="flex gap-3">
                        <div class="w-6 h-6 rounded-[4px] border bg-primary-2"></div>
                        <span class="text-sm font-bold text-neutral-900">Holiday</span>
                    </div>
                    <span class="font-bold text-right grow">Today is {{ formatDateCalendar(new Date()) }}</span>
                </div>
                <CalendarTable :active-date="activeDate"/>
            </div>
        </div>
        <div class="bg-white h-80 min-w-[320px] rounded-2xl">

        </div>
    </div>
</template>
