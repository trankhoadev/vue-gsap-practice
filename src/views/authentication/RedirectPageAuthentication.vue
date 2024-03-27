<script setup>
</script>

<template>
  <div class="container">
    <router-link to="/login/facebook"><a-button type="primary">Login by Facebook</a-button></router-link>
    <router-link to="/login/google"><a-button type="primary">Login by Google</a-button></router-link>
    <router-link to="/login/backend-jwt"><a-button type="primary">Backend Login JWT</a-button></router-link>
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