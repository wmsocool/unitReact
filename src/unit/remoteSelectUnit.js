import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Select, Spin, Col, Form } from "antd"
const { Option } = Select

export default class SelectUnit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      fetching: false,
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
    // console.log(this.state.objectValue[this.state.object.id]);
  }
  onChangeFn = value => {
    this.props.objectValue[this.state.object.id] = value
    this.setState({
      data: [],
      fetching: false,
      objectValue: this.props.objectValue
    })
    this.state.object.onChange &&
      this.state.object.onChange.call(
        this.props.root,
        this.state.object,
        this.state.objectValue
      )
  }
  onSearchFn = value => {
    if (this.props.object.onSearchFn) {
      this.setState({
        data: this.props.object.onSearchFn(value),
        fetching: false
      })
    }
  }
  render() {
    return (
      <Col span={this.state.object.span}>
        <Form.Item
          required={this.state.object.required}
          label={this.state.object.title}
        >
          <Select
            allowClear
            size="small"
            mode="tag"
            showSearch
            labelInValue
            value={this.state.value}
            placeholder={this.state.object.placeholder || ""}
            value={this.state.objectValue[this.state.object.id]}
            notFoundContent={this.state.fetching ? <Spin size="small" /> : null}
            filterOption={false}
            onSearch={this.onSearchFn}
            onChange={this.onChangeFn}
            style={{ width: 160 }}
          >
            {this.state.data.map(d => (
              <Option key={d.value} value={d.value}>
                {d.title}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
    )
  }
}
