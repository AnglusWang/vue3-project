import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import Tag from '@/components/Tag.vue'

const app = createApp(App)

app.use(router)
//全局异常回调
app.config.errorHandler = (err, instance, info) => {
    console.log('🚀 ~ err', err)
}
//全局注册组件
app.component('tag', Tag)

app.mount('#app')

//多应用挂载
// import Test from './Test.vue'
// const appTest = createApp(Test)
// appTest.mount('#footer')
