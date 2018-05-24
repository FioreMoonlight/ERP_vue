import axios from 'axios' 
import qs from 'qs'
import {Message, Loading} from 'element-ui'

axios.defaults.baseURL = 'http://39.106.9.139/apis';

let loadinginstace;
axios.interceptors.request.use(config => {
  loadinginstace = Loading.service({fullscreen: true});
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, error => {
  loadinginstace.close();
  Message.error({
    message: '加载超时'
  });
  return Promise.reject(error)
});
axios.interceptors.response.use(data => {
  loadinginstace.close();
  Message.success({
    message: data.data.message
  });
  return data.data
}, error => {
  loadinginstace.close();
  Message.error({
    message: '加载失败'
  });
  return Promise.reject(error)
});
export default axios;
