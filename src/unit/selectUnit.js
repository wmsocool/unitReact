import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Row, Select, Col, Form } from "antd"
var Option = Select.Option

export default class SelectUnit extends Component {
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
        state.objectValue[state.object.id] = ""
        return {
          objectValue: state.objectValue
        }
      })
    }
  }
  componentDidMount = function() {
    // console.log(this.state.objectValue[this.state.object.id]);
  }
  onChangeFn = e => {
    var value = e
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
  render() {
    var getOptionals = optionals => {
      var opt = []
      optionals.forEach((item, index) => {
        opt.push(
          <Option key={item.id + index} value={item.value}>
            {item.title}
          </Option>
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
          <Select
            allowClear
            size="small"
            placeholder={this.state.object.placeholder || ""}
            defaultValue={this.state.objectValue[this.state.object.id]}
            style={{ width: 130 }}
            onChange={this.onChangeFn}
          >
            {getOptionals(this.state.object.optionals)}
          </Select>
        </Form.Item>
      </Col>
    )
  }
}
