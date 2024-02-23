<script setup>
import { gsap } from 'gsap';
const masterTL = gsap.timeline();

const play = () => {
    masterTL.add(sunTL());
    masterTL.add(pawTL());
    masterTL.add(dogTL());
    masterTL.play();
};

const reverse = () => {
    masterTL.reverse(); // Reverse the timeline to play the animation backwards
};

const sunTL = () => {
    const tl = gsap.timeline();
    tl.to("#tree", { opacity: 1, scale: 1, duration: 0.5, ease: "slow" }, "<.3");
    tl.to("#sun", { opacity: 1, scale: 1, duration: 0.5, ease: "slow" });

    return tl;
};

const pawTL = () => {
    const tl = gsap.timeline();
    tl.to(".first", { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" }, "<.3");
    tl.to(".second", { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" }, "<.3");
    tl.to(".third", { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" }, "<.3");
    return tl;
};

const dogTL = () => {
    const tl = gsap.timeline();
    tl.to("#dog", { opacity: 1, scale: 1, duration: 0.4, ease: "slow" });
    tl.to("#home", { opacity: 1, scale: 1, duration: 0.5, ease: "slow" }, "<.3");
    return tl;
};
</script>

<template>
    <div class="background">
        <div id="container">
            <img id="tree" src="https://i.pinimg.com/564x/c8/72/bd/c872bd0a302db290f5af8295e358e09b.jpg" alt="tree" />
            <img id="sun" src="https://i.pinimg.com/564x/9c/2e/0d/9c2e0de650b255700a847adb98b78ca2.jpg" alt="sun" />
            <img class="paw first" src="https://i.pinimg.com/564x/49/32/29/493229e8a52bf41449b7d454959184f9.jpg"
                alt="paw" />
            <img class="paw second" src="https://i.pinimg.com/564x/f8/41/67/f841676f8a86a292e933ebbea4c4af7b.jpg"
                alt="paw" />
            <img class="paw third" src="https://i.pinimg.com/564x/f0/dc/53/f0dc53cffa8cc16e2749a563fc1a4453.jpg"
                alt="paw" />
            <img id="dog" src="https://i.pinimg.com/564x/aa/f5/df/aaf5dff9508b94c4c4489faba99bcbfd.jpg" alt="dog" />
            <img id="home" src="https://i.pinimg.com/564x/5a/4c/90/5a4c9033d702254599843d7cb92640bb.jpg" alt="home" />
        </div>
        
        <div>
            <button class="button" @click="play">play</button>
            <button class="button" @click="reverse">reverse</button>
        </div>
    </div>
</template>
  
  
<style scoped>
.background {
    background-image: url("https://s3.us-west-1.wasabisys.com/ft-backgrounds/-mreflowMatt_Wolfe_a_colorful_digital_background_477e314c-c8c2-4491-88d5-1194cd417006.jpeg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#dog {
    height: 10em;
    width: 10em;
    opacity: 0;
    margin-top: 555px;
}

.paw {
    transform: scale(0);
    width: 5em;
    height: 5em;
    margin-top: auto;
}

#tree {
    height: 25em;
    width: 25em;
    opacity: 0;
    margin-top: 300px;
}

#sun {
    height: 10em;
    width: 10em;
    opacity: 0;
    margin-top: 160px;
}

#home {
    height: 15em;
    width: 15em;
    opacity: 0;
    margin-top: 415px;
}

#background {
    position: relative;
    width: 100%;
    height: 100%;
}

.button {
    width: 5em;
    height: 2em;
    margin: 0.5em;
    margin-left: 600px;
    border-radius: 5px;
    background: linear-gradient(to right, #16c0b0, #84cf6a);
    font-size: 1em;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
}
</style>
  