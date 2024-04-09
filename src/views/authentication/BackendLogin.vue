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
      v-if="!storeBackendLogin.isShowCreateAccountForm"
      style="min-width: 20vw"
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
        :rules="[
          { required: true, message: 'Please input your password!' },
          {
            min: 6,
            message: 'Please enter at least 6 characters!'
          }
        ]"
      >
        <template #label>
          <span class="text-white">Password</span>
        </template>
        <a-input-password v-model:value="storeBackendLogin.formState.passWord"></a-input-password>
      </a-form-item>

      <div
        class="text-white"
        style="display: flex; justify-content: space-between; align-items: center"
      >
        Don't have account ?

        <a-button @click="storeBackendLogin.isShowCreateAccountForm = true" type="link"
          >sign up now</a-button
        >
      </div>

      <a-form-item
        style="display: flex; justify-content: center; align-items: center; padding: 2em 0"
      >
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>

    <a-form
      v-else
      :model="storeBackendLogin.formState"
      name="basic form"
      :label-col="{ span: 8, class: 'text-white' }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      style="min-width: 20vw"
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
        :rules="[
          { required: true, message: 'Please input your password!' },
          {
            min: 6,
            message: 'Please enter at least 6 characters!'
          }
        ]"
      >
        <template #label>
          <span class="text-white">Password</span>
        </template>
        <a-input-password v-model:value="storeBackendLogin.formState.passWord"></a-input-password>
      </a-form-item>

      <a-form-item
        name="passWord"
        :rules="[
          { required: true, message: 'Please input your rePassword!' },
          {
            min: 6,
            message: 'Please enter at least 6 characters!'
          },
          {}
        ]"
      >
        <template #label>
          <span class="text-white">RePassword</span>
        </template>
        <a-input-password v-model:value="storeBackendLogin.formState.rePassWord"></a-input-password>
      </a-form-item>

      <a-space
        class="text-white"
        direction="vertical"
        style="display: flex; align-items: flex-end"
        @click="storeBackendLogin.isShowCreateAccountForm = false"
      >
        <a-button type="link">Back to login</a-button>
      </a-space>

      <a-form-item
        style="display: flex; justify-content: center; align-items: center; padding: 2em 0"
      >
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
