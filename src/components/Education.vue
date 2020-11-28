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
      <p class="total" :dir="direction">{{totalHours}}</p>
      <ul :dir="direction" class="edu__courses">
        <li :dir="direction" class="edu__courseItem" v-for="course in courses" :key="course.name">
          <a :href="course.link" target="_blank">{{course.title}}</a>
        </li>
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
      },
      courses: [
        {
          name: 'html-css',
          title: 'How to Create A Website: An HTML Tutorial and CSS Tutorial',
          link: 'https://www.udemy.com/course/html-tutorial/',
          duration: 32.5
        },
        {
          name: 'javascript',
          title: 'The Complete JavaScript Course 2018: Build Real Projects',
          link: 'https://www.udemy.com/course/the-complete-javascript-course/',
          duration: 28
        },
        {
          name: 'jquery',
          title: 'The Complete jQuery Course: From Beginner To Advanced',
          link: 'https://www.udemy.com/course/jquery-tutorial/',
          duration: 6
        },
        {
          name: 'nodejs',
          title: 'The Complete Node.js Developer Course (2rd Edition)',
          link: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/',
          duration: 35
        },
        {
          name: 'reactjs',
          title: 'React The Complete Guide incl Hooks React Router Redux',
          link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
          duration: 40
        },
        {
          name: 'sass',
          title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More',
          link: 'https://www.udemy.com/course/advanced-css-and-sass/',
          duration: 28
        },
        {
          name: 'wordpress',
          title: 'Master Wordpress Quickly',
          link: 'https://www.udemy.com/course/wordpress-for-beginners-course/',
          duration: 9
        },
        {
          name: 'git',
          title: 'Git Complete The definitive step by step guide to Git',
          link: 'https://www.udemy.com/course/git-complete/',
          duration: 6
        },
        {
          name: 'bootstrap',
          title: 'Bootstrapc4 From Scratch With 5 Projects',
          link: 'https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/',
          duration: 11.5
        },
        {
          name: 'mysql',
          title: 'The Ultimate MySQL Bootcamp Go from SQL Beginner to Expert',
          link: 'https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/',
          duration: 20.5
        },
        {
          name: 'seo',
          title: 'SEO 2019 Complete SEO Training SEO for WordPress Websites',
          link: 'https://www.udemy.com/course/seo-get-to-number1-in-google-search/',
          duration: 10
        },
        {
          name: 'vuejs',
          title: 'Vue JS 2 The Complete Guide incl. Vue Router Vuex',
          link: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/',
          duration: 22
        },
        {
          name: 'nuxtjs',
          title: 'Nuxt.js Vue.js on Steroids',
          link: 'https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/',
          duration: 7
        },
        {
          name: 'pwa',
          title: 'Progressive Web Apps PWA The Complete Guide',
          link: 'https://www.udemy.com/course/progressive-web-app-pwa-the-complete-guide/',
          duration: 16
        },
        {
          name: 'typescript',
          title: 'Understanding TypeScript - 2020 Edition',
          link: 'https://www.udemy.com/course/understanding-typescript/',
          duration: 15
        },
        {
          name: 'PHP',
          title: 'PHP for Beginners - Become a PHP Master - CMS Project',
          link: 'https://www.udemy.com/course/php-for-complete-beginners-includes-msql-object-oriented/',
          duration: 35
        },
        {
          name: 'PHPOOP',
          title: 'PHP OOP: Object Oriented Programming for beginners + Project',
          link: 'https://www.udemy.com/course/oop-php-object-oriented-programing-with-project-1-course/',
          duration: 16
        },
        {
          name: 'PHPMVC',
          title: 'Object Oriented PHP & MVC',
          link: 'https://www.udemy.com/course/object-oriented-php-mvc/',
          duration: 6
        },
        {
          name: 'Laravel',
          title: 'PHP with Laravel for beginners - Become a Master in Laravel',
          link: 'https://www.udemy.com/course/php-with-laravel-for-beginners-become-a-master-in-laravel/',
          duration: 30
        },
        {
          name: 'photoshop',
          title: 'Lynda.com: Photoshop.CC.2018 One on One Fundamentals',
          link: 'https://www.lynda.com/Photoshop-tutorials/Photoshop-CC-2018-One-One-Fundamentals/633852-2.html',
          duration: 16.5
        },
        {
          name: 'illustrator',
          title: 'Lynda.com: Illustrator.CC.2018 Essential Training',
          link: 'https://www.lynda.com/Illustrator-tutorials/Illustrator-CC-2018-Essential-Training/628695-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3aIllustrator+cc+2018%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2',
          duration: 4.5
        }
      ]
    }
  },
  components: {
    'app-title': Title
  },
  mixins: [languageMixin],
  computed: {
    totalHours() {
      let total = 0
      this.courses.forEach(course => {
        total += course.duration
      })
      if (this.language === 'persian') {
        return `مجموع ${total} ساعت آموزش تا به امروز`
      } else {
        return `A total of ${total} hours of education on web development till now`
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.edu {
  padding-left: 20%;
  
  @include respond(phone) {
    padding-left: 1.5rem;
  }

  &--eng {
    padding-left: 6rem;
    padding-right: 20%;

    @include respond(phone) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
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

.partition .total {
  margin-bottom: 1.5rem;
  color: $color-secondary-light;
  font-weight: bold;
}
</style>