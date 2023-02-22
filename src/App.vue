<template>
  <div id="app" class="container">
    <NavbarComponent />
    <AllShopComponent />
    <nav-bar></nav-bar>
    <keep-alive> <router-view></router-view></keep-alive>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import AllShopComponent from './components/AllShopComponent.vue';


export default {
  name: 'app',
  components: {
    NavBar,
    NavbarComponent,
    AllShopComponent,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
