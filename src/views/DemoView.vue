<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const arrowRef = ref(null);
const masterTL = gsap.timeline();

onMounted(() => {
    if (arrowRef.value) {
        masterTL.to(arrowRef.value, {
            y: 20,
            duration: .7,
            repeat: -1,
            yoyo: true
        });
    }
})

onUnmounted(() => {
    if (arrowRef.value) {
        gsap.killTweensOf(arrowRef.value)
    }
})
</script>

<template>
    <div class="container">
        <span>
            Scroll Down
            <svg ref="arrowRef" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
                    d="m112 184l144 144l144-144" />
            </svg>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, minima! Eveniet minus dolorem tenetur quas in
            impedit ad corporis fugit iste? Molestiae, ut? Minus quasi ducimus iusto temporibus molestiae consequuntur.</p>

    </div>

    <div class="wrapper-2">

    </div>
</template>

<style lang="scss" scoped>
.container {
    background-image: url('https://i.pinimg.com/originals/9d/a3/bf/9da3bf2a02508cda70113bc073c87ad5.jpg');
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    span {
        color: #111;
        z-index: 1;
        font-weight: 600;
        font-size: 2em;
        letter-spacing: 1px;
        line-height: 30px;
        margin: 3em 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        svg {
            z-index: 1;
            margin-top: .3em;
            font-size: 1.3em;
        }
    }

    p {
        font-size: 1.2em;
        color: #fff;
    }
}

.wrapper-2 {
    background-image: url('https://i.pinimg.com/originals/84/bb/80/84bb80a5e0ce779fca4c1f6a4d444987.jpg');
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}
</style>