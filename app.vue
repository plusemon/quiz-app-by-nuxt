<script setup>
const route = useRoute()

</script>


<template>

  <header class="text-center">
    <NuxtLink to="/">
      <h1 class="bg-dark text-white p-3">Quiz App </h1>
    </NuxtLink>
  </header>

  <main class="container" style="max-width: 600px;">
    <NuxtPage />
  </main>

  <footer>
    <div v-if="route.fullPath != '/'" class="text-center py-5">
      <nuxt-link class="btn btn-dark" to="/">Back to Home</nuxt-link>
    </div>
  </footer>

</template>

<style>
@import "bootstrap/dist/css/bootstrap.css";

a {
  text-decoration: none;
}
</style>