<template>
  <div>
    <div class="textarea_wrapper">
      <textarea
        name="comment"
        id="commentTextarea"
        :placeholder="placeholder"
        v-model="value"
        :disabled="disabled"
        :readonly="readonly"
        title="코멘트"
        :maxlength="maxLength"
      ></textarea>
      <button
        :class="
          defaultValue === value ||
          (defaultValue === undefined && value.length === 0)
            ? 'hide'
            : 'show'
        "
      >
        Save
      </button>
    </div>
    <p>{{ maxLength - value.length }}자</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "FormItem",
  props: {
    defaultValue: String,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    maxLength: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const value = ref(props.defaultValue ? props.defaultValue : "");

    return {
      value,
    };
  },
});
</script>
<style lang="scss" scoped>
.textarea_wrapper:after {
  content: "";
  display: block;
  clear: both;
}

textarea {
  float: left;
  width: $textarea-width;
  height: 100px;
  border: 1px solid $border-color;
  resize: none;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  &:focus {
    border-color: $main-color;
  }
}

span {
  color: $base-color;
}

button {
  float: left;
  width: 100px;
  height: 100px;
  margin-left: 10px;
  border: 1px solid $border-color;
  background: #fff;
  color: $main-color;

  &:disabled {
    background: #f0f0f0 !important;
  }

  &:active {
    background: #f9f9f9;
  }

  &.show {
    display: block;
  }

  &.hide {
    display: none;
  }
}

p {
  width: $textarea-width;
  margin-top: 5px;
  text-align: right;
  color: $base-color;
  font-size: 12px;
}
</style>
