<template>
  <h2>Intro</h2>
  <p class="greeting">안녕하세요, <em>이민정</em> 입니다.</p>
  <p>제법 굵직한 웹표준 및 웹접근성 프로젝트를 진행한 경험이 있으며</p>
  <p>React + Vue를 사용했던 프론트엔드 엔지니어 시절을 지나</p>
  <p>
    현재 게임 서버 개발(업데이트 스펙 + 운영. JAVA) 및 운영툴 개발(Vue)을
    담당하고 있습니다.
  </p>
  <p>1px 맞추는 것에 희열을 느끼며, 프론트엔드 작업을 가장 재미있어 합니다.</p>
  <p class="close">
    좋은 인연이 되어 아이디어스(+백패커)와 꼭 함께하고 싶습니다!
  </p>
</template>

<script lang="ts">
export default {
  name: "IntroView",
};
</script>

<style lang="scss" scoped>
.close,
.greeting {
  font-weight: bold;
  font-size: 30px;
  color: $dark-color;
  text-align: center;
  padding: 30px 0;

  em {
    color: $main-color;
  }
}
p {
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
}
</style>
