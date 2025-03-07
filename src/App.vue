<template>
  <Header />
  <Tooltip />
  <AccountForm />
</template>

<script setup lang="ts">
import { Header, Tooltip, AccountForm } from "./components";
import { useStore } from "@/store";

const store = useStore();
store.initialize();
</script>

<style>
#app {
  max-width: 1080px;
  margin: 0 auto;
}
</style>
