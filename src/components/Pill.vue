<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

interface PillProps {
    label: string;
    status?: "approved" | "pending" | "rejected";
}

withDefaults(defineProps<PillProps>(), {
    status: "approved"
});

</script>

<template>
    <div class="flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg w-fit" :class="{
        'bg-green-100 text-green-800': status === 'approved',
        'bg-amber-100 text-amber-800': status === 'pending',
        'bg-rose-100 text-rose-800': status === 'rejected',
    }">
        {{ label.toUpperCase() }}
    </div>
</template>
