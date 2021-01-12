<template>
  <form @submit.prevent="sendUser">
    <label>Name:</label>
    <input type="text" v-model="user.name" />

    <label>Age:</label>
    <input type="text" v-model="user.age" />

    <button>Submit</button>
  </form>
</template>

<script>
export default {
  emits: {
    'user-info': function(user) {
      if (user) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      user: {
        name: '',
        age: '',
      },
    };
  },
  methods: {
    sendUser() {
      this.$emit('user-info', this.user);
    },
  },
};
</script>
