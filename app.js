const App = {
    data() {
        return {
            notes: [],
            inputName: '',
            inputOpisanie: ''
        }
    },
    methods: {
        addTask() {
            this.notes.push({
                name: this.inputName,
                opisanie: this.inputOpisanie
            });
            this.inputName='';
            this.inputOpisanie='';
            console.log(this.notes);
        },
        removeTask(index) {
            this.notes.splice(index, 1)
        },
        isNotFull() {
            if (this.inputName === '' || this.inputOpisanie === ''){
                console.log(this.inputName, this.inputOpisanie);
                return true
            };
        }
    }
}

Vue.createApp(App).mount('#app')