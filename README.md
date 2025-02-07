# 2023 아이디어스(+백패커) 과제

## Build Setup

```bash
npm install

# serve with hot reload at localhost:8080
npm run serve
```

## demo

[데모](http://ec2-43-201-104-243.ap-northeast-2.compute.amazonaws.com)

## 소개

Vue와 React 중 어떤 기술을 사용할까 고민하다, 아이디어스 공고와 메일 내용을 토대로 Vue를 주 기술로 사용하는 것으로 추측되어 Vue를 선택하였습니다.<br>
현업에선 Vue2를 사용 중이고, 지금까지 Vue3는 물론 Vue+typescript 조합을 사용해본 적이 없었는데<br>
이번 기회를 통해 사용해보고자 Vue3+typescript+scss 조합으로 개발하였습니다.

## 작업 포인트

1. 카드 UI
   - vw 단위를 사용하여 뷰 가로 길이에 의존해 카드 사이즈가 변화하도록 작업하였습니다.
   - Rest API를 통해 결과 데이터를 가져와 카드 UI를 그릴 것이라 생각되어, 더미 json을 작성하여 v-for문으로 UI를 그리도록 작업하였습니다.
   - 별점 및 썸네일은 나중에 재사용할 가능성이 높아보여 컴포넌트화 하였습니다.
2. 입력 폼 UI
   - Textarea를 재사용하기 위해 컴포넌트화 하였습니다.
   - Textarea에 입력을 하거나 초기값과 다르면 버튼이 활성화됩니다.
   - 최대 글자 수 설정 가능하도록 input을 추가하였습니다.
3. 그 외 (공통)
   - 웹 접근성을 준수하였습니다. (openWAX 확인)
   - 웹 표준(w3c 검사) 준수하였습니다.
   - 데모 페이지는 새로고침해도 페이지가 유지되도록 docker + nginx 조합으로 띄웠습니다.

## To be

Vue3는 공식적으로 익스플로러를 지원하지 않는다는 것을 뒤늦게 알았습니다...🤦‍♂️ Vue3에서는 Typescript를 사용하는데에 비용이 덜 든다고 하여 선택한 것이었는데, IE를 꼭 맞춰야하는 환경이라면 폴리필을 사용하거나, Vue2 또는 React를 사용하는 편이 좋다는 것을 깨달았습니다.
