/**
 * 数组转置
 */
function convert(a) {
  const b = []
  for (const i in a)
    for (const j in a[i])
      b[a[i][j]] = i
  return b
}

export {
  convert
}
