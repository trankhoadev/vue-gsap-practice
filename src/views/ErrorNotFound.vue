<template>
    <div class="not-found">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/">Go to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    text-align: center;
  }
  
  h1 {
    font-size: 3em;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  
  router-link {
    color: #007bff;
    text-decoration: none;
    font-size: 1.2em;
    transition: color 0.3s ease;
  }
  
  router-link:hover {
    color: #0056b3;
  }
  </style>
  