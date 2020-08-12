<template>
  <div class="app">
    <img class="app__background"
      srcset="./assets/background-sm.jpg 800w, ./assets/background-md.jpg 1280w, ./assets/background-lg.jpg 1920w"
      sizes="(max-width: 600px) 800px, (max-width: 1100px) 1280px, 1920px" src="./assets/background-lg.jpg">
    <Menu />
    <component :is="page"></component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Menu from './components/Menu.vue';
import Details from './views/Details.vue';
import Education from './views/Education.vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      page: 'Details'
    }
  },
  components: {
    Menu,
    Details,
    Education
  }
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  width: 100%;
  height: 100vh;
  display: flex;

  &__background {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -100;
    object-fit: cover;
  }
}
</style>
