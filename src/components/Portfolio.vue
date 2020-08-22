<template>
  <div>
    <div class="partition">
      <app-title :language="language" :direction="direction" imageSrc="/images/git-icon.png">
        {{text.gitHead}}
      </app-title>
      <p :dir="direction"><a target="_blank" href="https://www.github.com/myegane49">https://www.github.com/myegane49</a></p>
      <p :dir="direction"><a target="_blank" href="https://www.gitlab.com/myegane49">https://www.gitlab.com/myegane49</a></p>
    </div>
    <div class="partition">
      <app-title :language="language" :direction="direction" imageSrc="/images/portfolio-icon.png">
        {{text.portfoHead}}
      </app-title>
      <div :dir="direction" class="projects">
        <app-project v-for="prj in projects" :key="prj.imageSrc" :project="prj" :language="language" :direction="direction" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import Title from './Title.vue'
import Project from './Project.vue'
import { languageMixin } from '@/languageMixin';

export default Vue.extend({
  name: 'Portfolio',
  data() {
    return {
      persianText: {
        gitHead: 'ریپازیتری های گیت',
        portfoHead: 'نمونه کارها'
      },
      englishText: {
        gitHead: 'Git Repositories',
        portfoHead: 'Portfolio'
      },
      projects: {
        imagebay: {
          link: 'https://yegane-imagebay.herokuapp.com',
          imageSrc: '/images/imagebay.png',
          descriptionEn: 'A Nodejs REST API app hosted on Heroku and Mongodb Atlas with files stored on Firebase',
          descriptionFa: 'یک REST API با استفاده از Nodejs و دیتابیس Mongodb میزبانی شده روی Heroku و Mongodb Atlas و میزبانی فایلها روی Firebase Storage'
        },
        xogame: {
          link: 'https://yegane-xo-game.herokuapp.com',
          imageSrc: '/images/xo-game.png',
          descriptionEn: 'A simple game build with vanilla Javascript and using the MVC architecture model',
          descriptionFa: 'یک بازی ساده با استفاده از Javascript و مدل معماری MVC'
        },
        acmilan: {
          link: 'https://yegane-acmilan.herokuapp.com',
          imageSrc: '/images/acmilan.png',
          descriptionEn: 'A custom built carousel widget and a collapsible menu using jQuery',
          descriptionFa: 'یک ویجت سفارشی ساخته شده carousel و یک منوی collapsible با استفاده از JQuery'
        }
      }
    }
  },
  components: {
    'app-title': Title,
    'app-project': Project
  },
  mixins: [languageMixin]
});
</script>

<style lang="scss" scoped>
.projects {
  // display: flex;
  // flex-direction: column;
  // flex-wrap: wrap;
  // height: 75vh;

  @include respond(tablet) {
    // flex-wrap: nowrap;
    // height: auto;
  }
}
</style>