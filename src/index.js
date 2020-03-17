import React from "react"
import ReactDOM from "react-dom"
import Router from "./router"
import "antd/dist/antd.css"
console.log(process.env.NODE_ENV)
console.log(process.env.PUBLIC_URL)
ReactDOM.render(<Router />, document.getElementById("root"))
