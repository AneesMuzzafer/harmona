<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

import { computed } from "vue";
import * as DateFn from "date-fns";
import { getDays, weekdays, formatTime } from '@/utils/helper';
import type { CalendarDate } from "@/App";

const props = defineProps({
    activeDate: Date,
    scheduled: Array<String>,
    completed: Array<Date>,
});

const days = computed(() => getDays(props.activeDate || new Date()));

const getData = (d: CalendarDate) => {
    const isToday = DateFn.isSameDay(new Date(), d.date);
    const isNotActiveMonth = !d.isActiveMonth;

    return {
        isToday,
        isNotActiveMonth,
    }
}
</script>

<template>
    <div class="flex flex-col w-full border rounded-xl border-border-dark overflow-clip">
        <div class="flex bg-neutral-50">
            <div v-for="(w, i) in weekdays" :key="i" class="flex basis-[14.285714%] p-4 justify-center text-neutral-600 ">
                <span class="hidden font-bold lg:block text-12">{{ w.long }}</span>
                <span class="block font-bold lg:hidden text-10">{{ w.short }}</span>
            </div>
        </div>
        <div className="flex flex-wrap [&>*:nth-child(7n)]:border-r-0">
            <div v-for="(d, i) in days" :key="i" @Click="console.log(d)" class="flex flex-col basis-[14.285714%] group justify-between items-end h-16 lg:h-24 border-r text-14
                border-t border-border-dark [:nth-child(7)]:bg-red-500" :class="{
                    'bg-neutral-50': getData(d).isToday,
                    'bg-primary-2 cursor-pointer': false
                }">
                <Span class="p-3 text-14 text-neutral-900" :class="{
                    // 'bg-alerts-error_base text-white rounded-full h-6 w-6 flex justify-center items-center mt-[11px] mr-[6px]': true,
                    // 'text-white': true
                }">
                    {{ d.label }}
                </Span>
                <Span v-if="d.label === 1" class="gap-1 p-1 px-2 text-12 rounded-tl-md bg-primary-100 text-neutral-900">
                    {{ formatTime(new Date()) }} - {{ formatTime(new Date()) }}
                </Span>
            </div>
        </div>
    </div>
</template>
