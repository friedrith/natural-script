module.exports = function(sentence, varName) {
  if (typeof sentence !== 'string' || sentence == '') {
    return false
  }

  let spaceIndex = sentence.indexOf(' ')
  let firstWord = ''
  if (spaceIndex == -1) {
    firstWord = sentence
  } else {
    firstWord = sentence.substring(0, spaceIndex)
  }

  // console.log(firstWord);
  if (!isNaN(firstWord)) {
    var left = ''
    if (spaceIndex != -1) {
      left = sentence.substring(spaceIndex + 1)
    }
    let result = {
      left: left,
      vars: {},
    }

    if (varName) {
      result.vars[varName] = { text: firstWord, integer: parseInt(firstWord) }
    }
    return result
  } else {
    return false
  }
}
