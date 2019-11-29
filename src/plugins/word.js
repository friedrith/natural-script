import { buildExpressionParser } from '../utils/expression'

const wordRegex = /([a-zA-Z]+)/

export default buildExpressionParser('word', wordRegex)
