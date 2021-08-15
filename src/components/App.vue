<template>
  <div id="app">
    <AuthApp v-if="isAuth"/>
    <Signin v-else/>
  </div>
</template>

<script>
import AuthApp from './AuthApp.vue';
import Signin from '../views/Signin.vue';

export default {
  name: 'App',
  data(){
    return {isAuth: true}
  },
  components: {
    AuthApp,
    Signin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
