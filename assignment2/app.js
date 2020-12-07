const app = new Vue({
    el: '#assignment',
    data: {
        result: 0,
    },
    methods: {
        add(val) {
            this.result += val;
        },
    },
    computed: {
        messageHandler() {
            if(this.result < 37) {
                return 'Not there yet';
            } else if(this.result === 37) {
                return 37;
            } else {
                return 'Too Much!';
            }
        },
    },
    watch: {
        messageHandler(val) {
            setTimeout(() => { this.result = 0 }, 5000);
        }
    },
});