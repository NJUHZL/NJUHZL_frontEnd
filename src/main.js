// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import 'vue-event-calendar/dist/style.css'; // 1.1.10之后的版本，css被放在了单独的文件中，方便替换
import fontawesome from '@fortawesome/fontawesome';
import * as vueFontawesome from '@fortawesome/vue-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';
import vueEventCalendar from 'vue-event-calendar';
import Progress from 'vue-multiple-progress';
import echarts from 'echarts';
import qs from 'qs';

import Vue from 'vue';
import App from './App';
import router from './router';


Vue.use(ElementUI);
Vue.use(vueEventCalendar, { locale: 'en' }); // 可以设置语言，支持中文和英文
Vue.use(Progress);

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$qs = qs;

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);


Vue.component('font-awesome-icon', vueFontawesome.FontAwesomeIcon);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
