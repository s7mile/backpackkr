<template>
  <div
    class="thumbnail"
    :class="cardType"
    :style="[imgurl ? { 'background-image': `url(${imgurl})` } : '']"
  >
    <p>{{ alt }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "CardItem",
  props: {
    imgurl: String,
    alt: String,
    cardType: String,
  },
};
</script>

<style lang="scss" scoped>
.thumbnail {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: $card-size-portrait;
  background: url("@/assets/images/logo.svg") #ccc;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &.portrait {
    width: 100%;
    height: $card-size-portrait;
  }

  &.landscape {
    float: left;
    width: $card-size-landscape;
    height: 100%;
  }

  p {
    @include hidden();
  }
}
</style>
