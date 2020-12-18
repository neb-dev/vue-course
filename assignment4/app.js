const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputTask: '',
            isVis: true,
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
        },
        toggleTasks() {
            this.isVis = !this.isVis;
        },
    },
    computed: {
        toggleCaption() {
            if(this.isVis) {
                return 'Hide tasks';
            } else if (!this.isVis) {
                return 'Show tasks';
            }
        }
    },
});
app.mount('#assignment');