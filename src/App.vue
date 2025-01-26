<script setup>
import { onMounted, ref } from "vue";
import UserTable from "@/components/UserTable.vue";
import UserService from "@/services/UserService";
import useSweetAlert from "@/utils/useSweetAlert";
import useFormatAddress from "@/utils/useFormatAddress";

const usersData = ref([]);
const isLoading = ref(false);

const getUsersData = async () => {
  try {
    isLoading.value = true;
    const usersRes = await UserService.getUsers();

    if (!usersRes.length) return;

    usersData.value = usersRes.map((user) => {
      const { address, company } = user;

      return {
        ...user,
        address: useFormatAddress(address),
        company: company?.name,
      };
    });
  } catch (err) {
    useSweetAlert({
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

@/utils/useSweetAlert