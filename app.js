const App = {
    data() {
        return {
            notes: [],
            inputName: '',
            inputOpisanie: ''
        }
    },
    methods: {
        inputValue(event) {
            this.inputName = event.target.value
        }
    }
}

Vue.createApp(App).mount('#app')