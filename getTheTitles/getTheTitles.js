const getTheTitles = function(bookList) {
    const result = [];
  
    for(let i = 0; i < bookList.length; i++) {
      let currentBook = bookList[i]
      for(let key in currentBook)
        //console.log(currentBook[key], key)
        if(key === 'title') {
          result.push(currentBook[key])
        }
    }
    return result
  }

module.exports = getTheTitles;
