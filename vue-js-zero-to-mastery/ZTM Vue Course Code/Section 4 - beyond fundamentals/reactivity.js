/* this is a representation of what Vue is doing behind the scenes with reactivity by using proxy object */

const data = {
    name: 'Luis'
}

const observedData = new Proxy(data, { 
    set(target, key, value) {
        document.querySelector("#name").innerText = value /* corresponds to html of <div id="name"></div> */
        target[key] = value
    }
})
console.log(observedData.name)

// docs:
// proxy: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// codepen: https://codepen.io/

