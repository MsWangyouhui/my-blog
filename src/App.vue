<template>
  <div id="app">
    <Heard ></Heard>
    <Home></Home>
    <br>
    <transition name="fade" mode="out-in">
    <keep-alive>
        <router-view class="meddle"></router-view>
    </keep-alive>
    </transition>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Heard from "./components/heard"
import Home from "./components/Home"

export default {
  name: 'app',
  components : { Heard, Home },
  props: ['counter'],
  mounted () {
  //  [App.vue specific] When App.vue is finish loading finish the progress bar
  this.$Progress.finish()
},
created () {
  //  [App.vue specific] When App.vue is first loaded start the progress bar
  this.$Progress.start()
  //  hook the progress bar to start before we move router-view
  this.$router.beforeEach((to, from, next) => {
    //  does the page we want to go to have a meta.progress object
    if (to.meta.progress !== undefined) {
      let meta = to.meta.progress
      // parse meta tags

      this.$Progress.parseMeta(meta)
    }
    //  start the progress bar
    this.$Progress.start()
    //  continue to next page
    next()
  })
  //  hook the progress bar to finish after we've finished moving router-view
  this.$router.afterEach((to, from) => {
    //  finish the progress bar
      console.log(to);
      console.log(from);
    this.$Progress.finish()
  })
},


}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  /*transition: opacity .5s ease;*/
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}

.fade-enter, .fade-leave-active {
  /*opacity: 0*/
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.meddle{
  width: 80%;
  margin: 0 10%;
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
@media screen and (max-width: 500px) {
    .meddle {
      width: 100%;
      margin: 0 ;
    }
}
</style>
