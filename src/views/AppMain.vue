<template>
  <div class="skip_nav">
    <a href="#nav">메뉴 목록 바로가기</a>
    <a href="#content">컨텐츠 바로가기</a>
  </div>
  <AppHeader />
  <router-view id="content"></router-view>
  <AppFooter />
</template>

<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "AppMain",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
