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
          class="text-left text-1xl max-w-xl mt-10 mb-2"
        >
          Et ea commodo proident non nisi labore ipsum nisi veniam fugiat id. Velit sunt laboris exercitation amet laborum incididunt elit laboris elit in minim nulla Lorem. Esse in nulla amet deserunt ex dolor velit amet labore amet in id. Ea nulla qui ut ut nulla nostrud. Commodo esse labore reprehenderit ex nisi sunt nostrud commodo consequat.

          Ipsum laborum laborum ipsum minim adipisicing amet. Exercitation aliqua quis id quis tempor. Dolor amet do enim officia anim. Quis veniam aute excepteur elit.

          Esse sit cupidatat duis nisi excepteur exercitation officia eiusmod minim quis fugiat ipsum. Fugiat dolore culpa quis velit aliqua deserunt magna aliquip qui labore ullamco laboris deserunt voluptate. Lorem adipisicing do aliqua id ullamco. Pariatur id sint qui in consectetur id occaecat qui ad duis deserunt ipsum laboris.

          Nisi reprehenderit minim reprehenderit magna id laboris nisi commodo sunt ex deserunt qui. Exercitation veniam aliqua velit Lorem est et esse sit mollit commodo irure culpa exercitation magna. Elit officia qui laboris voluptate aliquip tempor est. Consequat commodo est veniam Lorem cillum adipisicing veniam minim pariatur est tempor nostrud veniam minim.

          Reprehenderit deserunt qui commodo reprehenderit magna ex duis. Cupidatat sit pariatur veniam sunt ipsum minim aliqua occaecat esse veniam. Sunt Lorem sint est aliqua voluptate laborum amet. Id eiusmod cillum anim mollit culpa excepteur nisi sit. Duis velit et eiusmod sit nostrud ut. Est exercitation incididunt non est non. Sint consequat ullamco consectetur voluptate laborum ipsum tempor do sint.

          Consectetur Lorem veniam consequat anim voluptate exercitation eiusmod reprehenderit irure Lorem ut aliqua aliquip id. Dolore consequat velit nulla laboris eu velit excepteur laboris quis ad eiusmod occaecat dolore. Consequat ut amet voluptate amet.

          Dolor magna voluptate pariatur veniam deserunt proident deserunt enim eiusmod sit deserunt. Culpa mollit qui deserunt ex culpa qui fugiat est cillum mollit. Labore culpa qui labore nisi aliquip. Nostrud eiusmod dolor sint deserunt officia do id ad esse irure enim. Dolore voluptate officia do do laboris reprehenderit id ex fugiat aliqua magna do.

          Laboris amet enim excepteur culpa irure aliquip sint eu mollit. In minim consequat sunt ad reprehenderit ex. Voluptate quis ut occaecat commodo sunt.

          Fugiat commodo dolor irure occaecat. Est duis reprehenderit aliquip veniam sint adipisicing id ea ex do qui. Consectetur id sit enim consectetur non commodo quis nostrud veniam pariatur esse fugiat pariatur deserunt. Duis exercitation esse commodo excepteur id sunt tempor qui cillum non. Id Lorem et esse ut incididunt dolore enim cillum. Aute est enim tempor culpa do.
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  mounted() {
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
