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

</script>

<template>
    <div class="flex flex-col h-screen w-80">
        <div v-for="item in Routes" :key="item.key">
           <RouterLink :to="item.key"> {{ item.label }}</RouterLink>
        </div>
    </div>
</template>
