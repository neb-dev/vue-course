const app = new Vue({
    el: '#user-goal',
    data: {
        courseGoal: 'Finish the course and learn Vue.',
        vueLink: 'https://vuejs.org/v2/guide/index.html',
        // conditionalGoal: '<h3>Master Vue.</h3>'
        conditionalGoal: 'Master Vue.'
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            let goal = '';

            randomNumber < 0.5 ? goal = this.conditionalGoal : goal = 'Become a professional Vue coder.';

            return goal;
        }
    }
});
