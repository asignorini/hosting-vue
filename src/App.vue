<template>
  <Navbar></Navbar>
  <main class="container">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    name: "Home",
    components: {Navbar, Footer}
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}

main {
  min-height: 80vh;
}

li {
  list-style: none;
}
</style>