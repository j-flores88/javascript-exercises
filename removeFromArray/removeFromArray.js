const removeFromArray = function(arr, ...arguments) {
    let args = [...arguments]
  
    for(var i = 0; i < args.length; i++) {
      input = args[i]
      for(var j = 0; j < arr.length; j++) {
        if(input === arr[j]) {
          arr.splice(j, 1)
        }
      }
    }
    return arr
  }

module.exports = removeFromArray
