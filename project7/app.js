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
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

// Proxy
const data = {
  message: 'Hello!',
  nextMessage: 'Hello! World!',
};

const handler = {
  set(target, key, value) {
    // target = set data property, key = get data property, value = the value\
    if (key === 'message') {
      target.nextMessage = value + ' World.';
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello,';

console.log(proxy.nextMessage);
