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
      // console.dir(this.$refs.userText);
      this.message = this.$refs.userText.value;
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

/*
VUE LIFECYCLE
1. createApp
2. beforeCreate
3. created      *compile template*
4. beforeMount  *compile template*
5. mounted      *mounted vue instance*

Data Changed
6. beforeUpdate
7. updated

Instance Unmounted
8. beforeUnmount
9. unmounted
*/
