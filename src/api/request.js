import axios from 'axios'
import {Message} from 'element-ui'
import cookies from 'js-cookie'

//创建axios 实例
const service = axios.create({
	baseURL : 'http://content.xfyun.cn',
	timeout:800
})

//axios request拦截器配置
service.interceptors.request.use(config => {
	if(cookies.get('x-token')){
		config.headers['x-token'] = cookies.get('x-token')   //设置每次请求携带x-token
	}
	return config
},error => {
	Message({
		message:error.message,
		type:'error',
	})
})


//axios response拦截器
service.interceptors.response.use(response => {
	//过滤服务器无权限操作
},error => {
	Message({
		message:error.message,
		type:'error',
	})
})

export default service


