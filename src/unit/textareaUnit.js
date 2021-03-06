import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Input, Col, Form } from "antd"
const { TextArea } = Input

export default class extends Component {
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
    return (
      <Col span={this.state.object.span}>
        <Form.Item
          required={this.state.object.required}
          label={this.state.object.title}
          labelCol={{ span: 2, offset: 0 }}
        >
          <TextArea
            autoSize={{ minRows: 2, maxRows: 6 }}
            placeholder={this.state.object.placeholder || ""}
            disabled={this.state.object.disabled}
            value={this.state.objectValue[this.state.object.id]}
            allowClear
            size="small"
            onChange={this.onChangeFn}
          />
        </Form.Item>
      </Col>
    )
  }
}
