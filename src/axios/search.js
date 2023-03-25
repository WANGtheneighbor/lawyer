import request from './request'

const url = 'http://8.130.88.34:9200/judgment_doc/_search'

export const search = (data = {"query": {"match": {"content": "关键字"}}}) => {
  return request({
    url,
    method: 'POST',
    data
  })
}