<template>
  <div
    :class="`from-${startColor}-300 to-${endColor}-300`"
    class="w-screen bg-gradient-to-r text-white h-screen tracking-tighter flex flex-col md:flex-row justify-evenly items-center relative"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    startColor: {
      type: String,
      default: 'yellow',
    },
    endColor: {
      type: String,
      default: 'red',
    },
  },
});

</script>
