import { createWebHistory, createRouter } from "vue-router";
import IntroView from "@/views/IntroView.vue";
import CardUI from "@/views/CardUI.vue";
import FormUI from "@/views/FormUI.vue";

const routes = [
  {
    path: "/",
    name: "메인 페이지",
    component: IntroView,
  },
  {
    path: "/card",
    name: "과제 1. 카드 UI",
    component: CardUI,
  },
  {
    path: "/form",
    name: "과제 2. 입력 폼 UI",
    component: FormUI,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
