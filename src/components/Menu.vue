<template>
  <div class="menu">
    <img class="menu__photo" src="../assets/images/photo.jpg" alt="Photo of me">
    <button class="menu__langBtn">English/فارسی</button>
    <nav class="menu__nav">
      <button class="menu__navBtn" @click="changeSection('details')"
        :class="{curSecStyle: curSection === 'details'}">مشخصات</button>
      <button class="menu__navBtn" @click="changeSection('education')"
        :class="{curSecStyle: curSection === 'education'}">آموزش</button>
      <button class="menu__navBtn" @click="changeSection('skills')"
        :class="{curSecStyle: curSection === 'skills'}">مهارت ها</button>
      <button class="menu__navBtn" @click="changeSection('portfolio')"
        :class="{curSecStyle: curSection === 'porfolio'}">نمونه کار</button>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      curSection: 'details'
    }
  },
  methods: {
    changeSection(sectionName) {
      this.curSection = sectionName
      this.$emit('sectionChange', sectionName)
    }
  }
})
</script>

<style lang="scss" scoped>
.menu {
  background-color: rgba($color-primary-light, .7);
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  @include respond(phone) {
    position: absolute;
    left: -100%;
    height: 100%;  
    width: 50%;
    background-color: rgba(lighten($color-primary-light, 30%), .2);
  }

  &__photo {
    display: block;
    margin-top: 2rem;
    border-radius: 50%;
    width: 70%;
  }

  &__langBtn {
    background-color: rgba($color-secondary-dark, .5);
    border-radius: 5px;
    padding: .5rem 1.5rem;
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
      // background-color: lighten(rgba($color-primary-dark, .5), 10%);
      background-color: rgba($color-secondary-dark, .5);
    }
    
    &:focus {
      outline: none;
    }
  } 
}

.curSecStyle {
  background-color: rgba($color-secondary-dark, .5);
}
</style>