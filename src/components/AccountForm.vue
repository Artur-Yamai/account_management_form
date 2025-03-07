<template>
  <form class="account-form">
    <div v-for="account in accounts" :key="account.id">
      <input :value="account.label" type="text" />
      <input :value="account.login" type="text" />
      <select :value="account.type">
        <option value="Локальная">Локальная</option>
        <option value="LDAP">LDAP</option>
      </select>
      <input :value="account.password" type="password" /><button
        class="btn btn-danger ms-2 text-white"
        @click="remove(account.id)"
      >
        <trashIcon />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import trashIcon from "@/assets/trash.svg";

const store = useStore();
const accounts = computed(() => store.accounts);
const remove = (id: string) => store.removeAccount(id);
</script>

<style scoped>
.account-form {
  padding: 0.5rem;
}
</style>
