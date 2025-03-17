// src/utils/request.js
import axios from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL, // 从 .env 读取
  timeout: 10000,
});

// 请求拦截器（添加 token、全局参数等）
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截器（统一错误处理）
service.interceptors.response.use(
  response => response.data,
  error => {
    // 统一处理 HTTP 错误状态码
    const status = error.response?.status;
    if (status === 401) {
      // token 过期处理
    }
    return Promise.reject(error);
  }
);


export const request = service