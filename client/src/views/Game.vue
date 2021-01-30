<template>
   <h1>Game!</h1>
   <p>{{ $route.params.id }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

   name: 'Game',

});
</script>

<style scoped lang="scss">
</style>
