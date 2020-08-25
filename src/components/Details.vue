<template>
  <div class="details" :class="{'details--eng': language === 'english'}">
    <div class="details__main" :class="{details__mainEng: language === 'english'}">
      <h1 class="details__name" :dir="direction">{{text.name}}</h1>
      <h5 :dir="direction" :class="{carrier: language === 'english'}">{{text.profession}}</h5>
    </div>
    <div class="partition">
      <app-title :language="language" :direction="direction" imageSrc="/images/profile-icon.png">
        {{text.profileHead}}
      </app-title>
      <p :dir="direction" v-html="text.profileSec"></p>
      <p :dir="direction">{{text.dateOfBirth}}</p>
      <p v-if="language === 'english'">Gender: Male</p>
      <p v-if="language === 'persian'" dir="rtl">وضعیت سربازی: دارای کارت پایان خدمت</p>
    </div>
    <div class="partition">
      <app-title :language="language" :direction="direction" imageSrc="/images/contact-icon.png">{{text.contactHead}}</app-title>
      <p :dir="direction">{{text.email}}</p>
      <p :dir="direction">{{text.phone}}</p>
      <p :dir="direction">{{text.address}}</p>
      <p :dir="direction">{{text.linkedin}}<a target="_blank" href="https://www.linkedin.com/in/mohammad-ahmady-yeganeh-5b95bba7/" style="color: lightgray">https://www.linkedin.com/in/mohammad-ahmady-yeganeh-5b95bba7/</a></p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import Title from './Title'
import { languageMixin } from '@/languageMixin'

export default Vue.extend({
  name: 'Details',
  data() {
    return {
      persianText: {
        name: 'محمد احمدی یگانه',
        profession: 'برنامه نویس وب',
        profileHead: 'شرح مختصر',
        profileSec: 'در دوره دبیرستان با زبان برنامه نویسی Visual Basic تا حدی آشنا شدم. در دوره دانشگاه با زبان های برنامه نویسی Fortran و MATLAB کار کردم و به کد نویسی علاقه پیدا کردم و دوره های آموزشی HTML/CSS و Javascript را در وبسایت <a href="https://www.udemy.com" target="_blank" style="color: lightgray">codecademy.com</a> گذراندم',
        dateOfBirth: 'تاریخ تولد: 20/11/1369',
        contactHead: 'تماس',
        email: 'ایمیل: m.yegane49@protonmail.com',
        phone: 'تلفن: 09368364733',
        address: 'آدرس فعلی: خراسان رضوی - قوچان',
        linkedin: 'لینکداین: '
      },
      englishText: {
        name: 'Mohammad Ahmady Yeganeh',
        profession: 'Web Developer',
        profileHead: 'Profile',
        profileSec: 'I spent many hours learning and honing my web development skills on udemy.com and have worked on some personal projects, the links on which are included here.',
        dateOfBirth: 'Date of Birth: 1991-02-09',
        contactHead: 'Contact',
        email: 'Email: m.yegane49@protonmail.com',
        phone: 'Phone: +989368364733',
        address: 'Current Address: Iran, Quchan',
        linkedin: 'Linkedin: '
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
.details {
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

  &__main {
    margin-bottom: 7rem;

    @include respond(phone) {
      margin-bottom: 1rem;
    }
  }

  &__mainEng {
    @include respond(phone) {
      margin-bottom: 3rem;
    }
  }

  &__name {
    font-size: 6rem;
    font-weight: bold;

    @include respond(tablet) {
      font-size: 5rem;
    }

    @include respond(phone) {
      font-size: 3rem;
    }
  }
}

.carrier {
  margin-top: .6rem;
}
</style>
