<script setup lang="ts">
import ButtonMain from '@/components/ButtonMain.vue';
import InputMain from '@/components/InputMain.vue';
import { ref } from 'vue';

/**
 * Harmona
 *
 * @author      Anees Muzzafer
 * @link        https://github.com/AneesMuzzafer/harmona
 * @license     MIT
 * @copyright   2023 Anees Muzzafer
 */

const userInfo = ref({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    imageURL: ""
})

</script>

<template>
    <div class="flex flex-col px-10 pt-4 m-6 bg-white rounded-2xl">
        <div class="flex gap-32 py-6 border-gray-200">
            <InputMain class="flex-1" label="First Name" v-model="userInfo.firstName" placeholder="First Name" required />
            <InputMain class="flex-1" label="Last Name" v-model="userInfo.lastName" placeholder="Last Name" />
            <div class="flex-1"></div>
        </div>
        <div class="flex gap-32 py-6 border-gray-200">
            <InputMain class="flex-1" label="Username" v-model="userInfo.username" placeholder="Username" />
            <InputMain class="flex-1" label="Email" v-model="userInfo.email" placeholder="Email" type="email" />
            <InputMain class="flex-1" label="Phone" v-model="userInfo.phone" placeholder="Phone" type="number" />
        </div>
        <div class="flex gap-32 py-6 border-gray-200">
            <InputMain class="flex-1" label="Address" v-model="userInfo.address" placeholder="Address" />
        </div>
        <div class="flex gap-32 py-6 border-gray-200">
            <InputMain class="flex-1" label="Image URL" v-model="userInfo.imageURL" placeholder="Image URL" />
        </div>
        <div class="flex gap-32 py-6">
            <InputMain class="flex-1" label="Current Password" v-model="userInfo.currentPassword"
                placeholder="Current Password" />
            <InputMain class="flex-1" label="New Password" v-model="userInfo.newPassword" placeholder="New Password"
                type="password" />
            <InputMain class="flex-1" label="Confirm New Password" v-model="userInfo.confirmNewPassword"
                placeholder="Confirm New Password" type="password" />
        </div>
        <div class="flex justify-end gap-6 pt-4 pb-10">
            <ButtonMain variant="outlined" class="w-36">Discard</ButtonMain>
            <ButtonMain class="w-36">Save</ButtonMain>
        </div>
    </div>
</template>
