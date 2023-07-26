<template>
  <i class="fill" v-for="star in count" :key="star"></i>
  <i v-for="star in 5 - count" :key="star"></i>
</template>

<script lang="ts">
export default {
  name: "RatingStar",
  props: {
    count: Number,
  },
};
</script>

<style lang="scss" scoped>
i {
  display: inline-block;
  width: 1vw;
  height: 1vw;
  margin-right: 3px;
  background-color: #ccc;
  @include border-radius(50%);

  &:last-child {
    margin-right: 0;
  }

  &.fill {
    background-color: $yellow-color;
  }
}
</style>
