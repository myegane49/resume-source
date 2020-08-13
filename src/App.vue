<template>
  <div class="app">
    <img class="app__background"
      srcset="./assets/images/background-sm.jpg 800w, ./assets/images/background-md.jpg 1280w, ./assets/images/background-lg.jpg 1920w"
      sizes="(max-width: 600px) 800px, (max-width: 1000px) 1280px, 1920px" src="./assets/images/background-lg.jpg">
    <app-menu @sectionChange="section = 'app-' + $event" class="app__menu" />
    <component class="app__section" :is="section"></component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Menu from './components/Menu.vue';
import Details from './views/Details.vue';
import Education from './views/Education.vue';
import Portfolio from './views/Portfolio.vue';
import Skills from './views/Skills.vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      section: 'app-details',
      lang: 'persian'
    }
  },
  components: {
    appMenu: Menu,
    'app-details': Details,
    'app-education': Education,
    'app-skills': Skills,
    'app-portfolio': Portfolio
  }
});
</script>

<style lang="scss">
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

  &__section {
    background-color: rgba($color-primary-dark, .7);
    width: 80%;

    @include respond(phone) {
      width: 100%;
    }
  }
}
</style>
