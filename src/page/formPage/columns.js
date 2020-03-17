export var columns = [
  {
    title: "运单信息",
    dataIndex: "operationTime",
    key: "operationTime",
    width: 150,
    children: [
      { title: "开单暂不走货", dataIndex: "id00", key: "id00", width: 150 },
      { title: "运单号", dataIndex: "id01", key: "id01", width: 150 },
      { title: "提前开单天数", dataIndex: "id02", key: "id02", width: 150 },
      {
        title: "开单暂不走货时间",
        dataIndex: "id03",
        key: "id03",
        width: 150
      },
      { title: "是否作废", dataIndex: "id04", key: "id04", width: 150 },
      { title: "签收", dataIndex: "id05", key: "id05", width: 150 },
      { title: "寄件日期", dataIndex: "id06", key: "id06", width: 150 },
      { title: "签收日期", dataIndex: "id07", key: "id07", width: 150 },
      { title: "产品名称", dataIndex: "id08", key: "id08", width: 150 },
      { title: "始发城市代码", dataIndex: "id09", key: "id09", width: 150 },
      { title: "目的城市代码", dataIndex: "id010", key: "id010", width: 150 },
      { title: "是否五包产品", dataIndex: "id011", key: "id011", width: 150 },
      { title: "收件客户姓名", dataIndex: "id012", key: "id012", width: 150 },
      { title: "收件公司", dataIndex: "id013", key: "id013", width: 150 },
      { title: "收件电话", dataIndex: "id014", key: "id014", width: 150 },
      { title: "收件手机", dataIndex: "id015", key: "id015", width: 150 },
      { title: "（派件）省", dataIndex: "id016", key: "id016", width: 150 },
      { title: "（派件）市", dataIndex: "id017", key: "id017", width: 150 },
      {
        title: "（派件）区/县",
        dataIndex: "id018",
        key: "id018",
        width: 150
      },
      {
        title: "（派件）镇/街道",
        dataIndex: "id019",
        key: "id019",
        width: 150
      },
      {
        title: "（派件）详细地址",
        dataIndex: "id020",
        key: "id020",
        width: 150
      },
      { title: "实际重量", dataIndex: "id021", key: "id021", width: 150 },
      { title: "计费重量", dataIndex: "id022", key: "id022", width: 150 },
      {
        title: "中转费计费重量",
        dataIndex: "id023",
        key: "id023",
        width: 150
      },
      { title: "体积", dataIndex: "id024", key: "id024", width: 150 },
      { title: "总件数", dataIndex: "id025", key: "id025", width: 150 }
    ]
  },
  {
    title: "收费信息",
    dataIndex: "balanceBefore",
    key: "balanceBefore",
    width: 150,
    children: [
      { title: "支付方式", dataIndex: "id10", key: "id10", width: 150 },
      { title: "现付", dataIndex: "id11", key: "id11", width: 150 },
      { title: "现付", dataIndex: "id12", key: "id12", width: 150 },
      { title: "到付", dataIndex: "id13", key: "id13", width: 150 },
      { title: "月结", dataIndex: "id14", key: "id14", width: 150 },
      { title: "协议计费类型", dataIndex: "id15", key: "id15", width: 150 },
      { title: "协议费率", dataIndex: "id16", key: "id16", width: 150 },
      { title: "计费类型", dataIndex: "id17", key: "id17", width: 150 },
      { title: "费率", dataIndex: "id18", key: "id18", width: 150 },
      { title: "折扣", dataIndex: "id19", key: "id19", width: 150 },
      { title: "运输费", dataIndex: "id110", key: "id110", width: 150 },
      { title: "其他费用", dataIndex: "id111", key: "id111", width: 150 },
      { title: "声明保价", dataIndex: "id112", key: "id112", width: 150 },
      { title: "保价方案", dataIndex: "id113", key: "id113", width: 150 },
      { title: "保价费率", dataIndex: "id114", key: "id114", width: 150 },
      { title: "保价费", dataIndex: "id115", key: "id115", width: 150 },
      { title: "代收运费", dataIndex: "id116", key: "id116", width: 150 },
      { title: "代收货款", dataIndex: "id117", key: "id117", width: 150 },
      { title: "代收金额", dataIndex: "id118", key: "id118", width: 150 },
      { title: "代收费率", dataIndex: "id119", key: "id119", width: 150 },
      { title: "代收手续费", dataIndex: "id120", key: "id120", width: 150 },
      { title: "代收类型", dataIndex: "id121", key: "id121", width: 150 },
      { title: "开单送货费", dataIndex: "id122", key: "id122", width: 150 },
      {
        title: "上楼费（床垫）",
        dataIndex: "id123",
        key: "id123",
        width: 150
      },
      {
        title: "上楼费（非床垫）",
        dataIndex: "id124",
        key: "id124",
        width: 150
      }
    ]
  },
  {
    title: "成本信息",
    dataIndex: "sendCost",
    key: "sendCost",
    width: 150,
    children: [
      { title: "中转费（标准）", dataIndex: "id20", key: "id20", width: 150 },
      { title: "中转费（优惠）", dataIndex: "id21", key: "id21", width: 150 },
      { title: "抽成中转费", dataIndex: "id22", key: "id22", width: 150 },
      { title: "收操作费", dataIndex: "id23", key: "id23", width: 150 },
      { title: "收短途费", dataIndex: "id24", key: "id24", width: 150 },
      { title: "收自提费", dataIndex: "id25", key: "id25", width: 150 },
      { title: "收送货费", dataIndex: "id26", key: "id26", width: 150 },
      { title: "代收货款手续费", dataIndex: "id27", key: "id27", width: 150 },
      { title: "保价费", dataIndex: "id28", key: "id28", width: 150 },
      {
        title: "收配送区域加收费用",
        dataIndex: "id29",
        key: "id29",
        width: 180
      },
      {
        title: "上楼费（床垫）",
        dataIndex: "id210",
        key: "id210",
        width: 150
      },
      {
        title: "上楼费（非床垫）",
        dataIndex: "id211",
        key: "id211",
        width: 150
      },
      { title: "五包安装费", dataIndex: "id212", key: "id212", width: 150 },
      { title: "五包支线费", dataIndex: "id213", key: "id213", width: 150 },
      { title: "收燃油费", dataIndex: "id214", key: "id214", width: 150 },
      { title: "收信息费", dataIndex: "id215", key: "id215", width: 150 },
      { title: "收标签费", dataIndex: "id216", key: "id216", width: 150 },
      { title: "收平台入仓费", dataIndex: "id217", key: "id217", width: 150 },
      { title: "收回单费", dataIndex: "id218", key: "id218", width: 150 },
      { title: "收托盘费", dataIndex: "id219", key: "id219", width: 150 },
      { title: "收木架费", dataIndex: "id220", key: "id220", width: 150 },
      { title: "面单费", dataIndex: "id221", key: "id221", width: 150 }
    ]
  },
  {
    title: "成本核算",
    dataIndex: "deliverIncome",
    key: "deliverIncome",
    width: 150,
    children: [
      { title: "收费合计", dataIndex: "id30", key: "id30", width: 150 },
      { title: "成本合计", dataIndex: "id31", key: "id31", width: 150 },
      { title: "毛利", dataIndex: "id32", key: "id32", width: 150 }
    ]
  },
  {
    title: "寄方",
    dataIndex: "collectingMoney",
    key: "collectingMoney",
    width: 150,
    children: [
      { title: "寄件网点", dataIndex: "id40", key: "id40", width: 150 },
      { title: "所属一级网点", dataIndex: "id41", key: "id41", width: 150 },
      {
        title: "寄件网点所属分拨中心",
        dataIndex: "id42",
        key: "id42",
        width: 200
      },
      {
        title: "寄件所属财务中心",
        dataIndex: "id43",
        key: "id43",
        width: 180
      },
      { title: "（寄件）省", dataIndex: "id44", key: "id44", width: 150 },
      { title: "（寄件）市", dataIndex: "id45", key: "id45", width: 150 },
      { title: "（寄件）区/县", dataIndex: "id46", key: "id46", width: 150 },
      { title: "寄件客户姓名", dataIndex: "id47", key: "id47", width: 150 },
      { title: "客户编码", dataIndex: "id48", key: "id48", width: 150 },
      { title: "寄件手机", dataIndex: "id49", key: "id49", width: 150 },
      { title: "寄件电话", dataIndex: "id410", key: "id410", width: 150 },
      { title: "寄件地址", dataIndex: "id411", key: "id411", width: 150 },
      { title: "寄件公司", dataIndex: "id412", key: "id412", width: 150 }
    ]
  },
  {
    title: "收方信息",
    dataIndex: "receivePayment",
    key: "receivePayment",
    width: 150,
    children: [
      { title: "派件网点", dataIndex: "id50", key: "id50", width: 150 },
      { title: "所属一级网点", dataIndex: "id51", key: "id51", width: 150 },
      {
        title: "派件网点所属分拨中心",
        dataIndex: "id52",
        key: "id52",
        width: 220
      },
      {
        title: "派件所属财务中心",
        dataIndex: "id53",
        key: "id53",
        width: 150
      }
    ]
  },
  {
    title: "货物信息",
    dataIndex: "payPayment",
    key: "payPayment",
    width: 150,
    children: [
      { title: "货物名称", dataIndex: "id60", key: "id60", width: 150 },
      { title: "包装类型", dataIndex: "id61", key: "id61", width: 150 },
      { title: "提/送货方式", dataIndex: "id62", key: "id62", width: 150 },
      { title: "送货楼层", dataIndex: "id63", key: "id63", width: 150 },
      { title: "大件件数", dataIndex: "id64", key: "id64", width: 150 },
      { title: "接货方式", dataIndex: "id65", key: "id65", width: 150 },
      { title: "床垫件数", dataIndex: "id66", key: "id66", width: 150 },
      { title: "床垫重量", dataIndex: "id67", key: "id67", width: 150 },
      { title: "床垫体积", dataIndex: "id68", key: "id68", width: 150 },
      { title: "超长件", dataIndex: "id69", key: "id69", width: 150 },
      { title: "超重件", dataIndex: "id610", key: "id610", width: 150 },
      { title: "托盘件数", dataIndex: "id611", key: "id611", width: 150 },
      { title: "托盘木架", dataIndex: "id612", key: "id612", width: 150 },
      { title: "车辆类型", dataIndex: "id613", key: "id613", width: 150 },
      { title: "车牌号", dataIndex: "id614", key: "id614", width: 150 },
      { title: "服务代表", dataIndex: "id615", key: "id615", width: 150 },
      { title: "备注", dataIndex: "id616", key: "id616", width: 150 }
    ]
  },
  {
    title: "其他信息",
    dataIndex: "recharge",
    key: "recharge",
    width: 150,
    children: [
      { title: "受款户名", dataIndex: "id70", key: "id70", width: 150 },
      { title: "个人/公司", dataIndex: "id71", key: "id71", width: 150 },
      { title: "退款方式", dataIndex: "id72", key: "id72", width: 150 },
      { title: "银行账号", dataIndex: "id73", key: "id73", width: 150 },
      { title: "联系电话", dataIndex: "id74", key: "id74", width: 150 },
      { title: "银行省市", dataIndex: "id75", key: "id75", width: 150 },
      { title: "银行名称", dataIndex: "id76", key: "id76", width: 150 },
      { title: "支行名称", dataIndex: "id77", key: "id77", width: 150 },
      { title: "是否内部走货", dataIndex: "id78", key: "id78", width: 150 },
      { title: "是否天猫订单", dataIndex: "id79", key: "id79", width: 150 },
      { title: "天猫订单", dataIndex: "id710", key: "id710", width: 150 },
      { title: "订单来源", dataIndex: "id711", key: "id711", width: 150 },
      { title: "订单号", dataIndex: "id712", key: "id712", width: 150 },
      { title: "收件业务员", dataIndex: "id713", key: "id713", width: 150 },
      { title: "回单类型", dataIndex: "id714", key: "id714", width: 150 },
      { title: "回单图片", dataIndex: "id715", key: "id715", width: 150 },
      { title: "签收单图片", dataIndex: "id716", key: "id716", width: 150 },
      { title: "上传时间", dataIndex: "id717", key: "id717", width: 150 },
      { title: "异常图片", dataIndex: "id718", key: "id718", width: 150 },
      { title: "创建人", dataIndex: "id719", key: "id719", width: 150 },
      { title: "创建时间", dataIndex: "id720", key: "id720", width: 150 },
      { title: "修改人", dataIndex: "id721", key: "id721", width: 150 },
      { title: "修改时间", dataIndex: "id722", key: "id722", width: 150 },
      { title: "是否打印面单", dataIndex: "id723", key: "id723", width: 150 },
      { title: "是否打印标签", dataIndex: "id724", key: "id724", width: 150 },
      { title: "承诺时效", dataIndex: "id725", key: "id725", width: 150 },
      { title: "达成时效", dataIndex: "id726", key: "id726", width: 150 }
    ]
  }
]
