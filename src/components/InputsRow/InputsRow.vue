<template>
  <div class="inputs-row mb-3">
    <Inputs :account="account" />
    <button
      class="btn btn-danger ms-2 text-white"
      @click="emits('remove', account.id)"
    >
      <trashIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Inputs from "./Inputs.vue";
import { Account } from "@/store";
import trashIcon from "@/assets/trash.svg";

const emits = defineEmits(["remove"]);
defineProps<{ account: Account }>();
</script>

<style>
.inputs-row {
  display: flex;
}
</style>
