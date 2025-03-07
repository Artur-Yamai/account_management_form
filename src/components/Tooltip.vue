<template>
  <div class="tool-tip">
    <question />
    Для указания нескольких меток для одной пары логин/парль испольлзуйте
    разделитель ";"
  </div>
</template>

<script setup lang="ts">
import question from "@/assets/question.svg";
</script>

<style>
.tool-tip {
  padding: 0.5rem;
  border-radius: 4px;
  color: rgb(75, 75, 75);
  background-color: #eef4fa;
}
</style>
