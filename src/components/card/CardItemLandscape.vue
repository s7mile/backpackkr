<template>
  <li :class="data?.cardType">
    <thumbnail
      :imgurl="data?.imgurl"
      :alt="data?.title"
      :cardType="data?.cardType"
    />
    <div class="info">
      <strong>{{ data?.title }}</strong>
      <p>{{ data?.comment }}</p>

      <div class="rating">
        <RatingStar :count="data?.rating" />
      </div>
      <span class="user_name">{{ data?.userName }}</span>
    </div>
  </li>
</template>

<script lang="ts">
import RatingStar from "./RatingStar.vue";
import Thumbnail from "./Thumbnail.vue";

export default {
  name: "CardItemLandscape",
  props: {
    data: Object,
  },
  components: {
    RatingStar,
    Thumbnail,
  },
};
</script>

<style lang="scss" scoped>
li {
  position: relative;
  width: 24vw;
  height: $card-size-landscape;

  .info {
    float: left;
    width: calc(100% - $card-size-landscape - $info-padding * 2);
    padding: 0.7vw $info-padding;
    p {
      color: $base-color;
      font-size: 1vw;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      /* ie. 말줄임은 표시안됨 */
      line-height: 1.2em;
      max-height: 3.6em;
    }
    strong {
      display: block;
      margin-bottom: $info-padding;
      font-weight: bold;
      font-size: 1vw;
    }
    .highlight {
      display: inline-block;
      color: $main-color;
    }
    .crossout {
      display: inline-block;
      margin-left: 0.3vw;
      text-decoration: line-through;
    }
  }

  .rating {
    position: absolute;
    left: $card-size-landscape + $info-padding;
    bottom: 10px;
  }
  .user_name {
    position: absolute;
    bottom: 10px;
    left: $card-size-landscape + $info-padding + 5.8vw;
    height: 1.1vw;
    line-height: 1.1vw;
    border-left: 1px solid #ccc;
    margin-left: 0.5vw;
    padding-left: 0.5vw;
    color: $base-color;
  }
}
</style>
