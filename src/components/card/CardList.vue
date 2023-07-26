<template>
  <ul>
    <CardItem v-for="data in datas" :key="data.idx" :data="data" />
  </ul>
</template>

<script lang="ts">
import CardItem from "./CardItem.vue";
export default {
  name: "CardList",
  props: {
    datas: Object,
  },
  components: {
    CardItem,
  },
};
</script>

<style lang="scss" scoped>
ul:after {
  content: "";
  display: block;
  clear: both;
}

li {
  float: left;
  margin-right: 1vw;
  overflow: hidden;
  border: 1px solid $border-color;
  border-radius: 4px;
  background: #fff;
  font-size: 0.8vw;
}
</style>
