<template>
  <div class="header-with-button">
    <h1>Главный заголовок страницы</h1>
    <button @click="addAccount" class="btn btn-primary">+</button>
  </div>
  <AccountForm />
</template>

<script setup lang="ts">
import { computed } from "vue";
import AccountForm from "./components/AccountForm.vue";
import { useStore } from "./store";

const store = useStore();

const accounts = computed(() => store.accounts);

const addAccount = () => store.addAccount();

addAccount();
</script>

<style>
#app {
  max-width: 1080px;
  margin: 0 auto;
}

.header-with-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.75rem;
}
</style>
