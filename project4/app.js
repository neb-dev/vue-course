const app = new Vue({
  el: '#events',
  data: {
    result: 5,
    name: '',
    lastname: '',
    // fullname: '',
  },
  watch: {
    result(val) {
      if(val > 50) {
        setTimeout(() => { this.result = 0; }, 1000);
      }
    },
    // name(val) {
    //   if(val === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = val + ' ' + this.lastname;
    //   }
    // },
    // lastname(val) {
    //   if(val === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + val;
    //   }
    // },
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
      this.lastname = '';
    },
  },
  computed: {
    myName() {
      if(this.name === '' || this.lastname === ''){
        return '';
      }
      return this.name + ' ' + this.lastname;
    },
  },
});
