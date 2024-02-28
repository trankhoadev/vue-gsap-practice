<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

const arrowRef = ref(null);
const masterTL = gsap.timeline();
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

onMounted(() => {
    if (arrowRef.value) {
        masterTL.to(arrowRef.value, {
            y: 20,
            duration: .7,
            repeat: -1,
            yoyo: true,
        });
    }


    ScrollSmoother.create({
        smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
})

onUnmounted(() => {
    if (arrowRef.value) {
        gsap.killTweensOf(arrowRef.value)
    }
})
</script>

<template>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <div class="container">
                <span>
                    Scroll Down
                    <svg ref="arrowRef" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="48" d="m112 184l144 144l144-144" />
                    </svg>
                </span>

            </div>

            <div class="wrapper-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, minima! Eveniet minus dolorem tenetur
                    quas in
                    impedit ad corporis fugit iste? Molestiae, ut? Minus quasi ducimus iusto temporibus molestiae
                    consequuntur.</p>
            </div>

            <div class="wrapper-3">

            </div>
        </div>
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
        font-size: 2.3em;
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
}

.wrapper-2 {
    background-image: url('https://i.pinimg.com/originals/84/bb/80/84bb80a5e0ce779fca4c1f6a4d444987.jpg');
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    p {
        font-size: 1.3em;
        color: #fff;
        max-width: 70%;
        margin: 3em 0;

    }
}

.wrapper-3 {
    background-image: url('https://i.pinimg.com/originals/0d/5b/d6/0d5bd6abcbec43aec406e7ee9d76adf6.png');
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}
</style>