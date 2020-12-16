
const app = new Vue({
  el: '#user-goals',
  data: {
    inputGoal: '',
    goals: [],
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoal);
    },
  },
});