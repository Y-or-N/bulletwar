import Operator from './Operator'

class Canvas {
  constructor(id, room) {
    const canvas = document.getElementById(id)
    this.context = canvas.getContext('2d')
    this._init()
    const operator = new Operator(),
      that = this
    room.$start().$subscribe(function (res) {
      const pointsArr = operator.handle(res)
      console.log(res, pointsArr)
      for (const i in pointsArr)
        that._setPoint(pointsArr[i])
    })
  }

  _init() {
    this.context.lineWidth = 1
    const size = 5,
      realSize = size * 6,
      color = ['#f8f8f8', '#c8c8c8', '#a0a0a0']
    let x,
      y
    for (let i = 0, t = 1; i < 3, this.context.strokeStyle = color[i]; i++, t = Math.pow(5, i))
      for (let j = t; j <= (1920 / realSize); j += ((j + t) % (5 * t) == 0 && i != 2) ? 2 * t : t) {
        x = realSize * j - 0.5
        this.context.beginPath(); this.context.moveTo(x, 0); this.context.lineTo(x, 1080); this.context.stroke()
        if (j > (1080 / realSize)) continue
        y = 1080 - (realSize * j - 0.5)
        this.context.beginPath(); this.context.moveTo(0, y); this.context.lineTo(1920, y); this.context.stroke()
      }
  }

  _setPoint(val) {
    const x = (val[0] - 1) * 30 + 0.5,
      y = 1080 - ((val[1] - 1) * 30 + 0.5)
    this.context.fillStyle = '#fff'
    this.context.fillRect(x, y, 28, -28)
    this.context.fillStyle = val[2]
    this.context.fillRect(x, y, 28, -28)
  }
}

export default Canvas
