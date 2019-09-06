/* eslint-disable no-console */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const About = () => {
  return import(/* webpackChunkName: "about" */ "./views/About.vue");
};

const Users = () => {
  return import(/* webpackChunkName: "users" */ "./views/Users.vue");
};

const Users2 = () => {
  return import(/* webpackChunkName: "users2" */ "./views/Users2.vue");
};

const Users2Detail = () => {
  return import(
    /* webpackChunkName: "users2-detail" */ "./views/Users2Detail.vue"
  );
};

const Users2Edit = () => {
  return import(/* webpackChunkName: "users-edit" */ "./views/Users2Edit.vue");
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/users",
      //path: "/users/:userId", // 주소창을 통한 값을 전달
      name: "users",
      component: Users
    },
    {
      path: "/users2",
      name: "users2",
      /**
       * :: Router Guard ::
       * 호출되는 경로에 따라 라우트 매칭을 결정하고 해당 컴포넌트를 생성하기 직전에 호출되는 함수
       * 여기서 인증 여부를 판단한 뒤 컴포넌틀 랜더링을 진행하거나 혹은 로그인 페이지로 이동하는 등의 로직을 구현하면 된다.
       */
      beforeEnter: (to, from, next) => {
        // ===========================================
        // Sampel Code 1
        // ===========================================
        // console.log(":: router.js :: to: ", to, "/ from: ", from);
        // next();
        // next("/"); // Home 으로 이동
        // next("/about"); // About 으로 이동
        // ===========================================
        // Sampel Code 2
        // ===========================================
        console.log(":: router.js :: beforeEnter");
        next();
      },
      component: Users2,
      children: [
        {
          path: ":id",
          name: "users2-detail",
          component: Users2Detail
        },
        {
          path: ":id/edit",
          name: "users2-edit",
          component: Users2Edit
        }
      ]
    },
    // 일반적인 redirect 사용방법.
    {
      path: "/redirect-me",
      redirect: { name: "users2" }
    },
    // 위에 정의된 라우터 이외의 잘못된 경로로 접속을 시도하면
    // home 으로 redirect .한다.
    {
      path: "/*",
      redirect: { name: "home" }
    }
  ]
});
