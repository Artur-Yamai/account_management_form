<template>
  <div class="form-row">
    <TextBox
      placeholder="Метка (необязательно)"
      :value="label"
      :maxLength="50"
      @change="handleLabelChange"
    />
    <SelectBox :type="account.type" @change="handleTypeChange" />
    <TextBox
      placeholder="Логин"
      :value="account.login"
      :maxLength="100"
      :required="true"
      @change="handleChange($event, 'login')"
    />

    <TextBox
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
import { defineProps, defineEmits, computed } from "vue";
import { LabelBox, SelectBox, TextBox } from "@/components";
import { Account, RecordType, Label } from "@/store";

const emits = defineEmits(["changeValue"]);
const props = defineProps<{ account: Account }>();

let savedPassword = props.account.password;

const label = computed(() =>
  props.account.label.map((item: Label) => item.text.trim()).join("; ")
);

function handleLabelChange(value: string) {
  const account = { ...props.account, label };

  account.label = value
    ? value.split(";").map((text) => ({ text: text.trim() }))
    : [];
  emits("changeValue", account);
}

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

function handleChange(value: string, key: keyof Account) {
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
