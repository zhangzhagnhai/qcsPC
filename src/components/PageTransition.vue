<template>
  <div>
    <router-view ref="routerView" class="child-view"></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        transitionName: 'slide-left',
      }
    },
    created(){

    },
    methods:{
      getQueryStringByName(name) {
          var result = location.href.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
          if (result == null || result.length < 1) {

            return "";

          }
          return result[1];
       }},
    beforeRouteUpdate (to, from, next) {
      window.scrollTo(0, 0)
      next();
    },
    watch: {
      "$route": "setShare"
    }
  }
</script>

<style scoped>
  .child-view {
  position: absolute;
  width:100%;
/*  transition: all .8s cubic-bezier(.55,0,.1,1);*/
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
  .header {
    position:absolute;
    height:44px;
    background:#0058f1;
    width:100%
  }
</style>
