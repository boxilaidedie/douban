import request from './request'

export function getBook(query) {
    return request({
      url: '/bookname',
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