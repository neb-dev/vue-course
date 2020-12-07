const app = new Vue({
    el: '#styling',
    data: {
        boxA: false,
        boxB: false,
        boxC: false,
    },
    methods: {
        selectedBox(letter) {
            if(letter === 'A') {
                this.boxA = !this.boxA;
            } else if(letter === 'B') {
                this.boxB = !this.boxB;
            } else if(letter === 'C') {
                this.boxC = !this.boxC;
            }
        },
    },
    computed: {
        boxAClasses() {
            return { active: this.boxA };
        },
    },
});
