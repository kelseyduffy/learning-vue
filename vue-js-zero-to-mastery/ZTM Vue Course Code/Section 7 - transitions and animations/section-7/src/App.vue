<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <transition name="zoom" type="animation"> <!-- if the animation and transition have different durations, vue will use the longer one unless you override it with type -->
      <h2 v-if="flag">Hello </h2>
    </transition>
    <hr/>
    <hr/>
    <transition name="fade">   <!-- Vue detects how long the animations will be from looking at the css -->
      <h2 v-if="flag" key="main">Hello world!</h2>
      <h2 v-else key="secondary">Another hello</h2> <!-- notice how the two transition simulatenously and reposition themselves when theyre done -->
    </transition>
    <hr/>
    <transition name="fade" duration="1000"> <!-- you tell Vue how long the animations will be, in ms. Notice that Vue ripped this element out before its 2.5s animation was done -->
      <h2 v-show="flag">Hello again</h2>
    </transition>
    <hr/>
    <transition name="fade" mode="out-in">   <!-- Vue detects how long the animations will be from looking at the css -->
      <h2 v-if="flag" key="main">Hello world!</h2>
      <h2 v-else key="secondary">Another hello</h2>
    </transition>
    <hr/>
    <transition name="zoom" type="animation" appear> <!-- the appear tag will cause the animations to render on page load if the element is rendered by default -->
      <h2 v-if="flag">Hello </h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
    }
  }
};
</script>

<style>
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
