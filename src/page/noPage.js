import React, { Component } from "react"
// import request from "../../utils/request.js"
// import moment from "moment"
// import TheUnit from "../../components/unit/theUnit.js"
//GLOBAL
// import {
//   isNotEmpty,
//   parseData,
//   copyJson,
//   eventHub
// } from "../../utils/global.js"
//API
// import { getSomeThing } from "./api.js"
//OBJECT
// import { data, buttons, objects1, objects2 } from "./object.js"
//OBJECT
// import { columns } from "./columns.js"
// const { data, buttons, objects1, objects2 } = require("./object.js")

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // object:props.object
      // objectValue:props.objectValue
    }
  }
  //--------------------------Style--------------------------//
  cssStyles = {}
  getInitialState = function() {}
  componentWillMount = function() {}
  componentDidMount = function() {}
  onChangeFn = (objectValue, object) => {
    console.log(objectValue, object)
    this.setState({
      objectValue: objectValue
    })
  }
  // makeUnits = (units, objectValue) => {
  //   var unitx = []
  //   units.forEach((item, index) => {
  //     unitx.push(
  //       <TheUnit
  //         key={item.id}
  //         object={item}
  //         objectValue={objectValue}
  //         onChangeFn={this.onChangeFn}
  //         root={this}
  //         $hub={eventHub}
  //         ref={child => (this[item.id] = child)}
  //       />
  //     )
  //   })
  //   return unitx
  // }
  render() {
    return (
      <div>
        noPage
        {/* <Form
            className="formMarginClass"
            size="small"
            labelAlign="left"
            hideRequiredMark={true}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            onSubmit={this.handleSubmit}
          >
              {makeUnits(this.state.object, this.state.objectValue)}
          </Form> */}
      </div>
    )
  }
}
