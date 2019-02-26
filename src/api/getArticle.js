import request from './request'

export function getArticle(query) {
    return request({
      url: ' https://easy-mock.com/mock/5c6f5a45e1bf2b67057e3ebc/api/article',
      method: 'get',
      params: query
    })
}
