<template>
  <section>
    <TheHeader  />
    <TheHero />
    <AboutMe />
    <ThPortfolio />
    <TheContact />
    <TheFooter />
  </section>

</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/pages/TheMain.vue';
import AboutMe from './components/pages/AboutMe.vue';
import ThPortfolio from './components/pages/ThePortfolio.vue';
import TheContact from './components/pages/TheContact.vue';
import TheFooter from './components/TheFooter.vue';

export default {

  components: {
    TheHeader,
    TheHero,
    AboutMe,
    ThPortfolio,
    TheContact,
    TheFooter,
  },
  mounted: function() {
    console.log(this.$refs['section'])
  }
} 
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

*::before,
*::after,
* {
  font-family: 'Inter', Jost, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
html {
  scroll-behavior: smooth;
}

body {
  background-color:#f6f5f5;
  overflow-x: hidden;
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

.page-title {
  position: relative;
  text-align: center;
  padding-top: 40px;
  font-size: 3rem;
  font-weight: 700;
  color: #383838;
}
.page-title span {
  color: #4372e4;
}

.sub-title {
  color: #383838;
  font-size: 1.2rem;
  padding: 15px 0;
  text-align: center;
}


</style>
