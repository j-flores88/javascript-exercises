const caesar = function(str, shift) {
    let result = []
  
    for(i = 0; i < str.length; i++) {
      if(/[a-zA-z]/.test(str[i])) {
        const start = str[i] === str[i].toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        const diff = str[i].charCodeAt(0) - start;
        const move = shift >= 0 ? diff + shift : diff + Math.abs(26 - Math.abs(shift));
        const code = move % 26 + start
        result.push(String.fromCharCode(code))
        //console.log(str[i].charCodeAt(0), start, diff, move, code)
      } else {
        result.push(str[i])
      }
    }
    return result.join('');
  }
module.exports = caesar
