import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
import IntroView from "@/views/IntroView.vue";
import CardUI from "@/views/CardUI.vue";
import FormUI from "@/views/FormUI.vue";

const title = " : 2023 아이디어스(+백패커) 과제";
const routes = [
  {
    path: "/",
    name: "Intro",
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

router.afterEach((to, from) => {
  if (typeof to.name === "string") {
    document.title = to.name + title;
  }
});

export default router;
