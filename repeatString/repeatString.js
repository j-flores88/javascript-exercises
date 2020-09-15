const repeatString = function(str, num) {
    result = ''
    const number = Math.floor(Math.random() * 1000)
  
    if(num === undefined) {
      for (var i = 0; i < number; i++) {
      result += str;
      }
    } else if (num < 0) {
      return 'ERROR'
    } else {
      for (var i = 0; i < num; i++) {
        result += str
      }
    }
    return result
  }

module.exports = repeatString
