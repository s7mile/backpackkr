<template>
  <li :class="data.cardType">
    <thumbnail
      :imgurl="data.imgurl"
      :alt="data.title"
      :cardType="data.cardType"
    />
    <div class="info">
      <p>{{ data.label }}</p>
      <strong>{{ data.title }}</strong>
      <span class="highlight">{{ data.highlight }}</span>
      <span class="crossout">{{ data.crossout }}</span>
    </div>
    <div v-if="data.showRating" class="rating_wrap">
      <div class="rating">
        <RatingStar :count="data.rating" />
      </div>
      <p v-if="data.comment.length > 0">{{ data.comment }}</p>
    </div>
  </li>
</template>

<script lang="ts">
import RatingStar from "./RatingStar.vue";
import Thumbnail from "./Thumbnail.vue";

export default {
  name: "CardItemPortrait",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: {
    RatingStar,
    Thumbnail,
  },
};
</script>

<style lang="scss" scoped>
li {
  width: $card-size-portrait;

  .info {
    padding: 0.7vw $info-padding;
    p {
      color: $base-color;
    }
    strong {
      display: block;
      margin: $info-padding 0 2vw;
      font-size: 1vw;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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

  .rating_wrap {
    height: 2.5vw;
    padding: $info-padding;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-top: 1px solid $border-color;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
