<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

import {type StringRecord} from './../App'
import { Icon } from '@iconify/vue';

const props = defineProps(["info", "cardname", "text", "color", "icon"]);

const percent = `${props.info.rem/props.info.total * 100}%`;

const textColorVariants: StringRecord = {
    purple: "text-purple-800",
    cyan: "text-cyan-800",
    rose: "text-rose-800",
    orange: "text-orange-800",
}

const bgColorVariants: StringRecord = {
    purple: "bg-purple-200",
    cyan: "bg-cyan-200",
    rose: "bg-rose-200",
    orange: "bg-orange-200",
}

</script>

<template>
   <div class="flex items-center flex-1 gap-4 p-4 bg-white rounded-2xl">
        <div class="flex items-center justify-center w-10 h-10 rounded-full" :class="`${bgColorVariants[color]}`">
            <Icon :icon="icon" width="20" :class="`${textColorVariants[color]}`"/>
        </div>
        <div class="flex flex-col flex-1 gap-1">
            <span class="text-sm font-medium text-slate-400 font-roboto">{{info.rem}}/{{info.total}} {{ text }}</span>
            <div class="flex w-full h-1 rounded bg-indigo-50">
                <div class="bg-indigo-500 rounded" :style="{width: `${percent}`}"></div>
            </div>
            <div class="px-2 py-0.5 mt-2 rounded-lg bg-indigo-50 w-fit">
                <span class="font-bold text-slate-800">{{ cardname }}</span>
            </div>
        </div>
   </div>
</template>
