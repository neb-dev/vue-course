<template>
  <form @submit.prevent="createFriend">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name" />
    </div>

    <div>
      <label>Phone:</label>
      <input type="text" v-model="phone" />
    </div>

    <div>
      <label>Email:</label>
      <input type="text" v-model="email" />
    </div>

    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['submit-friend'],
  data() {
    return {
      name: '',
      phone: '',
      email: '',
    };
  },
  methods: {
    createFriend() {
      this.$emit('submit-friend', this.name, this.phone, this.email);
      
      this.name = '';
      this.phone = '';
      this.email = '';
    },
  },
};
</script>
