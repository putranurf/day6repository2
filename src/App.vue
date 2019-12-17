<template>
  <div>
    <ul>
      <!-- <li>
        <router-link :to="{ name: 'home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about'}">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'admin_home'}">Admin</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'admin_post'}">Admin Post</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'error'}">404</router-link>
      </li> -->
      <router-view></router-view>
    </ul>
  </div>
</template>