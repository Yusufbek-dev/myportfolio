<template>
  <TheHeader />
  <TheHero />
</template>

<script>
import TheHeader from './components/TheHeader';
import TheHero from './components/pages/TheMain';

export default {
  components: {
    TheHeader,
    TheHero,
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



.is-typed {
  font-family: 'Monaco';
}
.is-typed span.typed {
  color: #4372e4;
}
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  margin-left: 5px;
  background-color: #4372e4;
  animation: blink 1s infinite;
}
.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: #4372e4;
  animation: blink 1s infinite;
}
.is-typed span.cursor.typing {
  animation: none;
}
@keyframes blink {
  49% {
    background-color: #4372e4;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
