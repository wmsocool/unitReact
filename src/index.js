import React from "react"
import ReactDOM from "react-dom"
import Router from "./router"
import "antd/dist/antd.css"
import { eventHub } from "./common/global.js"
document.eventHub = eventHub
// console.log(process.env.NODE_ENV)
ReactDOM.render(<Router />, document.getElementById("root"))
