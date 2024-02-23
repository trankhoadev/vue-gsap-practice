<script setup>
</script>

<template>
  <div>
    <router-link to="lesson_1">Lesson 1</router-link>
    <router-link class="ant-mt-24" to="/demo">Demo Page</router-link>
  </div>
</template>


<style lang="scss" scoped>
body {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>