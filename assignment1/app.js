const app = new Vue({
    el: '#assignment',
    data: {
        inputText: '',
        enteredText: ''
    },
    methods: {
        showAlert() {
            alert('Alert!');
        },
        inputHandler(event) {
            this.inputText = event.target.value;
        },
        enteredHandler(event) {
            this.enteredText = event.target.value;
        }
    }
});