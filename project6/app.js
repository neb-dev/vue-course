
const app = new Vue({
  el: '#user-goals',
  data: {
    inputGoal: '',
    goals: [],
    // fam: [
    //   {
    //     name: 'Jessica',
    //     age: 30,
    //   },
    //   {
    //     name: 'Bailey',
    //     age: 1.5
    //   }
    // ]
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoal);
    },
    deleteGoal(ind) {
      this.goals.splice(ind, 1);
    },
  },
});