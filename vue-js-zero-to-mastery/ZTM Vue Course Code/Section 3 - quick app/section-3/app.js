const vm = Vue.createApp({
    data() {
        return {
            perspective: 0,
            rotation: [0, 0, 0] // x,y,z
        }
    },
    methods: {
        reset() {
            this.perspective = 0
            this.rotation = [0, 0, 0]
        },
        copy() {
            console.log('copy was called.')
        }
    },
    computed: {
        rotationClassValues() {
            return `rotateX(${this.rotation[0]}deg) rotateY(${this.rotation[1]}deg) rotateZ(${this.rotation[2]}deg)`
        },
        boxPerspective() {
            return `${this.perspective}px`
        }
    }
}).mount('#app')