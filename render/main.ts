// import _ from 'lodash'
// import './style/main.css'

import Vue from 'vue'
import App from './App.vue'
// import { isDev } from 'common/config'

// function component () {
//   // lodash 是由当前 script 脚本 import 导入进来的
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ')
//   element.classList.add('hello')

//   return element
// }

const element = document.createElement('div')
document.body.appendChild(element)

// console.log(123)

// 初始化Vue
const app = new Vue({ render: create => create(App) }).$mount(element)

// 重写 debug 方法
// if (isDev()) {
//   console.debug = data => {
//     let info = data
//     if (typeof data === 'object') {
//       info = JSON.stringify(data)
//     }
//     console.log(`[Debug] ${info}`)
//   }

//   // @ts-ignore 忽略这个
//   window.app = app
// } else {
//   console.debug = data => data
// }
