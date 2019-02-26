import request from './request'

export function getBook(query) {
    return request({
      url: '/bookname',
      method: 'get',
      params: query
    })
}
