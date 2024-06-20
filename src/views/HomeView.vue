<script setup>
</script>

<template>
  <div class="container">
    <router-link to="/gsap"><a-button type="primary">GSAP</a-button></router-link>
    <router-link to="/threejs"><a-button type="primary">ThreeJs</a-button></router-link>
    <router-link to="/login"><a-button type="primary">Authentication</a-button></router-link>
    <router-link to="/work-flow"><a-button type="primary">Workflow</a-button></router-link>
    <router-link class="ant-mt-24" to="/demo"><a-button type="primary">Demo Page</a-button></router-link>
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