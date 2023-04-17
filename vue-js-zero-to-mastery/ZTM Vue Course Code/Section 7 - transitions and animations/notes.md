## CSS

Vue handles the addition and removal of classes during the transition periods
- it does not do the actual animation itself
- in the `elements` tab of browser dev tools, you can see the classes being added and removed throughout the animation cycle
- Vue detects the timing for the animations by looking at the css itself
    - you can override this by explicitly telling Vue how long the duration is by using `duration=""` in the element in milisecond

element names:
- `*-enter-from`
   - called at the very beginning of the element being rendered
   - removed after the first frame
   - ex: `fade-enter-from`
- `*-enter-to`
   - called at the end when it's disappearing
   - final frame of the animation, for finishing touches
- `*-enter-active`
    - added from the beginning to ending of the animation

they default to `v-*` for each one (`v-enter-from`), but you can add a name to the transition tag (`<transition name="fade">`) to overwrite this (ex: `fade-enter-from`)

transitioning out:
- everything is the same, but `*-leave-*`

[docs on transitions](https://vuejs.org/guide/built-ins/transition.html)

## JavaScript

hooks:
- before 
    - right before it starts
- enter/leave
    - during
- after
    - right after it's done 
- before-enter, enter, after-enter
- before-leave, leave, after-leave

element is provided by Vue in the hooks
- don't need to call GetById or anything
- element provided is a full DOM object

[docs on animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)

Vue prefers CSS over JS animations
- it will check for css first
- you can tell Vue not to check for css animations by using `:css="false"`

Using both
- use the `name` attribute to let it find the right CSS classes (or leave blank for `v-*`)
- omit the `done` function callback from the javascript hooks
