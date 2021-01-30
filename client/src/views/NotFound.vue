<template>
   <div class="view">
      <h1>404!</h1>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

   name: 'NotFound',

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
