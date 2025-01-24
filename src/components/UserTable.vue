<script setup>
import CustomTable from "@/components/CustomTable.vue";
const props = defineProps({
  usersData: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>


<template>
  <custom-table :is-loading="isLoading" customClass="table-striped">
    <template #header>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Username</th>
        <th>Website</th>
        <th>Company</th>
      </tr>
    </template>
    <template #body>
      <tr v-for="user in usersData" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.address }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.website }}</td>
        <td>{{ user.company }}</td>
      </tr>
    </template>
  </custom-table>
</template>