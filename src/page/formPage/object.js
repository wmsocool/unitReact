export var object = [
  {
    id: "edit",
    span: 3,
    title: "编辑",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function(object, ovjectValue) {
      this.editFn(object, ovjectValue)
    }
  },
  {
    id: "save",
    span: 3,
    title: "保存",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function() {
      this.typeMenuFn()
    }
  },
  {
    id: "zuofei",
    span: 3,
    title: "作废",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function() {
      this.saveFn()
    }
  },
  {
    id: "export",
    span: 3,
    title: "导出",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function() {
      this.saveFn()
    }
  },
  {
    id: "history",
    span: 3,
    title: "历史",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function() {
      this.saveFn()
    }
  },
  {
    id: "upload",
    span: 3,
    title: "上传委托书",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function() {
      this.saveFn()
    }
  },
  {
    id: "addOrder",
    span: 3,
    title: "新增运单",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function() {
      this.saveFn()
    }
  },
  {
    id: "copyOrder",
    span: 3,
    title: "复制开单",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function() {
      this.saveFn()
    }
  },
  {
    id: "orderNotgoods",
    span: 3,
    title: "开单暂不走货",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function() {
      this.saveFn()
    }
  },
  {
    id: "beasCount",
    span: 3,
    title: "成本计算",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function() {
      this.saveFn()
    }
  },
  {
    id: "key001",
    span: 12,
    title: "按单号查询",
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
    id: "key002",
    span: 3,
    title: "查询",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function(object, objectValue) {
      this.searchFn(object, objectValue)
    }
  },
  {
    id: "key003",
    span: 10,
    title: "寄件时间",
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
    title: "",
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
    title: "寄件网点",
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
    title: "派件网点",
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
    title: "寄件客户",
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
    title: "收件客户",
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
    title: "支付方式",
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
    title: "取件员",
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
    title: "签收状态",
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
    title: "重量段",
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
    title: "到付款",
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
    title: "代收货款",
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
    title: "运单状态",
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
    title: "订单来源",
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
    title: "目的省份",
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
    title: "目的城市",
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
    title: "目的区县",
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
    title: "产品名称",
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
    title: "开单暂不走货",
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
    title: "调整中转费重泡比",
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
    title: "查询",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function(object, objectValue) {
      this.searchFn(object, objectValue)
    }
  }
]
export var data = [
  {
    id00: "id00",
    id01: "id01",
    id02: "id02",
    id03: "id03",
    id04: "id04",
    id05: "id05",
    id06: "id06",
    id07: "id07",
    id08: "id08",
    id09: "id09",
    id010: "id010",
    id011: "id011",
    id012: "id012",
    id013: "id013",
    id014: "id014",
    id015: "id015",
    id016: "id016",
    id017: "id017",
    id018: "id018",
    id019: "id019",
    id020: "id020",
    id021: "id021",
    id022: "id022",
    id023: "id023",
    id024: "id024",
    id025: "id025",
    id10: "id10",
    id11: "id11",
    id12: "id12",
    id13: "id13",
    id14: "id14",
    id15: "id15",
    id16: "id16",
    id17: "id17",
    id18: "id18",
    id19: "id19",
    id110: "id110",
    id111: "id111",
    id112: "id112",
    id113: "id113",
    id114: "id114",
    id115: "id115",
    id116: "id116",
    id117: "id117",
    id118: "id118",
    id119: "id119",
    id120: "id120",
    id121: "id121",
    id122: "id122",
    id123: "id123",
    id124: "id124",
    id20: "id20",
    id21: "id21",
    id22: "id22",
    id23: "id23",
    id24: "id24",
    id25: "id25",
    id26: "id26",
    id27: "id27",
    id28: "id28",
    id29: "id29",
    id210: "id210",
    id211: "id211",
    id212: "id212",
    id213: "id213",
    id214: "id214",
    id215: "id215",
    id216: "id216",
    id217: "id217",
    id218: "id218",
    id219: "id219",
    id220: "id220",
    id221: "id221",
    id30: "id30",
    id31: "id31",
    id32: "id32",
    id40: "id40",
    id41: "id41",
    id42: "id42",
    id43: "id43",
    id44: "id44",
    id45: "id45",
    id46: "id46",
    id47: "id47",
    id48: "id48",
    id49: "id49",
    id410: "id410",
    id411: "id411",
    id412: "id412",
    id50: "id50",
    id51: "id51",
    id52: "id52",
    id53: "id53",
    id60: "id60",
    id61: "id61",
    id62: "id62",
    id63: "id63",
    id64: "id64",
    id65: "id65",
    id66: "id66",
    id67: "id67",
    id68: "id68",
    id69: "id69",
    id610: "id610",
    id611: "id611",
    id612: "id612",
    id613: "id613",
    id614: "id614",
    id615: "id615",
    id616: "id616",
    id70: "id70",
    id71: "id71",
    id72: "id72",
    id73: "id73",
    id74: "id74",
    id75: "id75",
    id76: "id76",
    id77: "id77",
    id78: "id78",
    id79: "id79",
    id710: "id710",
    id711: "id711",
    id712: "id712",
    id713: "id713",
    id714: "id714",
    id715: "id715",
    id716: "id716",
    id717: "id717",
    id718: "id718",
    id719: "id719",
    id720: "id720",
    id721: "id721",
    id722: "id722",
    id723: "id723",
    id724: "id724",
    id725: "id725",
    id726: "id726"
  }
]
