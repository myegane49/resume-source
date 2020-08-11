<template>
  <div id="app">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Sidebar from './components/Sidebar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Sidebar
  }
});
</script>

<style lang="scss">

</style>
