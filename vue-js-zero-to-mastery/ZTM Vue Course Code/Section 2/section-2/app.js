const testVar = "test hello"

// takes in an object of configuration settings (empty object here)
// the mount argument takes in a value of where it's going to be mounted. here it's the dev with id of app

const vm = Vue.createApp({ // vm = 'V'ue 'M'odel
    // define any values (single value, arrays, etc)
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
    // define any functions needed
    methods: {
        // cleaner to put the logic here in methods to clean up the template
        fullName() {
            // console log to prove that this is called on any update to the vue instance anywhere (even age)
            console.log('fullName was called')

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
            // console.log(message)
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    },
    // should only really be used to compute the value of a property. if needing to pass a value, use a method instead (probably)
    computed: {
        fullNameAsComputedProp() {
            // console log to prove that this is only called on relevant updates
            console.log('fullNameAsComputedProp was called')

            // this.age // adding this reference to age will cause this function to trigger on updates to age as well

            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}` // proxy allows `this` to work (but breaks the use of arrow functions)
        }
    },
    // properties to watch for
    watch: {
        age(newVal, oldVal) {
            // don't have to return anything and can be async. Vue will update the value regardless after this is called
            setTimeout(() => {
                this.age = 20 // revert the age back to 20 after 3 seconds
            }, 3000)
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
