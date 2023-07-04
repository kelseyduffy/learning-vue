import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate'
import { required } from '@vee-validate/rules'

export default {
  // plugins are objects that implement 'install'
  install(app /*, options */) {
    // app is reference to Vue application
    // options is other options passed to the plugin
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
  }
}
