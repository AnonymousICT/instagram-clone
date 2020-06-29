<template>
  <header class="header">
    <h3 class="title">INSTA<span>CLONE</span></h3>
    <button class="logout-btn" @click="$store.commit('logout')">
      <i class="material-icons">exit_to_app</i>
    </button>
  </header>
</template>