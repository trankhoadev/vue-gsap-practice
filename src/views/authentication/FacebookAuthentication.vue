<template>
  <div class="facebook-login">
    <button @click="buttonClicked">
      <i class="spinner" v-if="isWorking"></i>
      <img :src="icon" v-if="!isWorking">{{ getButtonText }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, defineProps, defineEmits } from 'vue';
import {
  loadFbSdk,
  getFbLoginStatus,
  fbLogout,
  fbLogin
} from '@/config/facebook_oAuth';

const props = defineProps({
  appId: { type: String, required: true, default: '374376776049353' },
  version: { type: String, default: 'v19.0' },
  logoutLabel: { type: String, default: 'Log out from Facebook' },
  loginLabel: { type: String, default: 'Log in to Facebook' },
  loginOptions: {
    type: Object,
    default: () => ({ scope: 'email' })
  }
});

const emits = defineEmits(['click', 'login', 'logout', 'sdk-loaded']);

const isWorking = ref(false);
const isConnected = ref(false);
const icon = './icon.png';

onMounted(() => {
  isWorking.value = true;
  loadFbSdk(props.appId, props.version)
    .then(getFbLoginStatus)
    .then(response => {
      if (response.status === 'connected') {
        isConnected.value = true;
      }
      isWorking.value = false;
      emits('sdk-loaded', { isConnected: isConnected.value, FB: window.FB });
    });
});

const getButtonText = computed(() => {
  switch (isConnected.value) {
    case true:
      return props.logoutLabel;
    case false:
      return props.loginLabel;
    default:
      return 'this is default';
  }
});

const buttonClicked = () => {
  emits('click');
  if (isConnected.value) {
    logout();
  } else {
    login();
  }
};

const login = () => {
  isWorking.value = true;
  fbLogin(props.loginOptions)
    .then(response => {
      isConnected.value = response.status === 'connected';
      isWorking.value = false;
      emits('login', { response, FB: window.FB });
    });
};

const logout = () => {
  isWorking.value = true;
  fbLogout()
    .then(response => {
      isWorking.value = false;
      isConnected.value = false;
      emits('logout', response);
    });
};
</script>

<style scoped>
.facebook-login {
  box-sizing: border-box;
}

.facebook-login * {
  box-sizing: inherit;
}

.facebook-login button {
  border: none;
  color: #fff;
  position: relative;
  line-height: 34px;
  min-width: 225px;
  padding: 0 15px 0px 46px;
  background-image: linear-gradient(#4c69ba, #3b55a0);
}

.facebook-login .spinner {
  left: 5px;
  width: 30px;
  height: 90%;
  display: block;
  border-radius: 50%;
  position: absolute;
  border: 5px solid #f3f3f3;
  border-top-color: #3498db;
  animation: facebook-login-spin 2s linear infinite;
}

.facebook-login img {
  position: absolute;
  top: 3px;
  left: 10px;
  width: 30px;
}

@keyframes facebook-login-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
