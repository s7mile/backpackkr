<template>
  <h2>과제 1. 카드 UI</h2>
  <article>
    <CardList :datas="state.resultDatas" />
  </article>
</template>

<script lang="ts">
import { reactive } from "vue";
import CardList from "../components/card/CardList.vue";

export default {
  name: "CardUI",
  components: {
    CardList,
  },
  setup() {
    const state = reactive({
      resultDatas: [
        {
          idx: 1,
          label: "Card Label1",
          title: "Card Title1",
          highlight: "Highlight1",
          crossout: "Cross Out1",
          rating: 3,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          showRating: true,
          imgurl:
            "https://www.idus.com/resources/dist/images/ogimg-idus.png?ver=2.0",
          cardType: "portrait",
          userName: "John Doe",
        },
        {
          idx: 2,
          label: "Card Label2",
          title: "Card Title2",
          highlight: "Highlight2",
          crossout: "Cross Out2",
          rating: 4,
          comment: "",
          showRating: true,
          imgurl: "",
          cardType: "portrait",
          userName: "John Doe",
        },
        {
          idx: 3,
          label: "Card Label3",
          title: "Card Title3",
          highlight: "Highlight3",
          crossout: "Cross Out3",
          rating: 2,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          showRating: false,
          cardType: "portrait",
          userName: "John Doe",
        },
        {
          idx: 4,
          label: "Card Label4",
          title: "Card Title4",
          highlight: "Highlight4",
          crossout: "Cross Out4",
          rating: 4,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          showRating: false,
          cardType: "landscape",
          userName: "John Doe",
        },
      ],
    });

    return {
      state,
    };
  },
};
</script>
