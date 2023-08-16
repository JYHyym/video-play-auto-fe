//axiosInstance.js
//导入axios
import axios from 'axios'
import qs from 'qs'

//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const API = axios.create({
	baseURL:'http://localhost:3000/api', //请求后端数据的基本地址，自定义
	timeout: 10000 ,                  //请求超时设置，单位ms
  // 序列化器，没有这个无法在query里发送数组参数。body里的数组不需要序列化器。
  // https://github.com/axios/axios/issues/604#issuecomment-321460450
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: 'comma' })
  }
})

// const axiosServer = axios.create({
//   baseURL: baseURLServer,
//   // 序列化器，没有这个无法在query里发送数组参数。body里的数组不需要序列化器。
//   // https://github.com/axios/axios/issues/604#issuecomment-321460450
//   paramsSerializer: function (params) {
//     return qs.stringify(params, { arrayFormat: 'comma' })
//   }
// })

//导出我们建立的axios实例模块，ES6 export用法
export default API
