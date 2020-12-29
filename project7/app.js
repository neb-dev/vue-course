const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.dir(this.$refs.userText);
    },
  },
});

app.mount('#app');


const app2 = Vue.createApp({
  template: `
  <p>{{ meal }}</p>
  `,
  data() {
    return {
      meal: 'popcorn',
    };
  },
});

app2.mount('#app2');
