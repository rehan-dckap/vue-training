<template>
  <div id="app">
    <SideBar/>
  </div>
</template>

<script>
  import { helpers } from './assets/customMixins.js';
import SideBar from './components/SideBar.vue'

export default {
  mixins: [helpers],
  name: 'app',
  components: {
    SideBar
  },
  data() {
    return {
      allProjects: null
    }
  },
  created() {
    this.allProjects = this.fetchData('https://api.qatouch.com/api/v1/getAllProjects', this.config);
  },
  methods: {

  }
}
</script>

<style>

</style>
