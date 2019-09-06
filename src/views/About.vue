<template>
  <div class="text-xs-cneter">
    <div style="padding: 20px;">
      <h1>This is Vue router, router-link Example Page.</h1>
    </div>
    <hr />
    <div style="padding: 20px;">
      <router-link :to="{ name: 'home' }">
        <h1>Go Home</h1>
      </router-link>
      <router-link :to="{ name: 'users' }">
        <h1>Go Users</h1>
      </router-link>
    </div>
    <hr />
  </div>
</template>
