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
    <div
      id="skills"
      class="bg-gradient-to-r from-red-300 to-blue-300 p-20 h-auto"
    >
      <div
        class="pin relative h-screen w-screen"
        style="perspective: 800px;"
      >
        <Card>
          <img
            class="h-40"
            src="/vue.svg"
            alt="Vue logo"
          >
        </Card>
        <Card>
          <img
            class="h-40"
            src="/react.svg"
            alt="React logo"
          >
        </Card>
        <Card>
          <img
            class="h-40"
            src="/angular.svg"
            alt="Angular logo"
          >
        </Card>
        <Card>
          <img
            class="h-40"
            src="/ionic.svg"
            alt="Ionic logo"
          >
        </Card>
      </div>

      <div
        class="flex flex-col w-full text-white"
        style="row-gap: 100vh;"
      >
        <span class="text-reveal">Sint voluptate est elit aute deserunt et exercitation esse consectetur anim ullamco reprehenderit laboris. Exercitation amet dolore voluptate amet duis incididunt excepteur ipsum ipsum. Sunt non dolor exercitation veniam consectetur ipsum exercitation laboris mollit aliquip ea. Labore laborum aute magna in laborum. Reprehenderit in excepteur et reprehenderit est id veniam esse id anim aute. Pariatur aute labore voluptate Lorem ut cupidatat consequat adipisicing in fugiat magna minim ad eu. Eu dolor excepteur ad et aliquip.</span>
        <span class="text-reveal">Sint voluptate est elit aute deserunt et exercitation esse consectetur anim ullamco reprehenderit laboris. Exercitation amet dolore voluptate amet duis incididunt excepteur ipsum ipsum. Sunt non dolor exercitation veniam consectetur ipsum exercitation laboris mollit aliquip ea. Labore laborum aute magna in laborum. Reprehenderit in excepteur et reprehenderit est id veniam esse id anim aute. Pariatur aute labore voluptate Lorem ut cupidatat consequat adipisicing in fugiat magna minim ad eu. Eu dolor excepteur ad et aliquip.</span>
        <span class="text-reveal">Sint voluptate est elit aute deserunt et exercitation esse consectetur anim ullamco reprehenderit laboris. Exercitation amet dolore voluptate amet duis incididunt excepteur ipsum ipsum. Sunt non dolor exercitation veniam consectetur ipsum exercitation laboris mollit aliquip ea. Labore laborum aute magna in laborum. Reprehenderit in excepteur et reprehenderit est id veniam esse id anim aute. Pariatur aute labore voluptate Lorem ut cupidatat consequat adipisicing in fugiat magna minim ad eu. Eu dolor excepteur ad et aliquip.</span>
        <span class="text-reveal">Sint voluptate est elit aute deserunt et exercitation esse consectetur anim ullamco reprehenderit laboris. Exercitation amet dolore voluptate amet duis incididunt excepteur ipsum ipsum. Sunt non dolor exercitation veniam consectetur ipsum exercitation laboris mollit aliquip ea. Labore laborum aute magna in laborum. Reprehenderit in excepteur et reprehenderit est id veniam esse id anim aute. Pariatur aute labore voluptate Lorem ut cupidatat consequat adipisicing in fugiat magna minim ad eu. Eu dolor excepteur ad et aliquip.</span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

// animations
import GSAP from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import SplitText from './utils/split-text';
import isMobile from './utils/is-mobile';

GSAP.registerPlugin(ScrollTrigger);
GSAP.registerPlugin(TextPlugin);

export default defineComponent({
  name: 'App',
  data() {
    return {
      mobile: isMobile(),
    };
  },
  mounted() {
    window.onresize = () => this.mobile = isMobile();

    const texts = GSAP.utils.toArray('.text-reveal') as Element[];

    texts.forEach((text: Element) => {
      SplitText(text);

      GSAP.from(text.children, {
        opacity: 0,
        y: -10,
        duration: 1,
        stagger: 0.01,
        ease: 'elastic',
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'bottom bottom',
        },
      });
    });

    ScrollTrigger.create({
      trigger: '#skills',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.pin',
      pinSpacing: false,
    });

    const spans = GSAP.utils.toArray('#skills span');
    const cards = GSAP.utils.toArray('#skills .card') as Element[];

    spans.forEach((span: any, i: number) => {
      const card =  cards[i];
      const prev = cards[i - 1];
      const next = cards[i + 1];
      const odd = !!(i % 2);
      const from = { rotateY: 0, left: '50%', opacity: 0, scale: 1 };
      const to = { rotateY: 20 * (!odd ? 1 : -1), left: !odd ? '25%' : '75%', opacity: 1, duration: 1, ease: 'elastic.out(0.5, 0.4)', overwrite: true };

      GSAP.set(card, {opacity: 0, translateY: '-50%'});

      const onEnter = () => {
        GSAP.fromTo(card, from, to);

        if (prev) GSAP.fromTo(
          prev,
          { rotateY: 20 * (odd ? 1 : -1), left: odd ? '25%' : '75%', opacity: 1, duration: 1 },
          { scale: 0, opacity: 0, duration: 1, ease: 'elastic.out(0.5, 0.4)', overwrite: true },
        );
      };

      const onEnterBack = () => {
        GSAP.fromTo(card, from, to);

        if (next) GSAP.fromTo(
          next,
          { rotateY: 20 * (odd ? 1 : -1), left: odd ? '25%' : '75%', opacity: 1, duration: 1, ease: 'elastic.out(0.5, 0.4)' },
          { scale: 0, opacity: 0, duration: 1, ease: 'elastic.out(0.5, 0.4)', overwrite: true },
        );
      };

      const onLeaveBack = () => {
        if (i !== 0) return;

        GSAP.fromTo(
          card,
          { rotateY: 20 * (!odd ? 1 : -1), left: !odd ? '25%' : '75%', opacity: 1, duration: 1 },
          { rotateY: 0, left: '50%', opacity: 0, scale: 1, ease: 'elastic.out(0.5, 0.4)', overwrite: true },
        );
      };

      ScrollTrigger.create({
        trigger: span,
        start: '50% bottom',
        onEnter,
        onEnterBack,
        onLeaveBack,
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

<style lang="scss">
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

.pin-spacer { width: 100% !important; }
.pin {
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  max-width: unset !important;
  max-height: unset !important;
  pointer-events: none;

  > * {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
  }
}

#skills {
  span { @apply max-w-lg font-bold; }
  span:nth-child(2n+1) {
    align-self: flex-end;
  }
}
</style>
