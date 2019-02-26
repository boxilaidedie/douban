import request from './request'

export function getBook(query) {
    return request({
      url: ' https://easy-mock.com/mock/5c6f5a45e1bf2b67057e3ebc/api/bookname',
      method: 'get',
      params: query
    })
}


export function doubanBook(query){
  return request({
    url:'/api/movie/in_theaters',
    method: 'get',
    params: query
  })
}