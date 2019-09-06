<template>
  <div>
    <h1>Users Edit</h1>
    {{userid }}
  </div>
</template>

<script>
export default {
  computed: {
    userid() {
      return this.$route.params.id;
    }
  }
};
</script>