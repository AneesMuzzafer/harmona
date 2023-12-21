<script setup lang="ts">
/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

interface InputProps {
    label: string;
    modelValue: string;
}

defineEmits(['update:modelValue']);
defineProps<InputProps>();

</script>

<template>
    <div class="flex flex-col gap-2 w-fit">
        <span class="font-medium select-none text-slate-600">
            {{ label }}
        </span>
        <div class="flex p-2 border border-gray-400 rounded-lg">
            <input class="flex-1 font-medium bg-transparent focus:outline-none placeholder-slate-300" v-bind="$attrs"
                :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
        </div>
    </div>
</template>
