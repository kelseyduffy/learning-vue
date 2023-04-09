let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150 // initial value in the CSS class
        }
    },
    computed: {
        circle_classes() {
            return { purple: this.isPurple }
        }
    }
}).mount('#app')