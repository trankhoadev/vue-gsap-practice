<template>
    <div class="container">
      <p ref="textAnimation" class="text-animation"></p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { TextPlugin } from 'gsap/TextPlugin';
  
  gsap.registerPlugin(TextPlugin);
  
  const textAnimation = ref(null);
  const masterTl = gsap.timeline();
  
  onMounted(() => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit in harum officiis perspiciatis natus praesentium non iure, dicta tenetur voluptas laborum maxime fugit quidem. Autem sunt maiores expedita molestiae atque.";
  
    // Create a timeline for the typing animation
    const typingTl = gsap.timeline({ repeat: -1 });
  
    // Typing effect: write out the text with stagger effect
    typingTl.to(textAnimation.value, {
      text: text,
      duration: 2, // Adjust duration for smoother typing
      ease: "power1.inOut", // Use ease for smoother animation
      stagger: 0.05, // Stagger the animation of individual characters
    });
  
    // Typing effect: delete the text with smoother easing
    typingTl.to(textAnimation.value, {
      text: "",
      duration: 7,
      ease: "power1.inOut", // Use smoother easing for deletion
    });
  
    // Add the typing animation timeline to the master timeline
    masterTl.add(typingTl);
  });
  </script>
  
  <style scoped>
  .container {
    background-image: url('https://i.pinimg.com/originals/12/9a/d5/129ad53211bc03e77f7accf38c62f0f8.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .text-animation {
    color: #ffffff;
    font-size: 2em;
    width: 60%;
    line-height: 100px;
  }
  </style>
  