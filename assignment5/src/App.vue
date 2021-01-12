<template>
  <active-user :user="user" />
  <user-data @user-info="getUser" />
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUser(user) {
      this.user = user;
    },
  },
};
</script>
