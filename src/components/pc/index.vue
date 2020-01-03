<template>
    <div style="text-align: center;">PC端</div>
</template>

<script>
  import http from '../../utils/http.js';
  import util from '../../utils/utils.js';
  require('../../utils/common.js');
    export default {
        name: "index",
      data(){
          return{

          }
      },
      methods:{
        getUser(){
          var self = this;
          http.get("/user/getAll",{
            params:{
              page:0,
              size:20,
              hl:'en'
            }
          }).then(function (res) {
            console.info(res)
          }).catch(function (e) {

          })
        }
      },
      created() {
        var flag = util.IsPC(); //true为PC端，false为手机端
        if (!flag){
          console.info("移动端");
          var hrefs = 'http://' + location.host + '/mobileIndex';
          window.open(hrefs, '_self');
        }
        this.getUser();
      }
    }
</script>

<style lang="scss">
  @import "../../styles/pc";

</style>
