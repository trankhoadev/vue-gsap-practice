<script setup>
</script>


<template>
    <div class="container">
        <div class="background">
            <router-link to="/lesson_1">Helo may be</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
body {
    width: 100vw;
    height: 100vh;
}

.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .background {
        background-image: url("https://s3.us-west-1.wasabisys.com/ft-backgrounds/-mreflowMatt_Wolfe_a_colorful_digital_background_477e314c-c8c2-4491-88d5-1194cd417006.jpeg");
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 80vw;
        height: 80vh;
    }
}
</style>
