const app = new Vue({
  el: '#events',
  data: {
    counter: 0,
    name: '',
  },
  methods: {
    add(value) {
      this.counter += value;
    },
    subtract(value) {
      this.counter -= value;
    },
    nameHandler(event, lastName) {
      this.name = event.target.value;
    },
    enteredNameHandler() {
      this.enteredName = this.name;
    },
    submit(event) {
      alert('Sent!');
      // event.preventDefault();
    },
    resetInput() {
      this.name = '';
    },
  },
});
