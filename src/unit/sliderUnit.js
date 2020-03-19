import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Slider, Row, Col, Form } from "antd"

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
    var value = e
    this.setState(state => {
      state.objectValue[state.object.id][0] = value
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
