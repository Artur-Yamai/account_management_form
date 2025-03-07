<template>
  <input
    :value="labelText"
    placeholder="Метка (необязательно)"
    class="form-row__control"
    @blur="handleBlur"
    :maxlength="maxLength"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Label } from "@/store";

const props = defineProps<{ label: Label[]; maxLength?: number }>();
const emits = defineEmits(["change"]);

const labelText = computed(() =>
  props.label.map((item) => item.text.trim()).join("; ")
);

function handleBlur(event: Event) {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  if (!value) return emits("change", []);

  const labels: Label[] = value
    .split(";")
    .map((text) => ({ text: text.trim() }));

  emits("change", labels);
}
</script>
