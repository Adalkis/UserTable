<script setup>
import { inject } from "vue";

const props = defineProps({
  customClass: String,
});
const isLoading = inject("isLoading");
</script>


<template>
  <div class="table-responsive customTable">
    <table :class="['table h-100', customClass]">
      <thead>
        <slot name="header"></slot>
      </thead>
      <tbody class="h-100">
        <slot name="body"></slot>
        <td colspan="12 h-100" v-if="isLoading">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </td>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.customTable {
  max-height: 600px;
}
</style>