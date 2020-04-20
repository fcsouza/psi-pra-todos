<template>
  <div id="app">
    <default-layout>
      <transition name="fade">
        <router-view/>
      </transition>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from './layout/DefaultLayout'
export default {
  name: 'App',
  components: {
    DefaultLayout
  },
  created () {
    if (localStorage.getItem('jwt-auth')) {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        this.$auth.user(user)
      }
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
