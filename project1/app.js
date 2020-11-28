// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addItem() {
//     const inputValue = input.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = inputValue;
//     listEl.appendChild(listItem);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addItem);

Vue.createApp({
    data() {
        return {
            items: [],
            inputValue: ''
        };
    },
    methods: {
        addItem() {
            this.items.push(this.inputValue);
            this.inputValue = '';
        }
    }
}).mount('#app');