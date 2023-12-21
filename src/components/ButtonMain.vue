<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

interface ButtonProps {
    variant?: "filled" | "outlined" | "shadowed",
}

withDefaults(defineProps<ButtonProps>(), {
    variant: "filled",
});

</script>

<template>
    <button
        class="flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-full select-none" :class="{
            'bg-indigo-500 text-white hover:bg-indigo-600': variant === 'filled',
            'border-indigo-500 border text-indigo-500 hover:bg-indigo-50': variant === 'outlined',
            'bg-white border-0 text-indigo-500 shadow-lg shadow-indigo-100': variant === 'shadowed',
        }">
        <slot>Button</slot>
    </button>
</template>
