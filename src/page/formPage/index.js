import React, { Component } from "react"
import { Form, Row } from "antd"
// import moment from "moment"
import TheUnit from "../../common/theUnit.js"
import {
  // isNotEmpty,
  // parseData,
  // copyJson,
  eventHub
} from "../../common/global.js"
import { getSomeThing } from "../../common/api.js"
const { data, object } = require("./object.js")
export default class accountmanagement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data,
      object,
      objectValue: {}
    }
  }
  //--------------------------Style--------------------------//
  cssStyles = {
    blueColor: {
      color: "#fff",
      background: "#1890FF"
    },
    editColor: { color: "#ccc" },
    flexCenter: { display: "flex" },
    gorycolor: {
      color: "#999",
      fontSize: 12
    },
    cardhead: { borderBottom: 0, color: "#929292" },
    gory: {
      color: "#929292",
      fontSize: 12
    },
    formCss: {
      "ant-form-item": { "margin-bottom": "0px" }
    }
  }
  getInitialState = function() {}
  componentWillMount = function() {
    getSomeThing()
  }
  componentDidMount = function() {}
  searchFn = (object, objectValue) => {
    console.log(object, objectValue)
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
    })
  }
  renderFn = () => {
    var scope = this.state
    alert(scope.objectValue2[scope.object.id])
    this.setState({
      objectValue2: scope.objectValue2
    })
  }
  changeSearchType = e => {
    this.setState({ searchType: e.target.checked })
  }
  makeUnits = (units, objectValue) => {
    var unitx = []
    units.forEach((item, index) => {
      unitx.push(
        <TheUnit
          key={item.id}
          object={item}
          objectValue={objectValue}
          onChangeFn={this.onChangeFn}
          root={this}
          $hub={eventHub}
          ref={child => (this[item.id] = child)}
        />
      )
    })
    return unitx
  }
  render() {
    return (
      <Row style={{ marginTop: 10 }}>
        <Form
          className="formMarginClass"
          size="small"
          labelAlign="left"
          hideRequiredMark={true}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          onSubmit={this.handleSubmit}
        >
          {this.makeUnits(this.state.object, this.state.objectValue)}
        </Form>
      </Row>
    )
  }
}
