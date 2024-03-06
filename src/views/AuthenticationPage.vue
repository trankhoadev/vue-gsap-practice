<template>
    <a-form @submit="handleSubmit" :form="form" class="login-form">
      <a-form-item label="Username" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
        <a-input v-model="username" placeholder="Username"></a-input>
      </a-form-item>
      <a-form-item label="Password" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
        <a-input-password v-model="password" placeholder="Password"></a-input-password>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button type="primary" html-type="submit" class="login-form-button">Login</a-button>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button type="primary" @click="loginWithFacebook">Login with Facebook</a-button>
      </a-form-item>
    </a-form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { Form, Input, Button, message } from 'ant-design-vue';
  
  // Replace these values with your actual Facebook App ID and Redirect URI
  const FACEBOOK_APP_ID = '411907374712785';
  const REDIRECT_URI = 'http://localhost:5173/';
  
  export default {
    components: {
      'a-form': Form,
      'a-form-item': Form.Item,
      'a-input': Input,
      'a-input-password': Input.Password,
      'a-button': Button,
    },
    setup() {
      const form = Form.useForm()[0];
      const username = ref('');
      const password = ref('');
  
      const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            message.success('Login successful!');
          }
        });
      };
  
      const loginWithFacebook = () => {
        const facebookLoginUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${FACEBOOK_APP_ID}&redirect_uri=${REDIRECT_URI}&scope=email`;
        window.location.href = facebookLoginUrl;
      };
  
      return {
        form,
        username,
        password,
        handleSubmit,
        loginWithFacebook,
      };
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 300px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .login-form-button {
    width: 100%;
  }
  </style>
  