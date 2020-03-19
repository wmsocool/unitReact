import React, { Component } from "react"
import { Row, Col } from "antd"
// import moment from "moment"
import LoadUnit from "../../common/loadUnit.js"
import {
  // isNotEmpty,
  // parseData,
  // copyJson,
  eventHub
} from "../../common/global.js"
import { getSomeThing } from "../../common/api.js"
const { object } = require("./object.js")
const { objectValue } = require("./objectValue.js")
export default class accountmanagement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      object,
      objectValue
    }
  }
  //--------------------------Style--------------------------//
  cssStyles = {
    blueColor: {
      color: "#fff",
      background: "#1890FF"
    },
    editColor: { color: "#ccc" },
    flexCenter: { display: "flex" },
    gorycolor: {
      color: "#999",
      fontSize: 12
    },
    cardhead: { borderBottom: 0, color: "#929292" },
    gory: {
      color: "#929292",
      fontSize: 12
    },
    formCss: {
      "ant-form-item": { "margin-bottom": "0px" }
    }
  }
  getInitialState = function() {}
  componentWillMount = function() {
    getSomeThing()
  }
  componentDidMount = function() {
    console.log(document.eventHub)
  }
  searchFn = (object, objectValue) => {
    this.setState({
      objectValue: objectValue
    })
  }
  renderFn = () => {
    var scope = this.state
    alert(scope.objectValue2[scope.object.id])
    this.setState({
      objectValue2: scope.objectValue2
    })
  }
  changeSearchType = e => {
    this.setState({ searchType: e.target.checked })
  }
  render() {
    return (
      <React.Fragment>
        <LoadUnit
          objects={this.state.object}
          objectValue={this.state.objectValue}
          onChangeFn={this.onChangeFn}
          root={this}
          $hub={eventHub}
          ref={child => (this.units = child)}
        />
        <Row style={{ marginTop: 10 }}>
          <Col span={24}>{JSON.stringify(this.state.objectValue)}</Col>
        </Row>
      </React.Fragment>
    )
  }
}

// export default Form.create()(Detail);
