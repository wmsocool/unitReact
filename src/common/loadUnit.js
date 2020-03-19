import React, { Component } from "react"
import TheUnit from "./theUnit.js"
import { Form, Row, Input } from "antd"
class CreateForm extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
    })
  }
  makeUnits = units => {
    var unitx = []
    units.forEach((item, index) => {
      unitx.push(
        <TheUnit
          key={index}
          object={item}
          {...this.props}
          ref={child => (this[item.id] = child)}
        />
      )
    })
    return unitx
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Row style={{ marginTop: 10 }}>
        <Form
          size="small"
          labelAlign="left"
          hideRequiredMark={true}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          onSubmit={this.handleSubmit}
        >
          {this.makeUnits(this.props.objects)}
          <Form.Item label="包仓费">
            {getFieldDecorator(`packageStorageCharge`, {
              rules: [
                {
                  required: true,
                  type: "string",
                  message: "必填"
                }
              ]
            })(<Input placeholder="包仓费" />)}
          </Form.Item>
        </Form>
      </Row>
    )
  }
}
// export default Form.create()(CreateForm)
export default CreateForm
