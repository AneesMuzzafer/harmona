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
import Sidebar from "./components/sidebar/SideBar.vue";

</script>

<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full bg-violet-50">
            <RouterView />
        </div>
    </div>
</template>
