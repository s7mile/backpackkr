<template>
  <section>
    <h2>과제 2. 입력 폼 UI</h2>
    <div>
      <div>
        <label for="maxLength">글자수 제한</label>
        <input
          type="number"
          name="maxLength"
          id="maxLength"
          v-model="inputMaxLength"
        />
        <button @click="updateMaxLength">변경</button>
      </div>

      <FormList :maxLength="maxLength" />
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";
import FormList from "../components/form/FormList.vue";

export default {
  name: "FormUI",
  components: {
    FormList,
  },
  setup() {
    // data
    const defaultMaxLength = 500;
    const defaultMinLength = 15;

    let maxLength = ref(defaultMaxLength);
    let inputMaxLength = ref(defaultMaxLength);

    // method
    const updateMaxLength = () => {
      if (inputMaxLength.value < defaultMinLength) {
        alert("최소값은 15 입니다");
        maxLength.value = defaultMinLength;
        inputMaxLength.value = defaultMinLength;
      } else {
        maxLength.value = inputMaxLength.value;
      }
    };

    return { maxLength, inputMaxLength, updateMaxLength };
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 50px;
}
</style>
