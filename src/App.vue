<template>
  <div id="app">
    <SideBar :all-projects="allProjects" :product-name="productName"/>
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
      allProjects: null,
      productName: 'QA touch'
    }
  },
  created() {
    // arrow function
    this.allProjects = this.fetchData('https://api.qatouch.com/api/v1/getAllProjects', this.config).then(response => {
                            this.allProjects = response['data']['data'];
                      })
                      .catch(function (error) {
                        // handle error
                        console.log(error);
                      })
                      .finally(function () {
                        // always executed
                      });

    // without arrow function
    // this.allProjects = this.fetchData('https://api.qatouch.com/api/v1/getAllProjects', this.config).then(function(data){
    //   this.allProjects = data;
    // })
  },
  methods: {

  }
}
</script>

<style>

</style>
