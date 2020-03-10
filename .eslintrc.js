module.exports = {
  env: {
    'browser': true,
    'node': true
  },
  extends: [
  	'eslint:recommended', 
  	'plugin:react/recommended', 
  	'ivweb'
  ],
  rules: {
  	//error; 使用两个空格作为缩进
  	'indent': [2, 2],
  	//off; 结尾后可以没有分号
  	'semi': 0,
  },
  globals: {
    'ArrayBuffer': true,
    'DataView': true,
  }
}