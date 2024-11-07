import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.less';
import components from './components/global';
import Router from './router/index';

// 引入 ant design vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// 引入Tailwind CSS
import "./tailwind.css";

const app = createApp(App)
app.config.productionTip = false

// components
for (const i in components) {
  app.component(i, components[i])
}

// 使用 ant design uve
app.use(Antd);

// 使用路由
app.use(Router);

// 挂载App
app.mount('#app')
