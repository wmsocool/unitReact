import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Row, Col, Form, DatePicker } from "antd"
import moment from "moment"
const { RangePicker } = DatePicker

export default class RangePickerUnit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      object: props.object,
      objectValue: props.objectValue
    }
  }
  componentWillMount = function() {
    if (isNotEmpty(this.state.objectValue[this.state.object.id])) {
      this.setState(state => {
        state.objectValue[state.object.id][0] &&
          (state.objectValue[state.object.id][0] = moment(
            state.objectValue[state.object.id][0]
          ))
        state.objectValue[state.object.id][1] &&
          (state.objectValue[state.object.id][1] = moment(
            state.objectValue[state.object.id][1]
          ))
        return {
          objectValue: state.objectValue
        }
      })
    } else {
      this.setState(state => {
        state.objectValue[state.object.id] = []
        return {
          objectValue: state.objectValue
        }
      })
    }
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
    return (
      <Col span={this.state.object.span}>
        <Form.Item
          required={this.state.object.required}
          label={this.state.object.title}
          labelCol={{ span: 5, offset: 0 }}
        >
          <RangePicker
            size="small"
            showTime={{ format: "HH:mm" }}
            format="YYYY-MM-DD HH:mm"
            disabled={this.state.object.disabled}
            defaultValue={this.state.objectValue[this.state.object.id]}
            placeholder={this.state.object.placeholder || ""}
            allowClear
            // onChange={this.onChangeFn}
            onOk={this.onChangeFn}
            // style={{ width: 222 }}
          />
        </Form.Item>
      </Col>
    )
  }
}
