const reverseString = function(str) {
    const result = ''
  
    const strArr = str.split('')
    const newArr = []
  
    for(var i = strArr.length - 1; i >= 0; i--) {
      newArr.push(strArr[i])
    }
    return newArr.join('')
}

module.exports = reverseString
