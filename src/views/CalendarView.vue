<script setup lang="ts">

import CalendarItem from '@/components/CalendarItem.vue';
import {formatDateCalendar} from "./../utils/helper";

/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

</script>

<template>
    <div class="flex gap-6 p-6">
        <div class="flex flex-col gap-6">
            <div class="h-32 bg-indigo-500 rounded-2xl">

            </div>
            <div class="flex flex-col gap-6 p-6 bg-white border rounded-2xl">
                <div className="flex flex-wrap justify-between flex-1 gap-6">
                    <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-[4px] border border-border-dark"></div>
                        <span className="font-bold text-12 text-neutral-900">Available</span>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-[4px] border border-border-dark bg-neutral-50"></div>
                        <span className="font-bold text-12 text-neutral-900">Completed</span>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-[4px] border bg-primary-2"></div>
                        <span className="font-bold text-12 text-neutral-900">Scheduled</span>
                    </div>
                    <span className="font-bold text-right grow text-14">Today is {{formatDateCalendar(new Date())}}</span>
                </div>
                <CalendarItem />
            </div>
        </div>
        <div class="bg-white h-80 w-96 rounded-2xl">

        </div>
    </div>
</template>
