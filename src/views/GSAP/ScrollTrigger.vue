
<script setup>
/* Setup gsap */
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* declare variable */
const masterTL = gsap.timeline();
const firstPic = ref(null);
const secondPic = ref(null);
const thirdPic = ref(null);
const forthPic = ref(null);
const scroll = ref(null);
let firstTL, secondTL;

const defineAnimations = () => {
    if (firstTL) {
        firstTL.kill();
    }
    if (secondTL) {
        secondTL.kill();
    }

    firstTL = gsap.timeline();
    secondTL = gsap.timeline();

    firstTL.to(firstPic.value, {
        x: -200,
        duration: 3,
        rotate: 360,
    })

    secondTL.to(secondPic.value, {
        opacity: 0,
        duration: 2,
    })
}

const playAnimation = () => {
    console.log('start');
    if (!firstTL || !secondTL) {
        defineAnimations();
    }

    masterTL.add(firstTL, secondTL);
    masterTL.play();
}

const reverseAnimation = () => {
    console.log('end');
    firstTL.reverse();
    secondTL.reverse();
}

onMounted(() => {
    /* Scroll trigger animation */
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(scroll.value, {
        x: 500,
        duration: 5,
        rotation: 360,
        opacity: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: scroll.value,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: "restart pause reverse pause",
            scrub: 2,
            markers: true
        }
    })
})
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div ref="firstPic">
                <a-image :width="100" src="https://i.pinimg.com/564x/1f/48/0f/1f480ff09b8340d7b114347ed0d5ab00.jpg"
                    :preview=false></a-image>
            </div>

            <div ref="secondPic">
                <a-image src="https://i.pinimg.com/564x/c3/a9/c4/c3a9c4eef064d73b6f2a380304726f20.jpg"
                    :width="150"></a-image>
            </div>

            <div ref="thirdPic">
                <a-image :width=200 src="https://i.pinimg.com/736x/a4/ce/00/a4ce0034d5312ae8ee4bfca5e492444f.jpg"
                    alt="That is just first picture" :preview=false></a-image>
            </div>

            <div ref="forthPic">
                <a-image id="forth-pic" src="https://i.pinimg.com/736x/ec/c2/7c/ecc27c62a4e5bc87e76f52237f325940.jpg"
                    :width=200></a-image>
            </div>
        </div>

        <div>
            <a-button type="primary" style="margin-top: 2em;" @click="playAnimation">
                Start action
            </a-button>

            <a-button type="primary" style="margin-top: 2em;" @click="reverseAnimation">
                Reverse action
            </a-button>
        </div>

        <div ref="scroll" style="margin-top: 1000px; opacity: 0;">
            <a-image :width="100" src="https://i.pinimg.com/564x/1f/48/0f/1f480ff09b8340d7b114347ed0d5ab00.jpg"></a-image>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.wrapper {
    height: 300vh;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;

    .container {
        width: 50vw;
        display: flex;
        flex-direction: flex;
        justify-content: space-between;
        margin: 0 auto;
    }

    button {
        margin: 3em;
    }
}
</style>