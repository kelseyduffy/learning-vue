<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <button @click="addItem">Add Item</button>
  <ul>
    <transition-group name="fade">
      <li v-for="(number, index) in numbers" :key="number" @click="removeItem(index)">
        {{ number }}
      </li>
    </transition-group>
  </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
      numbers: [1,2,3,4,5]
    }
  },
  methods: {
    addItem() {
      const num = Math.floor(Math.random() * 100 + 1); // random number from 1 - 100
      const index = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(index, 0, num);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      console.log('before-enter event fired', el);
    },
    enter(el /*, done*/) {
      // done is a callback function to call whenever you're done with your animation
      console.log('enter event fired', el);

      // const animation = el.animate([{ transform: "scale3d(0,0,0)" }, { /* don't need to specify anything here as browser assumes 100% scale */ }], {
      //   duration: 1000, // ms
      // });

      // // don't call the done function until the animation's actually done, which is notified using the onfinish() function
      // animation.onfinish = () => {
      //   done();
      // }
    },
    afterEnter(el) {
      console.log('after-enter event fired', el);
    },
    beforeLeave(el) {
      console.log('before-leave event fired', el);
    },
    leave(el /*, done*/) {
      console.log('leave event fired', el);

      // const animation = el.animate([{}, { transform: "scale3d(0,0,0)" }], {
      //   duration: 1000, // ms
      // });

      // // don't call the done function until the animation's actually done, which is notified using the onfinish() function
      // animation.onfinish = () => {
      //   done();
      // }
    },
    afterLeave(el) {
      console.log('after-leave event fired', el);
    },
    enterCancelled() {
      // not going to implement anything here, but it's possible to handle animation cancellation
      console.log('animation was cancelled');
    },
    leaveCancelled() {
      console.log('animation was cancelled');
    }
  }
};
</script>

<style>
li {
  font-size: 22px;
  cursor: pointer;
}
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 2.5s linear;
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}

.fade-move {
  transition: all 1s linear;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0,0);
  }
  to {
    transform: scale(1,1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1,1);
  }
  to {
    transform: scale(0,0);
  }
}
</style>
