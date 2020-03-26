import axios from "axios"
import request from "./request.js"
var qs = require("qs")

//发送string请求方法
var instance = axios.create({
  // baseURL: baseUrl,
  //timeout: 20000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  transformRequest: function(params) {
    return qs.stringify({ param: JSON.stringify(params) })
  }
})
var instances = axios.create({
  // baseURL: baseUrl,
  //timeout: 20000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  transformRequest: function(params) {
    return qs.stringify({ params: JSON.stringify(params) })
  }
})
//直接发送string请求方法
var postparam = axios.create({
  // baseURL: baseUrl,
  //timeout: 20000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  transformRequest: function(params) {
    return qs.stringify(params)
  }
})
//发送FomeData请求方法
var ask = axios.create({
  // baseURL: baseUrl,
  //timeout: 30000,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    dataType: "json"
  },
  transformRequest: function(params) {
    return JSON.stringify(params)
  }
})
var jsonTest = process.env.NODE_ENV == "development" && false //测试数据

export function getSomeThing(param) {
  var url = "/api/getSomeThing"
  jsonTest && (url = "/api/getSomeThing")
  return request(url, {
    method: "post",
    data: param
  })
}
