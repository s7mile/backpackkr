# 2023 아이디어스(+백패커) 과제

## Build Setup

```bash
npm install

# serve with hot reload at localhost:8080
npm run serve
```

## demo

[데모](http://haeru.azurewebsites.net)

## 소개

Vue와 React 중 어떤 기술을 사용할까 고민하다, 아이디어스 공고와 메일 내용을 토대로 Vue를 주 기술로 사용하는 것으로 추측되어 Vue를 선택하였습니다.<br>
그리고 지금까지 Vue3는 물론, Vue+typescript 조합을 사용해본 적이 없었는데, 이번 기회를 통해 사용해보고 싶어 Vue3+typescript+scss 조합으로 개발하였습니다.

## 작업 포인트

1. 카드 UI
   - vw는 ie9부터 지원하기 때문에, vw 단위를 사용하여 뷰 가로 길이에 의존해 카드 사이즈가 변화하도록 작업하였습니다.
   - Rest API를 통해 결과 데이터를 가져와 카드 UI를 그릴 것이라 생각되어, 더미 json을 작성하여 v-for문으로 UI를 그리도록 작업하였습니다.
   - 별점 및 썸네일은 나중에 재사용할 가능성이 높아보여 컴포넌트화 하였습니다.
2. 입력 폼 UI
   - Textarea를 재사용하기 위해 컴포넌트화 하였습니다.
   - Textarea에 입력을 하면(초기값과 다르면) 버튼이 활성화됩니다.
   -

## To be
