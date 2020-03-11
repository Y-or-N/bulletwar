class Method {
  point_2(args, color) {
    return [[args[0], args[1], color]]
  }

  point_0(args, color) {
    return [[Math.floor(Math.random() * 64) + 1, Math.floor(Math.random() * 36) + 1, color]]
  }

  circle_3(args, color) {
    if (args[2] == 1) return [[args[0], args[1], color]]
    const temp = [
        [[0, 2], [0, 0, 0], [2, 2, 2]],
        [[-1, 3], [0, -1, -1, -1, 0], [2, 3, 3, 3, 2]],
        [[-2, 4], [0, -1, -2, -2, -2, -1, 0], [2, 3, 4, 4, 4, 3, 2]],
        [[-3, 5], [-1, -2, -3, -3, -3, -3, -3, -2, -1], [3, 4, 5, 5, 5, 5, 5, 4, 3]]
      ],
      redius = args[2] - 2,
      res = []
    for (let i = temp[redius][0][0], k = 0; i <= temp[redius][0][1]; i++, k++)
      for (let j = temp[redius][1][k]; j <= temp[redius][2][k]; j++)
        res.push([j + args[0], i + args[1], color])
    return res
  }

  circle_2(args, color) {
    return [[args[0], args[1], color]]
  }

  circle_1(args, color) {
    args.unshift(Math.floor(Math.random() * 64) + 1, Math.floor(Math.random() * 36) + 1)
    return this.circle_3(args, color)
  }

  /**
   * 矩形 4参数
   * r x y width height
   * 高度宽度最大值为10
   * @param {x, y, width, height} args 横坐标， 纵坐标， 宽度， 高度
   * @param {string} color 颜色
   */
  rectangle_4(args, color) {
    const res = [],
      width = (args[2] > 10 ? 10 : args[2]) + args[0],
      height = (args[3] > 10 ? 10 : args[3]) + args[1]
    for (let i = args[0]; i < width; i++)
      for (let j = args[1]; j < height; j++)
        res.push([i, j, color])
    return res
  }

  rectangle_3(args, color) {
    args[3] = args[2]
    return this.rectangle_4(args, color)
  }

  /**
   * 矩形 2参数
   * r x y
   * 随机坐标
   * @param {width, height} args 宽度， 高度
   * @param {string} color 颜色
   */
  rectangle_2(args, color) {
    args.unshift(Math.floor(Math.random() * 64) + 1, Math.floor(Math.random() * 36) + 1)
    return this.rectangle_4(args, color)
  }

  rectangle_1(args, color) {
    args.unshift(Math.floor(Math.random() * 64) + 1, Math.floor(Math.random() * 36) + 1)
    args[3] = args[2]
    return this.rectangle_4(args, color)
  }
}

export default Method
