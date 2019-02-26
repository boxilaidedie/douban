import request from './request'

export function getArticle(query) {
    return request({
      url: '/article',
      method: 'get',
      params: query
    })
}
