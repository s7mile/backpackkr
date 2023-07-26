<template>
  <CardItemPortrait v-if="data?.cardType === 'portrait'" :data="data" />
  <CardItemLandscape v-else-if="data?.cardType === 'landscape'" :data="data" />
</template>

<script lang="ts">
import CardItemPortrait from "./CardItemPortrait.vue";
import CardItemLandscape from "./CardItemLandscape.vue";
export default {
  name: "CardItem",
  props: {
    data: Object,
  },
  components: {
    CardItemPortrait,
    CardItemLandscape,
  },
};
</script>
