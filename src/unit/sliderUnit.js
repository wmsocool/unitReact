import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Slider, Col, Form } from "antd"

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
      this.state.objectValue[this.state.object.id] = ""
    }
  }
  componentDidMount = function() {
    console.log(this.state.objectValue[this.state.object.id])
  }
  onChangeFn = value => {
    this.props.objectValue[this.state.object.id] = value
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
        >
          <Slider
            marks={this.state.object.optionals}
            tooltipVisible
            min={1}
            max={30}
            step={null}
            defaultValue={this.state.objectValue[this.state.object.id]}
            onChange={this.onChangeFn}
          />
        </Form.Item>
      </Col>
    )
  }
}
