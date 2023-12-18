<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

const imgUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

</script>

<template>
    <div class="flex items-center justify-end p-5">
        <div class="w-10 h-10 rounded-full">
            <img :src="imgUrl" class="object-cover w-10 h-10 rounded-full"/>
        </div>
        <span class="ml-5 font-medium">System User</span>
    </div>
</template>
