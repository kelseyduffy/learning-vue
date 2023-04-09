/* run these in the console */

const res = Vue.compile("<p v-if='true'>Hello</p>")
// says undefined, but now 'res' is available to be accessed

res
// outputs the object containing a render function, etc

