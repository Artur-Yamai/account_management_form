<template>
  <div class="form-row">
    <input
      :value="label"
      placeholder="Метка (необязательно)"
      class="form-row__control"
      @blur="changeValue($event, 'label')"
    />
    <select
      :value="account.type"
      @change="changeValue($event, 'type')"
      class="form-row__control"
    >
      <option value="Локальная">Локальная</option>
      <option value="LDAP">LDAP</option>
    </select>
    <input
      :value="account.login"
      placeholder="Логин"
      @blur="changeValue($event, 'login')"
      class="form-row__control"
    />
    <input
      v-if="account.type === 'Локальная'"
      :value="account.password"
      type="password"
      placeholder="Пароль"
      @blur="changeValue($event, 'password')"
      class="form-row__control"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { Account, RecordType } from "@/store";

const emits = defineEmits(["changeValue"]);
const props = defineProps<{ account: Account }>();

const label = computed(() =>
  props.account.label.map((item) => item.text).join("; ")
);

function changeValue(e: Event, key: keyof Account) {
  const target = e.target as HTMLInputElement;
  let value: string = target.value;
  const account = { ...props.account };

  if (key === "label") {
    account.label = value.split(";").map((text) => ({ text: text.trim() }));
  } else if (key === "type") {
    account[key] = target.value as RecordType;
  } else {
    account[key] = value;
  }

  emits("changeValue", account);
}
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
