#后端API

|请求类型|URL|Body示例|功能|
|--|---|--|--|
|POST|http://8.130.33.242:8011/kg-api/getGraph|`{"pageIndex":1,"pageSize":30,"command":0}`|获得文书列表|
|POST|http://8.130.33.242:8011/kg-api/getDomainGraph|`{"domain":"文书2","nodeName":"","pageSize":500}`|获得某文书的知识图谱|
|POST|http://8.130.33.242:8011/kg-api/createNode|`{uuid:"60",name:"黄秀峰1",r:25,domain:"文书2"}`|新建或修改节点名称|
|POST|http://8.130.33.242:8011/kg-api/deleteNode?domain={}&nodeId={}|``|删除节点|
|POST|http://8.130.33.242:8011/kg-api/createLink|`{"domain":"文书0","sourceId":"23","targetId":"10","ship":"出生地点"}`|新建关系|
|POST|http://8.130.33.242:8011/kg-api/updateLink?domain={}&shipId={}&shipName={}|``|编辑关系名称|
|POST|http://8.130.33.242:8011/kg-api/deleteLink?domain={}&shipId={}|``|删除关系|