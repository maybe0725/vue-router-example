<template>
  <v-layout row wrap pt-5 style="max-width:500px; margin: 0 auto;">
    <v-flex xs12>
      <h1>User2</h1>
      <p>유저를 검색해 주세요.</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field v-model="userId" label="유저 번호를 입력하세요."></v-text-field>
      <v-btn @click="$router.push({name: 'users2-detail', params: {id: userId}})">검색</v-btn>
    </v-flex>
    <v-flex xs12>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return { userId: null };
  },
  /**
   * :: Router Guard ::
   * 라우터로부터 현재 페이지에 들어오면 실행
   * 페이지 로딩전 실행.
   */
  beforeRouteEnter(to, from, next) {
    console.log(":: Users2.vue :: beforeRouteEnter(to, from, next)");
    next();
  },
  /**
   * :: Router Guard ::
   * 현재 페이지에서 나갈 때 실행
   */
  beforeRouteLeave(to, from, next) {
    console.log(":: Users2.vue :: beforeRouteLeave(to, from, next)");
    next();
  },
  created() {
    // console.log(":: Users2.vue :: created() :: router :: ", this.$router);
    // console.log(":: Users2.vue :: created() :: route :: ", this.$route);
    console.log("Users2.vue :: created()");
  },
  destroyed() {
    console.log(":: Users2.vue :: destroyed()");
  }
};
</script>
