<template>
  <div dir="ltr" class="project" :class="{'project--eng': language === 'english'}">
    <div class="project__details" :class="{'project__details--eng': language === 'english'}">
      <a target="_blank" class="project__link" :dir="direction" :href="project.link">{{project.link}}</a>
      <p :dir="direction">{{language === 'persian' ? project.descriptionFa: project.descriptionEn}}</p>
    </div>
    <a class="project__imageLink" target="_blank" :href="project.link"><img :src="project.imageSrc"></a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['language', 'direction', 'project']  
})
</script>

<style lang="scss" scoped>
.project {
  padding: 1rem 0;
  margin: .6rem 0;
  width: 80%;
  border-radius: 4px;
  background-color: rgba($color-secondary-dark, .4);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @include respond(tablet) {
    width: 100%;
  }

  @include respond(phone) {
    flex-direction: column;
    justify-content: flex-start;
  }

  &--eng {
    justify-content: flex-start;
  }

  &__details {
    margin: 0 1rem;
    align-self: flex-start;

    @include respond(phone) {
      align-self: center;
      order: 2;
    }

    p {
      color: white;
    }

    &--eng {
      order: 2;
    }
  }

  &__link {
    display: block;
    margin-bottom: 1.5rem;
    color: lightgray;
  }

  &__imageLink {
    display: block;
    height: 13rem;
    margin: 0 1rem;

    @include respond(phone) {
      height: 16rem;
    }

    img {
      height: 100%;
    }
  }

}
</style>