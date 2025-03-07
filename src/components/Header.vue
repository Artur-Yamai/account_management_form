<template>
  <div class="header">
    <h1>Главный заголовок страницы</h1>
    <button @click="addAccount" class="btn btn-primary">+</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";

const store = useStore();

const addAccount = () => store.addAccount();
addAccount();
</script>

<style>
.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.75rem;
}
</style>
