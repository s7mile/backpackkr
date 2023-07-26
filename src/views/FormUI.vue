<template>
  <h2>과제 2. 입력 폼 UI</h2>
  <article>
    <h3>1. 초기값O & 입력 중</h3>
    <FormItem
      defaultValue="초기값이 있을 수 있습니다."
      placeholder="주문요청사항을 입력해주세요"
    />
    <h3>2. 초기값X & 입력 중</h3>
    <FormItem placeholder="주문요청사항을 입력해주세요" />
    <h3>3. disabled</h3>
    <FormItem placeholder="주문요청사항을 입력해주세요" disabled />
    <h3>4. readonly</h3>
    <FormItem placeholder="주문요청사항을 입력해주세요" readonly />
  </article>
</template>

<script lang="ts">
import FormItem from "../components/form/FormItem.vue";

export default {
  name: "FormUI",
  props: {
    msg: String,
  },
  components: {
    FormItem,
  },
};
</script>
