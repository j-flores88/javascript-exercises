const fibonacci = function(num) {
    a = 0;
    b= 1;
    c = 1;
  
    if(typeof(num) === 'string') {
      num = parseInt(num)
    }
  
    if(num === 0) {
      return 0;
    } else if (num < 0) {
      return "OOPS"
    } else {
      for(let i = 2; i <= num; i++) {
        c = a + b;
  
        a = b
        b = c
        //console.log(a, b, c)
      }
        
    }
  return c
  }

module.exports = fibonacci
