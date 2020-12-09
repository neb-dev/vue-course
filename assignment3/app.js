const app = new Vue({
    el: '#assignment',
    data: {
        inputClass: '',
        isVisible: 'visible',
    },
    methods: {
        toggleVisibility() {
            if(this.isVisible === 'visible') {
                this.isVisible = 'hidden';
            } else if(this.isVisible === 'hidden') {
                this.isVisible = 'visible';
            }
        }
    },
    computed: {
        classSelector() {
            if(this.inputClass === 'user1') {
                return 'user1';
            } else if(this.inputClass === 'user2') {
                return 'user2';
            }
        },
    },
});