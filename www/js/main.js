import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from './components/Hello'

Vue.use(VueRouter);


var vm = new Vue({
  components: {
    'hello': Hello
  }
}).$mount('#app');
