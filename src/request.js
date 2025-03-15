// src/request.js
import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: '/api', // 这里的baseURL会和vite配置中的代理路径配合
  timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，比如添加token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // 处理请求错误
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res = response.data;
    return res;
  },
  (error) => {
    // 处理响应错误
    console.log('err' + error);
    return Promise.reject(error);
  }
);

// 封装get请求
export function get(url, params = {}) {
  return service({
    url,
    method: 'get',
    params
  });
}

// 封装post请求
export function post(url, data = {}) {
  return service({
    url,
    method: 'post',
    data
  });
}