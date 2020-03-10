import { defaultPoint } from '../common/operator'

class Method {
  point_2(args, color) {
    return [[args[0], args[1], color]]
  }

  point_0(args, color) {
    return [[defaultPoint[0], defaultPoint[1], color]]
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
    args.unshift(defaultPoint[0], defaultPoint[1])
    return this.circle_3(args, color)
  }

  rectangle_4(args, color) {
    const res = []
    for (let i = args[0]; i < args[2] + args[0]; i++)
      for (let j = args[1]; j < args[3] + args[1]; j++)
        res.push([i, j, color])
    return res
  }

  rectangle_3(args, color) {
    args[3] = args[2]
    return this.rectangle_4(args, color)
  }

  rectangle_2(args, color) {
    args.unshift(defaultPoint[0], defaultPoint[1])
    return this.rectangle_4(args, color)
  }

  rectangle_1(args, color) {
    args.unshift(defaultPoint[0], defaultPoint[1])
    args[3] = args[2]
    return this.rectangle_4(args, color)
  }
}

export default Method
