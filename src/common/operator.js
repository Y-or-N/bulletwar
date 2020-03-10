const colorMap = {
    black: ['black', 'b', '黑', '黑色'],
    red: ['red', 'r', '红', '红色']
  },
  typeMap = {
    point: ['point', 'p', '画点', '点'],
    circle: ['circle', 'c', '画圆', '圆'],
    rectangle: ['rectangle', 'r', '画矩形', '矩形', '画块']
  },
  defaultColor = 'black',
  defaultPoint = [Math.floor(Math.random() * 64) + 1, Math.floor(Math.random() * 36) + 1]

export {
  colorMap,
  typeMap,
  defaultColor,
  defaultPoint
}
