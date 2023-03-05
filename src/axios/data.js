import request from './request'

export const load = (url) => {
  return request({
    url: url,
    method: 'GET'
  })
}