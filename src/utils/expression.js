export default (type, expression) => {
  const regexp = new RegExp(`^\\{\\s*${type}\\s*:?\\s*([a-zA-Z]*)?\\s*\\}`)
  return expression.match(regexp)
}
