<template>
   <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

   name: 'App',

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
   color: #263238;
   font-size: 2em;
}
</style>
