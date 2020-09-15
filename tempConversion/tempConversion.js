const ftoc = function(far) {
  if ((far - 32) * 5/9 === 0) {
    return 0
  } else {
    return Number(((far - 32) * 5/9).toFixed(1))
  }
}
const ctof = function(cel) {
  return Number((cel * 9/5 + 32).toFixed(1))
}

module.exports = {
  ftoc,
  ctof
}
