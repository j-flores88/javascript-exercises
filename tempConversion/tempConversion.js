const ftoc = function(far) {
  if ((far - 32) * 5/9 === 0) {
    return 0
  } else {
    return Number(((far - 32) * 5/9).toFixed(1))
  }
}
const ctof = function() {

}

module.exports = {
  ftoc,
  ctof
}
