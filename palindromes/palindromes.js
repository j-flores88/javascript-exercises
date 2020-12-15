const palindromes = function(str) {
    str = str.replace(/\s+/g, '');
    let arr = str.split('')
    let rev = []
  
      for (let i = 0; i < arr.length; i++) {
       if (arr[i].toUpperCase() === arr[i].toLowerCase()) {
         arr.splice(i, 1)
       } else {
         arr[i] = arr[i].toLowerCase();
       }
      }
      for(j = arr.length - 1; j >= 0; j--) {
        rev.push(arr[j])
      }
      for (let i = 0; i < arr.length; i++) {
       if (arr[i] != rev[i]) {
         return false;
       }
      }
    return true
  }

module.exports = palindromes
