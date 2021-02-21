<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <icon :data="vueIcon" original width="100" height="100" />
    <icon data="@icon/vue.svg" color="red blue" width="100" height="100" />
  </div>
</template>

<script>
import vueIcon from '@icon/vue.svg'

export default {
  name: 'App',
  components: {
  },
  data: () => {
    return {
      vueIcon
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
