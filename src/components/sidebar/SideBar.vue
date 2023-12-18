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
    <div class="flex flex-col h-screen gap-2 w-80">
        <div class="flex items-center gap-4 pt-8 pb-6 pl-6">
            <img src="./../../assets/logo.jpg" class="w-10 h-10">
            <span class="text-2xl font-semibold text-slate-800">Harmona</span>
        </div>
        <div v-for="item in Routes" :key="item.key">
            <RouterLink :to="item.key" active-class="active">
                <div class="flex items-center gap-4 py-4 pl-8 mx-4 rounded-full item hover:text-indigo-500">
                    <Icon :icon="item.icon" />
                    <span class="font-semibold"> {{ item.label }}</span>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .active > .item {
        background-color: #6366f1;
        color: white;
    }
</style>
