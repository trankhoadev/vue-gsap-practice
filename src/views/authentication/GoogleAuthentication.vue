<template>
    <button @click="handleGoogleLogin">Login with Google</button>
</template>

<script>
import { initGoogleAuth, signInWithGoogle } from '@/utils/helpers'
export default {
    methods: {
        async handleGoogleLogin() {
            try {
                const auth2 = await initGoogleAuth('956947834992-i3q47p6quu2n40bo1789m17j7je07sij.apps.googleusercontent.com', 'trankhoadev@gmail.com');
                const user = await signInWithGoogle(auth2);
                console.log('Logged in with Google:', user.getBasicProfile().getName());
                // Handle successful login
            } catch (error) {
                console.error('Google login failed:', error);
                // Handle login error
            }
        }
    }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>