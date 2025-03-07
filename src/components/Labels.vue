<template>
  <div class="labels">
    <p>Метки</p>
    <p>Тип записи</p>
    <p>Логин</p>
    <p>Пароль</p>
  </div>
</template>

<script setup></script>

<style>
.labels {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 50px);
  margin-bottom: 4px;
}

.labels p {
  width: calc(100% / 4 - 4px);
  padding-left: 4px;
  margin: 0;
  color: rgb(75, 75, 75);
}
</style>
