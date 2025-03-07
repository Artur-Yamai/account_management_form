<template>
  <div class="form-row">
    <LabelInput
      :label="account.label"
      :maxLength="50"
      @change="handleChange($event, 'label')"
    />
    <TypeSelect :type="account.type" @change="handleTypeChange" />
    <TextInput
      placeholder="Логин"
      :value="account.login"
      :maxLength="100"
      :required="true"
      @change="handleChange($event, 'login')"
    />

    <TextInput
      v-if="account.type === RecordType.local"
      placeholder="Пароль"
      type="password"
      :value="account.password"
      :required="true"
      @change="handleChange($event, 'password')"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import LabelInput from "./LabelInput.vue";
import TypeSelect from "./TypeSelect.vue";
import TextInput from "./TextInput.vue";
import { Account, RecordType, Label } from "@/store";

const emits = defineEmits(["changeValue"]);
const props = defineProps<{ account: Account }>();

let savedPassword = props.account.password;

function handleTypeChange(value: RecordType) {
  const account = { ...props.account, type: value };

  if (value === RecordType.ldap) {
    savedPassword = account.password;
    account.password = null;
  } else {
    account.password = savedPassword;
  }
  emits("changeValue", account);
}

function handleChange(value: string | Label, key: keyof Account) {
  emits("changeValue", { ...props.account, [key]: value });
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

.form-row__control--dirty:invalid {
  border: 1px solid orangered;
}
</style>
