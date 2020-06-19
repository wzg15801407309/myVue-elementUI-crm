'use strict'
import axios from 'axios'
// import store from "@/store";

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
axios.defaults.withCredentials = false

const config = {
  timeout: 30 * 1000 // Timeout
}

const _axios = axios.create(config)

// 请求拦截
_axios.interceptors.request.use(
  config => {
    // 设置是否携带token
    //   config.headers["Authorization"] = `token`;
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 相应拦截
_axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
export default _axios
