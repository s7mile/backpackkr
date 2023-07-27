<template>
  <h3>1. 초기값O & 입력 중</h3>
  <FormItem
    defaultValue="초기값이 있을 수 있습니다."
    placeholder="주문요청사항을 입력해주세요"
    :maxLength="maxLength"
  />

  <h3>2. 초기값X & 입력 중</h3>
  <FormItem placeholder="주문요청사항을 입력해주세요" :maxLength="maxLength" />

  <h3>3. disabled</h3>
  <FormItem
    placeholder="주문요청사항을 입력해주세요"
    :maxLength="maxLength"
    disabled
  />

  <h3>4. readonly</h3>
  <FormItem
    placeholder="주문요청사항을 입력해주세요"
    :maxLength="maxLength"
    readonly
  />
</template>

<script lang="ts">
import FormItem from "./FormItem.vue";
export default {
  name: "FormList",
  components: {
    FormItem,
  },
  props: {
    maxLength: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 15px;
}
</style>
