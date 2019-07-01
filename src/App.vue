<template>
  <div id="app">
    <SideBar :all-projects="allProjects" :product-name="productName" :project-id="this.projectId" @update-project-id="updatedProjectID"/>

    <div style="margin-left: 200px;">

      <Listing :title="this.testCase.name" :data-listing="this.testCase.data" :array-key="this.testCase.arrayKey"></Listing>
      <Listing :title="this.testRun.name" :data-listing="this.testRun.data" :array-key="this.testRun.arrayKey"></Listing>

    </div>


  </div>
</template>

<script>
  import { helpers } from './assets/customMixins.js';
import SideBar from './components/SideBar.vue';
import Listing from './components/listing.vue';

export default {
  mixins: [helpers],
  name: 'app',
  components: {
    SideBar,
    Listing
  },
  data() {
    return {
      allProjects: null,
      productName: 'QA touch',
      testCase: { 'name' : 'Test Case', 'data' : [], 'arrayKey' : 'case_title'},
      testRun:  { 'name' : 'Test Run', 'data' : [], 'arrayKey' : 'testrun_name'},
      // defectTitle:   { 'name' : 'All Defects', 'data' : []},
      projectId: -1

    }
  },
  created() {
    // arrow function
    this.fetchData('https://api.qatouch.com/api/v1/getAllProjects', this.config).then(response => {
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
    updatedProjectID(projectID) {

        // arrow function
        this.fetchData('https://api.qatouch.com/api/v1/getAllTestCases/'+projectID, this.config).then(response => {
          this.testCase.data = response['data']['data'];
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });


        // arrow function
        this.fetchData('https://api.qatouch.com/api/v1/getAllTestRuns/'+projectID, this.config).then(response => {
          this.testRun.data = response['data']['data'];
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    }
  }
}
</script>

<style>

</style>
