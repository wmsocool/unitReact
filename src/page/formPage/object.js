export var object = [
  {
    id: "key001",
    span: 24,
    title: "textareaUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "textareaUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key003",
    span: 10,
    title: "rangePickerUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "请选择",
    unitType: "rangePickerUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key004",
    span: 14,
    title: "radioUnit",
    optionals: [
      { value: "1", title: "1天" },
      { value: "3", title: "3天" },
      { value: "7", title: "7天" },
      { value: "15", title: "15天" },
      { value: "30", title: "30天" }
    ],
    required: false,
    disabled: false,
    defaultValue: 1,
    placeholder: "",
    unitType: "radioUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key005",
    span: 6,
    title: "remoteSelectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: function(value) {
      return [
        {
          value: "guangzhou",
          title: "广州"
        },
        {
          value: "shenzhen",
          title: "深圳"
        }
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key006",
    span: 6,
    title: "remoteSelectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: value => {
      return [
        {
          value: "guangzhou",
          title: "广州"
        },
        {
          value: "shenzhen",
          title: "深圳"
        }
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key007",
    span: 6,
    title: "inputUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "inputUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key008",
    span: 6,
    title: "inputUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "inputUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key009",
    span: 6,
    title: "selectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Qwn2", title: "现付" },
      { value: "sQ2Qyn2", title: "到付" },
      { value: "sQ2Q_o2", title: "月结/欠款" },
      { value: "sQ2Q1o2", title: "多笔付" }
    ],
    placeholder: "请不要选我",
    unitType: "selectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00a",
    span: 6,
    title: "remoteSelectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: value => {
      return [
        {
          value: "guangzhou",
          title: "广州"
        },
        {
          value: "shenzhen",
          title: "深圳"
        }
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00b",
    span: 6,
    title: "状态",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Qu3", title: "未签收" },
      { value: "sQ2Qw3", title: "已签收" },
      { value: "sQ2Qy3", title: "正常签收" },
      { value: "sQ2Q_4", title: "异常签收" }
    ],
    placeholder: "请不要选我",
    unitType: "selectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00c",
    span: 6,
    title: "numberRangeUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "numberRangeUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00d",
    span: 6,
    title: "付款",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "numberRangeUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00e",
    span: 6,
    title: "收款",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "numberRangeUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00f",
    span: 6,
    title: "状态",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "key1", title: "选择1" },
      { value: "key2", title: "选择2" }
    ],
    placeholder: "请不要选我",
    unitType: "selectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00g",
    span: 6,
    title: "selectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Q5o2", title: "顺丰订单" },
      { value: "sQ2Q7o2", title: "沃埃家订单" },
      { value: "sQ2Q9o2", title: "EDI大客户" },
      { value: "sQ2Qbo2", title: "淘宝会员" },
      { value: "sQ2Qdo2", title: "阿里诚信通" },
      { value: "sQ2Qfo2", title: "阿里普通客" },
      { value: "sQ2Qho2", title: "顺心官网" },
      { value: "sQ2Qjo2", title: "微信下单" },
      { value: "sQ2Qlo2", title: "客户下单" },
      { value: "sQ2Qno2", title: "京东订单" },
      { value: "sQ2Qpo2", title: "400下单" },
      { value: "sQ2Qro2", title: "金蝶客户" },
      { value: "sQ2Qto2", title: "天猫订单" },
      { value: "sQ2Qvo2", title: "快递鸟" },
      { value: "sQ2Qxo2", title: "拼多多" },
      { value: "sQ2Qzo2", title: "发货易" },
      { value: "sQ2Q0p2", title: "官网小程序" }
    ],
    placeholder: "请不要选我",
    unitType: "selectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00h",
    span: 6,
    title: "city",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: value => {
      return [
        {
          value: "guangzhou",
          title: "广州"
        },
        {
          value: "shenzhen",
          title: "深圳"
        }
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00i",
    span: 6,
    title: "目的",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: value => {
      return [
        {
          value: "guangzhou",
          title: "广州"
        },
        {
          value: "shenzhen",
          title: "深圳"
        }
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00j",
    span: 6,
    title: "区县",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: value => {
      return [
        {
          value: "guangzhou",
          title: "广州"
        },
        {
          value: "shenzhen",
          title: "深圳"
        }
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00k",
    span: 6,
    title: "产品",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: function(value) {
      return [
        {
          value: "guangzhou",
          title: "广州"
        },
        {
          value: "shenzhen",
          title: "深圳"
        }
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00l",
    span: 6,
    title: "inputUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Qj6", title: "全部" },
      { value: "sQ2Ql6", title: "是" },
      { value: "sQ2Qn6", title: "否" }
    ],
    placeholder: "Don't input me",
    unitType: "inputUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00m",
    span: 6,
    title: "selectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Qj6", title: "全部" },
      { value: "sQ2Ql6", title: "是" },
      { value: "sQ2Qn6", title: "否" }
    ],
    placeholder: "请不要选我",
    unitType: "selectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    }
  },
  {
    id: "key00n",
    span: 6,
    title: "submit",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function(object, objectValue) {
      this.searchFn(object, objectValue)
    }
  }
]
export var data = {
  key001: "default text",
  key003: ["2020-03-19T01:38:52.751Z", "2020-03-20T01:38:52.751Z"],
  key004: "1",
  key005: { value: "guangzhou", label: "广州", key: "guangzhou" },
  key006: { value: "shenzhen", label: "深圳", key: "shenzhen" },
  key007: "2",
  key008: "1",
  key009: "sQ2Qyn2",
  key00a: { value: "shenzhen", label: "深圳", key: "shenzhen" },
  key00b: "sQ2Qw3",
  key00c: ["1", "4"],
  key00d: ["2", "4"],
  key00e: ["3", "5"],
  key00f: "key1",
  key00g: "sQ2Qbo2",
  key00h: { value: "shenzhen", label: "深圳", key: "shenzhen" },
  key00i: { value: "shenzhen", label: "深圳", key: "shenzhen" },
  key00j: { value: "guangzhou", label: "广州", key: "guangzhou" },
  key00k: { value: "guangzhou", label: "广州", key: "guangzhou" },
  key00l: "呀呀呀呀呀呀",
  key00m: "sQ2Ql6",
  key00n: ""
}
