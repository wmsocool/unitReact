import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Radio, Col, Form } from "antd"

export default class InputUnit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      object: props.object,
      objectValue: props.objectValue
    }
  }
  getInitialState = function() {}
  componentWillMount = function() {
    if (isNotEmpty(this.state.objectValue[this.state.object.id])) {
    } else {
      this.state.objectValue[this.state.object.id] = 1
    }
  }
  componentDidMount = function() {
    console.log(this.state.objectValue[this.state.object.id])
  }
  onChangeFn = e => {
    this.props.objectValue[this.state.object.id] = e.target.value
    this.setState({
      objectValue: this.props.objectValue
    })
    this.state.object.onChange &&
      this.state.object.onChange.call(
        this.props.root,
        this.state.object,
        this.state.objectValue
      )
  }
  alertMe = text => {
    alert(text)
  }
  render() {
    var getOptionals = optionals => {
      var opt = []
      optionals.forEach((item, index) => {
        opt.push(<Radio value={item.value}>{item.title}</Radio>)
      })
      return opt
    }
    return (
      <Col span={this.state.object.span}>
        <Form.Item
          required={this.state.object.required}
          label={this.state.object.title}
        >
          <Radio.Group
            onChange={this.onChangeFn}
            value={this.state.objectValue[this.state.object.id]}
          >
            {getOptionals(this.state.object.optionals)}
          </Radio.Group>
        </Form.Item>
      </Col>
    )
  }
}
