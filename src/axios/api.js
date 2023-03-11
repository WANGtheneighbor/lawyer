import request from './request'

const url = 'http://8.130.33.242:8011/kg-api'

export const getGraph = (data = {"pageIndex":1,"pageSize":30,"command":0}) => {
  return request({
    url: `${url}/getGraph`,
    method: 'POST',
    data
  })
}

export const getDomainGraph = (data = {"domain":"文书1","nodeName":"","pageSize":500}) => {
  return request({
    url: `${url}/getDomainGraph`,
    method: 'POST',
    data
  })
}