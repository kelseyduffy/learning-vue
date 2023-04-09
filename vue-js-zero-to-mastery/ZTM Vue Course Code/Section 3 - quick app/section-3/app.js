const vm = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotation: [0, 0, 0] // x,y,z
        }
    },
    methods: {
        reset() {
            this.perspective = 100
            this.rotation = [0, 0, 0]
        },
        async copy() {
            let text = `transform:${this.boxStyle.transform};`

            // docs on clipboard api: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
            await navigator.clipboard.writeText(text)

            alert("CSS copied to clipboard")
        }
    },
    computed: {
        boxStyle() {
            return {
                transform: `
                    perspective(${this.perspective}px)    
                    rotateX(${this.rotation[0]}deg)
                    rotateY(${this.rotation[1]}deg)
                    rotateZ(${this.rotation[2]}deg)
                `
            }
        }
    }
}).mount('#app')