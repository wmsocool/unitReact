import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Radio, Row, Col, Form } from "antd"

export default class InputUnit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      object: props.object,
      objectValue: props.objectValue
    }
  }
  componentWillMount = function() {
    if (isNotEmpty(this.state.objectValue[this.state.object.id])) {
    } else {
      this.setState(state => {
        state.objectValue[state.object.id] = 1
        return {
          objectValue: state.objectValue
        }
      })
    }
  }
  componentDidMount = function() {
    // console.log(this.state.objectValue[this.state.object.id])
  }
  onChangeFn = e => {
    var value = e.target.value
    this.setState(state => {
      state.objectValue[state.object.id] = value
      return {
        objectValue: state.objectValue
      }
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
        opt.push(
          <Radio key={index} value={item.value}>
            {item.title}
          </Radio>
        )
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
