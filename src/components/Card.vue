<template>
  <div
    class="card bg-white text-2xl w-auto max-w-lg rounded-3xl text-left shadow-2xl p-10 font-bold"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: {
      type: String,
      default: '',
    },
  },
});
</script>
