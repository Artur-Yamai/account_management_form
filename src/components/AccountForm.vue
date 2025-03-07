<template>
  <form class="account-form">
    <InputsRow
      v-for="account in accounts"
      :key="account.id"
      :account="account"
      @remove="removeAccount"
    />
  </form>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import InputsRow from "./InputsRow";

const accounts = computed(() => store.accounts);

const store = useStore();

const removeAccount = (id: string) => store.removeAccount(id);
</script>

<style scoped>
.account-form {
  padding: 0.5rem;
}
</style>
