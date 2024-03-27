<script setup>
/* Build in VueJs */

/* Pinia store */
import { useBackendLoginStore } from '@/stores/authentication/BackendLoginStore'

const storeBackendLogin = useBackendLoginStore()
</script>

<template>
  <div class="container">
    <a-form
      :model="storeBackendLogin.formState"
      name="basic form"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item></a-form-item>
      <a-button type="primary">Login</a-button>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
