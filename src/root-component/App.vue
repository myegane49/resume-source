<template>
  <div class="app">
    <img class="app__background"
      srcset="../assets/images/background-sm.jpg 800w, ../assets/images/background-md.jpg 1280w, ../assets/images/background-lg.jpg 1920w"
      sizes="(max-width: 600px) 800px, (max-width: 1000px) 1280px, 1920px" src="../assets/images/background-lg.jpg">
    <div class="app__section" ref="resumeSection">
      <component class="app__component" :is="section" :language="lang"></component>
    </div>
    <div class="app__backdrop" v-if="backdropVisible" @click="backdropVisible = !backdropVisible"></div>
    <app-menu :language="lang" :slideState="backdropVisible"
      @changeLang="lang = $event"
      @sectionChange="section = 'app-' + $event"
      @menuSlide="backdropVisible = $event" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Menu from '../components/Menu.vue';
import Details from '../components/Details.vue';
import Education from '../components/Education.vue';
import Portfolio from '../components/Portfolio.vue';
import Skills from '../components/Skills.vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      section: 'app-details',
      lang: 'persian',
      backdropVisible: false
    }
  },
  components: {
    appMenu: Menu,
    'app-details': Details,
    'app-education': Education,
    'app-skills': Skills,
    'app-portfolio': Portfolio
  },
  watch: {
    lang: function(value) {
      const element = this.$refs.resumeSection as HTMLElement
      if (value === 'english') {
        element.style.right = '0'
        element.style.left = 'auto'

        document.querySelector('body')!.classList.add('english')
        document.querySelector('body')!.classList.remove('persian')
      } else {
        element.style.left = '0'
        element.style.right = 'auto'

        document.querySelector('body')!.classList.add('persian')
        document.querySelector('body')!.classList.remove('english')
      }

    }
  }
});
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100vh;
  position: relative;

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
    height: 100%;
    padding: 2rem 6rem;
    position: absolute;
    top: 0;
    left: 0;

    @include respond(phone) {
      width: 100%;
      padding: 5.5rem 1.5rem 3px 1.5rem;
    }
  }

  &__component {
    width: 100%;
    height: 100%;

    @include respond(tablet) {
      overflow-y: scroll;
    }
  }

  &__backdrop {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, .7);
  }
}

.persian {
  font-family: $font-primary;
}
.english {
  font-family: $font-secondary;

  a, button {
    font-family: $font-secondary;
  }
}
</style>
