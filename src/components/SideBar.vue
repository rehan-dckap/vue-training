<template>

  <div class="sidenav">
    <h3 class="title">{{ this.productName }}</h3>
    <div class="title separator"></div>

    <div v-for="allProject in allProjects">
      <div class="project-name">{{ allProject.project_name}}</div>
    </div>
  </div>

</template>

<script>
  import { helpers } from '../assets/customMixins.js';
export default {
  mixins: [helpers],
  name: 'HelloWorld',
  props: {
    allProjects: [Promise, Array],
    productName : String
  },
  data: function () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .sidenav {
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: darkgrey;
    overflow-x: hidden;
    /*padding-top: 20px;*/
    padding: 16px 8px 8px 16px;
  }

  .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }

  .sidenav a:hover {
    color: #f1f1f1;
  }

  .project-name{
    margin: 8px;
  }

  .title{
    margin: 8px;
  }

  .separator{
    height: 2px;
    background-color: #111111;
  }
</style>
