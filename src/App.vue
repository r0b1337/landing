<template>
  <div>
    <Section
      class="bg-gradient-to-r from-yellow-300 bg-red-300"
    >
      <div class="left flex flex-col">
        <span class="text-8xl lg:text-9xl font-bold">r0b1337</span>
        <span class="text-3xl">Full Stack JS Developer</span>
      </div>

      <Card>
        <img
          class="h-40"
          src="/javascript.svg"
          alt="Javascript logo"
        >
      </Card>

      <img
        class="absolute bottom-5 h-10 animate-pulse cursor-pointer"
        src="/scroll.svg"
        alt="Scroll"
        @click="scrollTo('neocity')"
      >
    </Section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScrollReveal from 'scrollreveal';

export default defineComponent({
  name: 'App',
  mounted() {
    ScrollReveal({
      interval: 50,
      delay: 100,
      easing: 'ease-out',
    }).reveal('span', {
      opacity: 0,
      duration: 500,
      distance: '10px',
    });

    ScrollReveal().reveal('.card', {
      opacity: 0,
      rotate: { z: 100 },
      scale: 0,
      easing: 'cubic-bezier(.75,-0.5,0,1.45)',
    });
  },
  methods: {
    scrollTo: function (hash: string) {
      location.hash = hash;
    },
  },
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
