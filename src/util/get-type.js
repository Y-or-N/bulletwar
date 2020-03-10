function isNum(string) {
  const _string = parseInt(string)
  return _string == string ? _string : false
}

export {
  isNum
}
