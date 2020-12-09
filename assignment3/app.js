const app = new Vue({
    el: '#assignment',
    data: {
        inputClass: '',
        isVisible: true,
        isHidden: false,
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
            this.isHidden = !this.isHidden;
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