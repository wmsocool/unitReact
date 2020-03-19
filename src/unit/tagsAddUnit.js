import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Tag, Input, Row, Col, Form, Tooltip } from "antd"
const { TextArea } = Input

export default class InputUnit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
      inputVisible: false,
      inputValue: "",
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
  onChangeFn = () => {
    var value = this.state.tags
    this.setState(state => {
      state.objectValue[this.state.object.id][0] = value
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
    this.input.focus()
  }
  alertMe = text => {
    alert(text)
  }
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag)
    console.log(tags)
    this.setState({ tags })
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  handleInputConfirm = () => {
    const { inputValue } = this.state
    let { tags } = this.state
    inputValue.split(/\r|\n|\\s|,|;/g).forEach((value, index) => {
      if (value && tags.indexOf(value) === -1) {
        tags = [...tags, inputValue]
      }
    })
    console.log(tags)
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ""
    })
    this.onChangeFn()
  }

  saveInputRef = input => (this.input = input)
  render() {
    const { tags, inputVisible, inputValue } = this.state
    return (
      <Col span={this.state.object.span}>
        <Form.Item
          required={this.state.object.required}
          label={this.state.object.title}
        >
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20
            const tagElem = (
              <Tag
                key={tag}
                closable={index !== 0}
                onClose={() => this.handleClose(tag)}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            )
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            )
          })}
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
          <TextArea
            ref={this.saveInputRef}
            autoSize={true}
            value={inputValue}
            placeholder={this.state.object.placeholder || ""}
            disabled={this.state.object.disabled}
            defaultValue={this.state.objectValue[this.state.object.id]}
            // style={{ width: 130 }}
            allowClear
            size="small"
            // onChange={this.onChangeFn}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        </Form.Item>
      </Col>
    )
  }
}
