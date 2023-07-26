<template>
  <header>
    <h1>
      <a href="https://www.idus.com/" title="아이디어스 바로가기" class="logo"
        ><img src="@/assets/images/logo.svg" alt="idus"
      /></a>
    </h1>
    <nav id="nav">
      <ul>
        <li><router-link to="/">Intro</router-link></li>
        <li><router-link to="/card">Card UI</router-link></li>
        <li><router-link to="/form">Form UI</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
};
</script>
