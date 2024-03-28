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
      :label-col="{ span: 8, class: 'text-white' }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item
        name="userName"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <template #label>
          <span class="text-white">Username</span>
        </template>
        <a-input v-model:value="storeBackendLogin.formState.userName"></a-input>
      </a-form-item>

      <a-form-item
        name="passWord"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <template #label>
          <span class="text-white">Password</span>
        </template>
        <a-input-password v-model:value="storeBackendLogin.formState.passWord"></a-input-password>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
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

.text-white {
  color: #ffffff;
}

.ant-form-item-label {
  color: #ffffff;
}
</style>
