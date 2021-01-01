const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'jessica',
          name: 'Jessica Lastname',
          phone: '1231234456',
          email: 'jess@email.com',
        },
        {
          id: 'josh',
          name: 'Joshua Lastname',
          phone: '1231234456',
          email: 'josh@email.com',
        },
      ],
    };
  },
});

app.component('f-component', {
  template: `
  <li>
    <h2>{{ f.name }}</h2>
    <button @click="toggleVis">Show Details</button>
    <ul v-if="isVis">
      <li><strong>Phone:</strong> {{ f.phone }}</li>
      <li><strong>Email:</strong> {{ f.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      isVis: false,
      f: {
        id: 'josh',
        name: 'Joshua Lastname',
        phone: '1231234456',
        email: 'josh@email.com',
      },
    };
  },
  methods: {
    toggleVis() {
      this.isVis = !this.isVis;
    },
  },
});

app.mount('#app');
