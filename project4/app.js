const app = new Vue({
  el: '#events',
  data: {
    result: 5,
    name: '',
  },
  methods: {
    add(value) {
      this.result += value;
    },
    subtract(value) {
      this.result -= value;
    },
    nameHandler(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = '';
    },
  },
  computed: {
    myName() {
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Nebeker';
    }
  },
});
