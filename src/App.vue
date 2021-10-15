<template>
    <Navbar></Navbar>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
    name: "Home",
    components: {Navbar}
    
};
</script>

<style>

</style>