import { message } from "antd";
export function isNotEmpty(data) {
  var isNotEmpty = false;
  if (typeof data == "string" && data != "") {
    isNotEmpty = true;
  } else if (typeof data == "number" && data != "") {
    isNotEmpty = true;
  } else if (typeof data == "array" && data.length > 0) {
    isNotEmpty = true;
  } else if (typeof data == "object") {
    var o = new RegExp(/^\{.*\}$/);
    var a = new RegExp(/^\[.*\]$/);
    if (JSON.stringify(data).match(a) && data.length > 0) {
      isNotEmpty = true;
    }
    if (JSON.stringify(data).match(o) && JSON.stringify(data) != "{}") {
      isNotEmpty = true;
    }
  }
  return isNotEmpty;
}

//排序
export function keysort(propertyName) {
  return function(obj1, obj2) {
    var val1 = obj1[propertyName];
    var val2 = obj2[propertyName];
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  };
}

//解析数据
export function parseData(res) {
  if (typeof res == "string" && res.indexOf("<") == 0) {
    document.write(res.data);
  }
  if (!res || res.result == "[]") {
    return false;
  }
  if (res.success) {
    var data = res.result || [];
    if (typeof data == "string") {
      try {
        data = JSON.parse(data);
      } catch (e) {
        console.log(e);
      }
    }
    return data;
  } else {
    message.error(res.errorMessage || res.message || "error");
    return false;
  }
}
export function copyJson(data) {
  return JSON.parse(JSON.stringify(data));
}

//通信组件
export var eventHub = {
  callbackLists: {},
  trigger(eventName, data) {
    let callbackList = this.callbackLists[eventName];
    if (!callbackList) {
      return;
    }
    for (let i = 0; i < callbackList.length; i++) {
      callbackList[i](data);
    }
  },
  on(eventName, callback) {
    if (!this.callbackLists[eventName]) {
      this.callbackLists[eventName] = [];
    }
    this.callbackLists[eventName].push(callback);
  }
};
