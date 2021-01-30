<template>
   <div class="view">
      <h1>Welcome!</h1>
      <router-link to="/game/c0ffee">Start</router-link>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

   name: 'Welcome',

});
</script>

<style scoped lang="scss">
.view {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 100vh;
}
</style>
