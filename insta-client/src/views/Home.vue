<template>
  <main class="feed">
    Hello, World
    <button @click='logout'>Logout</button>
  </main>
</template>


<script>
export default {
  methods: {
    logout() {
      this.$store.commit('logout')
    }
  }
}
</script>