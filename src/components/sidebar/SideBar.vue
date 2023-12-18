<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

import { Routes } from '@/router/routes';
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';

</script>

<template>
    <div class="flex flex-col h-screen w-80">
        <div class="flex items-center gap-4 pt-10 pb-4 pl-4">
            <img src="./../../assets/logo.jpg" class="w-10 h-10">
            <span class="text-2xl font-semibold text-slate-800">Harmona</span>
        </div>
        <div v-for="item in Routes" :key="item.key">
            <RouterLink :to="item.key">
                <div class="flex items-center gap-4 py-4 pl-8 hover:bg-purple-50">
                    <Icon :icon="item.icon" />
                    <span class="font-semibold"> {{ item.label }}</span>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
