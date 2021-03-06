import axios from 'axios'
import {Message} from 'element-ui'
import cookies from 'js-cookie'

//创建axios 实例
const service = axios.create({
	// baseURL : 'https://easy-mock.com/mock/5c6f5a45e1bf2b67057e3ebc/api',
	timeout:5000
})

//axios request拦截器配置
service.interceptors.request.use(config => {
	if(cookies.get('x-token')){
		config.headers['x-token'] = cookies.get('x-token')   //设置每次请求携带x-token
	}
	return config
},error => {
	Message({
		message:'请求超时5000ms'+ error.message,
		type:'error',
	})
})


//axios response拦截器
service.interceptors.response.use(response => {
	//过滤服务器无权限操作
	if(response.status == 200){
		return response
	}else{
		Message({
			message:'响应失败（拦截器AXIOS）',
			type:'error',
		})
	}
	
},error => {
	Message({
		message:'响应失败（拦截器AXIOS）'+ error.message,
		type:'error',
	})
})

export default service



