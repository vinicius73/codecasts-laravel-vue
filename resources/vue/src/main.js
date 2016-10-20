import Vue from 'vue'
import WelcomeLinks from './components/WelcomeLinks.vue'

new Vue({ // eslint-disable-line no-new
  components: { WelcomeLinks },
  el: '#app',
  data: {
    title: 'Laravel + Vue'
  }
})
