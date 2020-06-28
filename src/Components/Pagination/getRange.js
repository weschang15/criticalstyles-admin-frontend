const getRange = (c, m) => {
  var delta = 2,
    range = [],
    rangeWithDots = [],
    l

  range.push(1)
  for (let i = c - delta; i <= c + delta; i++) {
    if (i < m && i > 1) {
      range.push(i)
    }
  }
  range.push(m)

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push("...")
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
}

export { getRange }
