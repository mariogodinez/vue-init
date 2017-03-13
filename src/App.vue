<template>
  <div id="app">
     <router-link to="/app">Router App</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>
