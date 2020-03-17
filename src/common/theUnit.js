import React, { Component } from "react"
export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return React.createElement(
      require("../unit/" + this.props.object.unitType + ".js").default,
      {
        ...this.props,
        ref: unit => (this.unit = unit)
      }
    )
  }
}
