import request from "./request.js"
var jsonTest = process.env.NODE_ENV == "development" && false //测试数据

export function getSomeThing(param) {
  var url = "/api/getSomeThing"
  jsonTest && (url = "/api/getSomeThing")
  return request(url, {
    method: "post",
    data: param
  })
}
