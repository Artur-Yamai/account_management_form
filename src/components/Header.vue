<template>
  <div class="header">
    <h1>Учетные записи</h1>
    <button @click="store.addAccount" class="btn btn-primary">+</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
const store = useStore();
</script>

<style>
.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.75rem;
  margin-bottom: 2rem;
}
</style>
