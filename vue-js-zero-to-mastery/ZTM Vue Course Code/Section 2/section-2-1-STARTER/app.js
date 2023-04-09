const testVar = "test hello"

// takes in an object of configuration settings (empty object here)
// the mount argument takes in a value of where it's going to be mounted. here it's the dev with id of app

const vm = Vue.createApp({ // vm = 'V'ue 'M'odel
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'https://google.com'
        }
    },
    methods: {
        // cleaner to put the logic here in methods to clean up the template
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}` // proxy allows `this` to work (but breaks the use of arrow functions)
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
