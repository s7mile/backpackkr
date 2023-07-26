<template>
  <AppMain />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppMain from "./views/AppMain.vue";

export default defineComponent({
  name: "App",
  components: {
    AppMain,
  },
});
</script>
