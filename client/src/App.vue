<template>
   <div>
      <Welcome></Welcome>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from './views/Welcome.vue';

export default defineComponent({

   name: 'App',

   components: {
      Welcome,
   },

});
</script>

<style lang="scss">
html, body {
   padding: 0;
   margin: 0;
}
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   color: #263238;
   font-size: 2em;
   min-height: 100vh;
}
</style>
