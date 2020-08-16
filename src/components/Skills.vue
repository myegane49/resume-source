<template>
  <div class="skills">
    <div class="partition">
      <h4 class="heading" :dir="direction">{{text.codingHead}}</h4>
      <ul :dir="direction" class="skillList">
        <li :dir="direction">HTML & CSS</li>
        <li :dir="direction">Javascript</li>
        <li :dir="direction">Bootstrap</li>
        <li :dir="direction">JQuery</li>
        <li :dir="direction">SASS</li>
        <li :dir="direction">Git</li>
        <li :dir="direction">Reactjs, Nextjs, Redux</li>
        <li :dir="direction">Vuejs, Nuxtjs</li>
        <li :dir="direction">TypeScript</li>
        <li :dir="direction">PWA</li>
        <li :dir="direction">Nodejs, Expressjs</li>
        <li :dir="direction">MySQL</li>
      </ul>
    </div>
    <div class="partition" :class="{softwareFa: language === 'persian'}">
      <h4 class="heading" :dir="direction">{{text.softwareHead}}</h4>
      <ul :dir="direction" class="skillList">
        <li :dir="direction">Adobe Photoshop</li>
        <li :dir="direction">Adobe Illustrator</li>
        <li :dir="direction">GIMP</li>
      </ul>
    </div>
    <div class="partition" :class="{languageFa: language === 'persian'}">
      <h4 class="heading" :dir="direction">{{text.languageHead}}</h4>
      <p :dir="direction">{{text.ieltsResult}}</p>
      <div class="ieltsRes" :dir="direction">Listening: 7</div>
      <div class="ieltsRes" :dir="direction">Reading: 7</div>
      <div class="ieltsRes" :dir="direction">Writing: 7</div>
      <div class="ieltsRes" :dir="direction">Speaking: 7</div>
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import { languageMixin } from '@/languageMixin';

export default Vue.extend({
  name: 'Skills',
  data() {
    return {
      persianText: {
        codingHead: 'مهارت های کدنویسی',
        softwareHead: 'مهارت های نرم افزاری',
        languageHead: 'زبان انگلیسی',
        ieltsResult: 'نتیجه آزمون رسمی آیلتس: '
      },
      englishText: {
        codingHead: 'Coding Skills',
        softwareHead: 'Software Skills',
        languageHead: 'English language',
        ieltsResult: 'Official IELTS test result:'
      }
    }
  },
  mixins: [languageMixin]
});
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  justify-content: center;
  margin-top: 10rem;

  @include respond(phone) {
    display: inline-block;
    margin-top: 0;
  }

  > div {
    margin: 4rem;

    @include respond(tablet) {
      margin: 1rem;
    }

    @include respond(phone) {
      margin: 0;
    }
  }

  .heading {
    margin-right: 0;
    margin-left: 0;
  }
}

.softwareFa {
  order: -2;
}

.languageFa {
  order: -3;
}

.skillList {
  margin: 0 3rem;
}

.ieltsRes {
  margin: 0 1rem;
}
</style>