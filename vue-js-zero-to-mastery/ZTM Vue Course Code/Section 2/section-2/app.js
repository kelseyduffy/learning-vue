const testVar = "test hello"

// takes in an object of configuration settings (empty object here)
// the mount argument takes in a value of where it's going to be mounted. here it's the dev with id of app

const vm = Vue.createApp({ // vm = 'V'ue 'M'odel
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        // cleaner to put the logic here in methods to clean up the template
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}` // proxy allows `this` to work (but breaks the use of arrow functions)
        },
        increment() {
            this.age++
        },
        updateLastName (message, event) {
            // prevent the default behavior of the event when overwriting the logic
                // note: this is called automatically with '.prevent' on the binding itself and not needed here
                // https://vuejs.org/guide/essentials/event-handling.html#event-modifiers
            // event.preventDefault()  

            // proceed with custom logic
            console.log(message)
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    }
}).mount('#app')

// data can be accessed once the instance is assigned to a variable
setTimeout(() => {
    vm.firstName = 'Bob'; // proxying allows you to not have to do vm.data.firstName
    // vm.$data.firstName // what's actually being called behind the scenes with proxy getters
}, 2000);

Vue.createApp({
    data() {
        return {
            firstName: 'Katrina',
            lastName: 'Hurricane'
        }
    }
}).mount('#app2')
