import axios from 'axios';
import Cookies from 'js-cookie';


const instance = axios.create({
    // baseURL: process.env.NODE_ENV === 'production' ? "/": "/api"
    baseURL: '/'
}, function (err) {
    return Promise.reject(err)
});

//响应拦截
instance.interceptors.response.use(function (response) {
   return response.data;
},function (err) {
    return Promise.reject(err)
});

//请求拦截
instance.interceptors.request.use(function (config) {
   let token = Cookies.get('token');
   if (token){
       config.headers = {
           ...config.headers,
           token
       }
   }
   return config;
});

export default instance;



















