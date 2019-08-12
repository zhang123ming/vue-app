<template>
  <div id="app">
    <Tabbar></Tabbar>
  <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar/Tabbar"

export default {
  name: 'App',
  components:{
    Tabbar,
  }
}
</script>

<style>
#app {
width: 100%;
height: 100%;
background: #fff;
}
</style>
