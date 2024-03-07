<script setup>
</script>

<template>
  <div class="container">
    <router-link to="/gsap/lesson-1"><a-button type="primary">Lesson 1</a-button></router-link>
    <router-link to="/gsap/scroll-trigger"><a-button type="primary">Stroll Trigger</a-button></router-link>
    <router-link to="/gsap/scroll-smoother"><a-button type="primary">Stroll Smoother</a-button></router-link>
    <router-link to="/gsap/split-text"><a-button type="primary">Split Text</a-button></router-link>
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

.container {
  width: 100vw;
  height: 100vh;
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

button {
  min-width: 150px;
  margin: 1em 0;
}
</style>