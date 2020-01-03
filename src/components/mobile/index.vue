<template>
<div style="font-size: 0.3rem;text-align: center">移动端</div>
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

      },
      created() {
        var self=this;
        var flag = util.IsPC(); //true为PC端，false为手机端
        if (flag){
          //设置根元素font-size
          document.documentElement.style.fontSize = 400 / 750*100 + 'px';
          document.body.style.maxWidth = '400px';
          document.body.style.margin = '0 auto';
        }else {
          //设置根元素font-size
          document.documentElement.style.fontSize = document.documentElement.clientWidth / 750*100 + 'px';
        }
      }
    }
</script>

<style lang="scss">
  @import "../../styles/mobile";

</style>
