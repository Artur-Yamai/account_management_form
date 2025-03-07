<template>
  <input
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :class="styleClass"
    @blur="handleBlur"
    :maxlength="maxLength"
    :required="required"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";

defineProps<{
  value: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
}>();
const emits = defineEmits(["change"]);

const isDirty = ref(false);
const styleClass = computed(() => {
  const classes = ["form-row__control"];
  if (isDirty.value) classes.push("form-row__control--dirty");
  return classes.join(" ");
});

function handleBlur(event: Event) {
  isDirty.value = true;
  const target = event.target as HTMLInputElement;
  emits("change", target.value);
}
</script>
