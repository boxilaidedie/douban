import request from './request'

export function getBook(query) {
    return request({
      url: '/bookname',
      method: 'get',
      param: query
    })
}
