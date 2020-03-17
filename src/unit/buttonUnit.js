import React, { Component } from "react"
import { isNotEmpty } from "../common/global.js"
import { Button } from "antd"

export default class ButtonUnit extends Component {
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
  onClickFn = e => {
    // this.state.object.onClick = this.state.object.onClick.bind(this.props.root)
    // this.state.object.onClick()
    this.state.object.onClick &&
      this.state.object.onClick.call(
        this.props.root,
        this.state.object,
        this.state.objectValue
      )
  }
  render() {
    return (
      <Button
        style={{ marginRight: 5 }}
        type="primary"
        onClick={this.onClickFn}
      >
        {this.state.object.title}
      </Button>
    )
  }
}
