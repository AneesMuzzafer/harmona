<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

import { RouterView } from "vue-router";
import SideBar from "./components/sidebar/SideBar.vue";
import TopBar from "./components/topbar/TopBar.vue";

</script>

<template>
    <div class="flex">
        <SideBar />
        <div class="w-full bg-violet-50">
            <TopBar />
            <RouterView />
        </div>
    </div>
</template>
