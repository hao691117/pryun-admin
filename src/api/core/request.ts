import axios from 'axios'
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL
const http = axios.create({
  baseURL: `/mode-${VITE_BASE_URL}`,
})
// 允许跨域携带cookie信息,用于网络舆情外部请求携cookie
http.defaults.withCredentials = true

// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('_token') || ''
    const headers: any = { token }
    // 在发送请求之前做些什么
    config.headers = { ...headers, ...config.headers }
    // console.log(`---------->日志输出:VITE_BASE_URL`, VITE_BASE_URL)
    // if (VITE_BASE_URL === '/test/') {
    //     config.url = config.url?.replace('/msscreen', '/msscreen-test')
    // }
    // config.url = config.url?.replace('/msscreen', `msscreen-$${VITE_BASE_URL.slice(0, VITE_BASE_URL.length - 1)}`)
    // console.log(`---------->日志输出:config`, config)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // console.log(`---------->日志输出:response`, response)
    const { status = 200, data } = response
    // 只要服务器状态栏正常就返回
    if (status === 200) return data
    // console.log(`---------->服务器繁忙:`, response)
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    console.log(`---------->请求错误:error`, error)
    const { message = '服务器繁忙' } = error
    // ElMessage({ message, grouping: true, type: 'info' }) // 领导不喜欢看到报错 他自己不连vpn
    // ElNotification({ title: '异常错误', message: '服务器异常，请反馈至开发者。', type: 'error' })
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default http
