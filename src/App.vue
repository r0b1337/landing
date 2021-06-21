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

    <Section
      id="neocity"
      class="bg-gradient-to-r from-blue-300 to-green-300"
    >
      <div class="left flex flex-col">
        <span class="text-3xl">Full Stack JS Developer at</span>
        <div>
          <span class="text-8xl lg:text-9xl font-extralight">Neo</span><span class="text-8xl lg:text-9xl font-bold">city</span>
        </div>
        <span class="text-2xl">for 2 years now</span>
        <span
          class="text-reveal text-left text-1xl max-w-xl mt-10 mb-2"
        >
          Ea dolore veniam incididunt ullamco in officia minim labore irure in anim Lorem. Excepteur nisi pariatur sit amet elit mollit dolor. Sit cupidatat irure mollit cillum deserunt.
          Amet ad dolor dolore excepteur sint dolor nisi pariatur reprehenderit sit veniam laborum nostrud. Elit ullamco ea elit consectetur. Id duis quis consectetur in voluptate. Ipsum sit reprehenderit labore ad minim nisi dolor anim fugiat elit laboris est nisi laborum. Officia nostrud fugiat irure ullamco ut duis. Est consequat culpa enim officia amet reprehenderit do tempor. Quis eu duis commodo dolore et dolore amet amet magna labore qui.
        </span>
      </div>

      <Card>
        <img
          class="h-40"
          src="/neocity.svg"
          alt="Neocity logo"
        >
      </Card>
    </Section>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

// animations
import GSAP from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import SplitText from './utils/split-text';

GSAP.registerPlugin(ScrollTrigger);
GSAP.registerPlugin(TextPlugin);

export default defineComponent({
  name: 'App',
  mounted() {
    const NeocityTL = GSAP.timeline({
      scrollTrigger: {
        trigger: '.text-reveal',
        start: 'top bottom',
        end: 'bottom bottom',
      },
    });

    const texts = GSAP.utils.toArray('.text-reveal') as Element[];

    texts.forEach((text: Element) => {
      SplitText(text);

      NeocityTL.from(text.children, {
        opacity: 0,
        y: -10,
        duration: 1,
        stagger: 0.01,
        ease: 'elastic',
      });
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
