<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleVis">{{ isVis ? 'Hide' : 'Show' }} Details</button>
  </li>
  <ul v-if="isVis">
    <li><strong>Phone:</strong>{{ friend.phone }}</li>
    <li><strong>Email:</strong>{{ friend.email }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    friend: Object
  },
  data() {
    return {
      isVis: false,
      // friend: {
      //   id: 'josh',
      //   name: 'Joshua Lastname',
      //   phone: '1231234456',
      //   email: 'josh@email.com',
      // },
    };
  },
  methods: {
    toggleVis() {
      this.isVis = !this.isVis;
    },
  },
};
</script>
