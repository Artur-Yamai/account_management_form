<template>
  <div class="form-row">
    <input
      :value="account.label"
      placeholder="Метка (необязательно)"
      class="form-row__control"
    />
    <select :value="account.type" class="form-row__control">
      <option value="Локальная">Локальная</option>
      <option value="LDAP">LDAP</option>
    </select>
    <input
      :value="account.login"
      placeholder="Логин"
      class="form-row__control"
    />
    <input
      v-if="account.type === 'Локальная'"
      :value="account.password"
      type="password"
      placeholder="Пароль"
      class="form-row__control"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Account } from "@/store";

defineProps<{ account: Account }>();
</script>

<style>
.form-row {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}

.form-row__control {
  width: calc(100% / 4 - 4px);
}

.form-row__control:nth-child(3):last-child {
  width: calc(100% / 2 - 4px);
}
</style>
