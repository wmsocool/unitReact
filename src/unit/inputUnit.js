import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Input, Col, Form } from "antd"

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
      this.state.objectValue[this.state.object.id] = ""
    }
  }
  componentDidMount = function() {
    // console.log(this.state.objectValue[this.state.object.id])
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
    return (
      <Col span={this.state.object.span}>
        <Form.Item
          required={this.state.object.required}
          label={this.state.object.title}
          {...this.state.object.formItemCol}
        >
          <Input
            placeholder={this.state.object.placeholder || ""}
            disabled={this.state.object.disabled}
            defaultValue={this.state.objectValue[this.state.object.id]}
            style={{ width: 130 }}
            allowClear
            size="small"
            onChange={this.onChangeFn}
          />
        </Form.Item>
      </Col>
    )
  }
}
