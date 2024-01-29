<template>
  <TheHeader />
  <TheMain />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/pages/TheMain.vue';

export default {
  components: {
    TheHeader,
    TheMain,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

*::before,
*::after,
* {
  font-family: Jost, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
</style>
