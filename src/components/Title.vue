<template>
  <div class="title" :class="{titleEng: language === 'english'}">
    <h4 class="heading" :dir="direction"><slot></slot></h4>
    <img class="icon" :src="imageSrc" :class="{iconEng: language === 'english'}">
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: ['language', 'direction', 'imageSrc']
})
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.titleEng {
  justify-content: flex-start;
}

.icon {
  height: 4rem;
}

.iconEng {
  order: -1;
}
</style>