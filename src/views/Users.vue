<template>
  <div>
    <h1>This is route params, query Example Page.</h1>
    <hr />
    <div style="padding: 20px;">
      <h1>method call</h1>
      <li>userId method : {{ userId }}</li>
      <li>name method : {{ name }}</li>
      <h1>
        <router-link
          :to="{
            name: 'users',
            params: {
              userId: 4321,
              name: 'hoza'
            }
          }"
          >route param</router-link
        >
      </h1>
      <li>$route.params : {{ $route.params }}</li>
      <li>$route.params.userId : {{ $route.params.userId }}</li>
      <li>$route.params.name : {{ $route.params.name }}</li>
      <h1>
        <router-link
          :to="{
            name: 'users',
            query: {
              group: 'member',
              category: 'trial'
            }
          }"
          >route query</router-link
        >
      </h1>
      <li>$route.query : {{ $route.query }}</li>
      <li>$route.query.group : {{ $route.query.group }}</li>
      <li>$route.query.category : {{ $route.query.category }}</li>
      <li>$route.query.name : {{ $route.query.name }}</li>
      <li>$route.query.address : {{ $route.query.address }}</li>
    </div>
    <hr />
    <div style="padding: 20px;">
      <router-link :to="{ path: '/users?group=member&category=trial' }">
        <h1>/users?group=member&category=trial</h1>
      </router-link>
      <h1>그룹: {{ $route.query.group }}</h1>
      <h1>카테고리: {{ $route.query.category }}</h1>
    </div>
    <hr />
    <div style="padding: 20px;">
      <router-link :to="{ path: '/users?name=hoza&address=seoul' }">
        <h1>/users?name=hoza&address=seoul</h1>
      </router-link>
      <h1>이름: {{ $route.query.name }}</h1>
      <h1>주소: {{ $route.query.address }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.userId;
    },
    name() {
      return this.$route.params.name;
    }
  },
  created() {
    console.log(":: Users.vue :: created() :: router", this.$router);
    console.log(":: Users.vue :: created() :: route", this.$route);
  }
};
</script>
