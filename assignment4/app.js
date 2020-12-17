const app = Vue.createApp({
    el: '#assignment',
    data: {
        tasks: [],
        inputTask: ''
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
        }
    }
});