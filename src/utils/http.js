import axios from 'axios'

let baseUrl = '';
var ev=  process.env.NODE_ENV;
console.info(ev);
if (ev == 'development') {
  baseUrl = 'http://127.0.0.1:8088';//测试地址
} else {
  baseUrl = 'http://127.0.0.1:8088';//正式地址
}
console.log("请求接口地址:"+baseUrl);
var instance = axios.create({
  baseURL: baseUrl,
  timeout: 8000
});


instance.interceptors.response.use(function(response){
  return response.data;
}, function(error){
  console.error('http请求失败', error);
  return error;
  // return Promise.reject(error);
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
export default instance;












