import Vue from "vue";
import VueRouter from "vue-router";

import Cookies from "js-cookie"

import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [

  {
    path: "/admin",
    name: "admin",
    meta: {
      requiresAuth: true
    },
    component: () => import(/*  */ '../views/admin/Layout'),
    children: [
      {
        path: '/',
        name: 'admin_home',   
        component: () => import(/* */ '../views/admin/Home')
      },
      {
        path: 'post',
        name: "admin_post",
        component: () => import(/* */ '../views/admin/Post')
      }
    ]
  },
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // component: About

  //   //Menggunakan Code Splitting
  //   component: () => import(/* webpackChunkName: "About"*/'../views/About')
  // },

  {
    path: '/',
    name: 'login',
    component: () => import(/** */ '../views/Login')
  },

  //Membuat halaman 404 Not Found
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: "404" */'../views/404') 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    const auth = Cookies.get('auth')
  
    if (auth) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
