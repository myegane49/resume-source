<template>
  <div class="menu" ref="menuBar" :class="{menuFa: language === 'persian', menuEng: language === 'english'}">
    <button @click="slideMenu" class="menu__menuBtn" :class="{'menu__menuBtn--left': language === 'english'}">
      <img src="../assets/images/menu-icon.png" alt="Menu Icon" class="menu__menuBtn--img">
    </button>
    <img class="menu__photo" src="../assets/images/photo.jpg" alt="Photo of me">
    <button @click="alterLang" class="menu__langBtn">English/فارسی</button>
    <div>
      <a class="menu__pdf" href="#" :download="language === 'persian' ? pdfLinkFa: pdfLinkEn">
        <img src="../assets/images/pdf-icon.png" alt="">
      </a>
      <p>{{text.pdf}}</p>
    </div>
    <nav class="menu__nav">
      <button class="menu__navBtn" @click="changeSection('details')"
        :class="{curSecStyle: curSection === 'details'}">{{text.detailsBtn}}</button>
      <button class="menu__navBtn" @click="changeSection('education')"
        :class="{curSecStyle: curSection === 'education'}">{{text.educationBtn}}</button>
      <button class="menu__navBtn" @click="changeSection('skills')"
        :class="{curSecStyle: curSection === 'skills'}">{{text.skillsBtn}}</button>
      <button class="menu__navBtn" @click="changeSection('portfolio')"
        :class="{curSecStyle: curSection === 'porfolio'}">{{text.portfolioBtn}}</button>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      curSection: 'details',
      persianText: {
        detailsBtn: 'مشخصات',
        educationBtn: 'آموزش',
        skillsBtn: 'مهارت ها',
        portfolioBtn: 'تجربه کاری',
        pdf: 'دانلود PDF',
      },
      englishText: {
        detailsBtn: 'Details',
        educationBtn: 'Education',
        skillsBtn: 'Skills',
        portfolioBtn: 'Experience',
        pdf: 'Download PDF'
      },
      pdfLinkEn: '/pdf/Resume_en_Mohammad_Ahmady_Yeganeh.pdf',
      pdfLinkFa: '/pdf/Resume_fa_Mohammad_Ahmady_Yeganeh.pdf'
    }
  },
  props: ['language', 'slideState'],
  computed: {
    text() {
      if (this.language === 'persian') {
        return this.persianText
      } else {
        return this.englishText
      }
    }
  },
  methods: {
    changeSection(sectionName) {
      this.curSection = sectionName
      this.$emit('sectionChange', sectionName)
      if (window.innerWidth < 600) {
        this.slideMenu()
      }
    },
    alterLang() {
      if (this.language === 'persian') {
        this.$emit('changeLang', 'english')
      } else {
        this.$emit('changeLang', 'persian')
      }
      if (window.innerWidth < 600) {
        this.slideMenu()
      }
    },
    slideMenu() {
      const element = this.$refs.menuBar
      const styles = getComputedStyle(element)
      const right = +styles.right.replace('px', '')
      const left = +styles.left.replace('px', '')

      if (right === 0 && this.language === 'persian') {
        element.style.right = '-50%'
        element.style.left = 'auto'
        this.$emit('menuSlide', false)
      } else if (right < 0 && this.language === 'persian') {
        element.style.right = '0'
        element.style.left = 'auto'
        this.$emit('menuSlide', true)
      } else if (left === 0 && this.language === 'english') {
        element.style.left = '-50%'
        element.style.right = 'auto'
        this.$emit('menuSlide', false)
      } else if (left < 0 && this.language === 'english') {
        element.style.left = '0'
        element.style.right = 'auto'
        this.$emit('menuSlide', true)
      }
    }
  },
  watch: {
    language: function(value) {
      const element = this.$refs.menuBar 
      if (value === 'english') {
        element.style.left = '0'
        element.style.right = 'auto'
      } else {
        element.style.right = '0'
        element.style.left = 'auto'
      }
    },
    slideState: function() {
      this.slideMenu()
    }
  }
})
</script>

<style lang="scss" scoped>
.menu {
  background-color: rgba($color-primary-light, .7);
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  transition: all .3s;

  @include respond(phone) {
    width: 50%;
    background-color: $color-primary-light;
  }

  &__photo {
    display: block;
    margin-top: 2rem;
    border-radius: 50%;
    width: 70%;

    @include respond(phone) {
      margin-top: 5rem;
    }
  }

  &__langBtn {
    background-color: rgba($color-secondary-dark, .5);
    border-radius: 5px;
    padding: .5rem 1.5rem;
    margin: 0 auto;
    display: block;
  }

  &__pdf {
    text-align: center;
    display: block;
    
    img {
      width: 5rem;
    }
  }

  &__nav {
    margin-bottom: 5rem;
    width: 100%;
  }

  &__navBtn {
    display: block;
    width: 100%;
    background-color: rgba($color-primary-dark, .5);
    font-size: 2rem;
    padding: 1rem 0;
    
    &:not(:last-child) {
      border-bottom: 1px solid $color-primary-dark;
    }

    &:hover {
      background-color: rgba($color-secondary-dark, .5);
    }
    
  }

  &__menuBtn {
    background-color: transparent;
    height: 5rem;
    width: 5rem;
    position: fixed;
    right: 0;
    top: 0;
    margin: .5rem 1rem;
    display: none;

    @include respond(phone) {
      display: inline-block;
    }

    &--img {
      height: 100%;
    }

    &--left {
      right: auto;
      left: 0;
    }
  }
}

.menuFa {
  @include respond(phone) {
    right: -50%;
  }
}

.menuEng {
  right: auto;
  left: 0;

  @include respond(phone) {
    left: -50%;
  }
}

.curSecStyle {
  background-color: rgba($color-secondary-dark, .5);
}
</style>