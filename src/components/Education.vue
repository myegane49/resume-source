<template>
  <div class="edu" :class="{'edu--eng': language === 'english'}">
    <div class="partition">
      <app-title :language="language" :direction="direction" imageSrc="/images/education-icon.png">
        {{text.uniHead}}
      </app-title>
      <p v-if="language === 'persian'" dir="rtl">
        دیپلم ریاضی: دبیرستان نمونه دولتی آیت الله خامنه ای قوچان
        <span>1/6/1384 تا 1/4/1387</span>
      </p>
      <p :dir="direction" v-html="text.college"></p>
      <p v-if="language === 'english'">During which I learned and worked with Fortran programming language and I also learned and worked with MATLAB and I developed a huge interest in coding since then</p>
    </div>
    <div class="partition">
      <app-title :language="language" :direction="direction" imageSrc="/images/udemy-icon.png">
        udemy.com
      </app-title>
      <ul :dir="direction" class="edu__courses">
        <li :dir="direction" class="edu__courseItem">How to Create A Website: An HTML Tutorial and CSS Tutorial. By Todd Mcloed</li>
        <li :dir="direction" class="edu__courseItem">The Complete JavaScript Course 2018: Build Real Projects. By Jonas Schmedtmann</li>
        <li :dir="direction" class="edu__courseItem">The Complete jQuery Course: From Beginner To Advanced. By Peter Sommerhoff</li>
        <li :dir="direction" class="edu__courseItem">The Complete Node.js Developer Course (2rd Edition). By Andrew Mead</li>
        <li :dir="direction" class="edu__courseItem">React The Complete Guide incl Hooks React Router Redux 2019-5</li>
        <li :dir="direction" class="edu__courseItem">Advanced CSS and Sass: Flexbox, Grid, Animations and More. By Jonas Schmedtman</li>
        <li :dir="direction" class="edu__courseItem">Master Wordpress Quickly. By Andrew Williams</li>
        <li :dir="direction" class="edu__courseItem">Git Complete The definitive step by step guide to Git 2018</li>
        <li :dir="direction" class="edu__courseItem">Bootstrapc4 From Scratch With 5 Projects</li>
        <li :dir="direction" class="edu__courseItem">The Ultimate MySQL Bootcamp Go from SQL Beginner to Expert 2019-2</li>
        <li :dir="direction" class="edu__courseItem">SEO 2019 Complete SEO Training SEO for WordPress Websites</li>
        <li :dir="direction" class="edu__courseItem">Vue JS 2 The Complete Guide incl. Vue Router Vuex </li>
        <li :dir="direction" class="edu__courseItem">Nuxt.js Vue.js on Steroids 2019-2</li>
        <li :dir="direction" class="edu__courseItem">Progressive Web Apps PWA The Complete Guide 2019</li>
        <li :dir="direction" class="edu__courseItem">Lynda.com: Photoshop.CC.2018 One on One Fundamentals</li>
        <li :dir="direction" class="edu__courseItem">Lynda.com: Illustrator.CC.2018 Essential Training</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import Title from './Title.vue' 
import { languageMixin } from '@/languageMixin';

export default Vue.extend({
  name: 'Education',
  data() {
    return {
      persianText: {
        uniHead: 'دبیرستان/دانشگاه',
        college: 'کارشناسی مهندسی مکانیک: دانشگاه فردوسی مشهد<span style="margin-right: 5rem; color: lightgray;">1/6/1388 تا 1/7/1393</span>'
      },
      englishText: {
        uniHead: 'College',
        college: 'Bachelor in Mechanical Engineering From Ferdowsi University of Mashhad in Iran<div style="color: lightgray;">August, 2009 -- September, 2014</div>'
      }
    }
  },
  components: {
    'app-title': Title
  },
  mixins: [languageMixin]
});
</script>

<style lang="scss" scoped>
.edu {
  padding-left: 20%;
  
  @include respond(phone) {
    padding-left: 0;
  }

  &--eng {
    padding-left: 0;
    padding-right: 20%;

    @include respond(phone) {
      padding-right: 0;
    }
  }

  span {
    margin-right: 5rem;
  }

  &__courses {
    margin: 0 2rem;
  }

  &__courseItem {
    margin-top: 5px;
  }
}

</style>