<template>
  <div class="edu">
    <div class="partition">
      <app-title :language="language" :direction="direction" imageSrc="/images/education-icon.png">
        {{text.uniHead}}
      </app-title>
      <p v-if="language === 'persian'" dir="rtl" v-html="persianText.highschool"></p>
      <p :dir="direction" v-html="text.college"></p>
      <p v-if="language === 'english'">{{englishText.collegeDesc}}</p>
    </div>
    <div class="partition">
      <app-title :language="language" :direction="direction" imageSrc="/images/udemy-icon.png">
        {{persianText.udemyHead}}
      </app-title>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import Title from './Title' 
import { languageMixin } from '@/languageMixin';

export default Vue.extend({
  name: 'Education',
  data() {
    return {
      persianText: {
        uniHead: 'دبیرستان/دانشگاه',
        highschool: 'دیپلم ریاضی: دبیرستان نمونه دولتی آیت الله خامنه ای قوچان<span style="margin-right: 5rem; color: lightgray;">1/6/1384 تا 1/4/1387</span>',
        udemyHead: 'udemy.com',
        college: 'کارشناسی مهندسی مکانیک: دانشگاه فردوسی مشهد<span style="margin-right: 5rem; color: lightgray;">1/6/1388 تا 1/7/1393</span>'
      },
      englishText: {
        uniHead: 'College',
        college: 'Bachelor in Mechanical Engineering From Ferdowsi University of Mashhad in Iran<div style="color: lightgray;">August, 2009 -- September, 2014</div>',
        collegeDesc: 'During which I learned and worked with Fortran programming language and I also learned and worked with MATLAB and I developed a huge interest in coding since then'
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

}
</style>