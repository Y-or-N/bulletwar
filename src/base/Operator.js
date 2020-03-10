import { colorMap, typeMap, defaultColor } from '../common/operator'
import { convert } from '../util/map-convert'
import { isNum } from '../util/get-type'
import Method from './Method'

class Operator {
  handle(str) {
    const {type, args, color} = this._split(str)
    if (!type) return []
    this._init()
    try {
      return this.method[this.typeMap[type] + '_' + args.length](args, this.colorMap[color] ? this.colorMap[color] : color)
    } catch (e) {
      return []
    }
  }

  _init() {
    this.colorMap = convert(colorMap)
    this.typeMap = convert(typeMap)
    this.method = new Method()
  }

  _split(str) {
    let type,
      color
    const args = [],
      message = str.split(/[,，（）()\s]+/)
    // 第一位是数字 返回空
    if (isNum(message[0]) !== false) return false
    else type = message[0]
    // 第一位不是数字
    for (let i = 1; i < message.length; i++) {
      const temp = isNum(message[i])
      // 如果遇到字符串，认为是最后一位，跳出循环
      if (temp === false) {
        color = message[i]
        break
      } else {
        // 转为int, 如果最后一位是数字，则在后面加black
        args[i - 1] = temp
        if (i == message.length - 1) color = defaultColor
      }
    }
    console.log({type, args, color})
    return {type, args, color}
  }
}

export default Operator
