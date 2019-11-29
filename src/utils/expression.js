const startWithExpression = (type, expression) => {
  const regexp = new RegExp(`^\\{\\s*${type}\\s*:?\\s*([a-zA-Z]*)?\\s*\\}`)
  return expression.match(regexp)
}

const findWordMatching = (word, regex) => {
  const match = word.match(regex)
  return match ? match[0] : false
}

export const buildExpressionParser = (expression, regex) => (
  english,
  expected
) => {
  const wantExpression = startWithExpression(expression, expected)
  if (!wantExpression) {
    return false
  }

  const words = english.split(/[!?,;\s]+/)
  if (words.length === 0) {
    return false
  }

  const word = findWordMatching(words[0], regex)

  const vars = {}
  if (wantExpression[1]) {
    vars[wantExpression[1]] = word
  }

  if (word) {
    return {
      englishLeft: english.replace(word, ''),
      expectedLeft: expected.replace(wantExpression[0], ''),
      vars,
    }
  }

  return false
}

export default startWithExpression
