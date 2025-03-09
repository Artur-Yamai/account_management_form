<template>
  <select :value="type" @change="handleChange" class="form-row__control">
    <option v-for="value in RecordType" :key="value" :value="value">
      {{ value }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { RecordType } from "@/Types";

defineProps<{ type: RecordType }>();
const emits = defineEmits(["change"]);

function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emits("change", target.value);
}
</script>
