<script setup>
import { onMounted, ref } from "vue";
import UserTable from "@/components/UserTable.vue";
import UserService from "@/services/UserService";
import UseSweetAlert from "@/utils/UseSweetAlert";
import UseFormatAddress from "@/utils/UseFormatAddress";

const usersData = ref([]);
const isLoading = ref(false);

const getUsersData = async () => {
  try {
    isLoading.value = true;
    const resUsers = await UserService.getUser();
    const { data: users = [] } = resUsers;

    if (!users.length) return;

    usersData.value = users.map((user) => {
      const { address, company } = user;

      return {
        ...user,
        address: UseFormatAddress(address),
        company: company?.name,
      };
    });
  } catch (err) {
    UseSweetAlert({
      title: "Error",
      icon: "error",
      text: "There was an error, please try again later!",
    });
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getUsersData();
});
</script>

<template>
  <main class="h-100">
    <h1 class="text-center py-5">Users Table</h1>
    <user-table :users-data="usersData" :is-loading="isLoading" />
  </main>
</template>

