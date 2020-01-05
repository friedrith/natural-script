import { buildExpressionParser } from '../utils/expression'

const urlRegex = /^(|http(|s)?:\/\/)(www\.)?[-a-zA-Z0-9@:%.\s+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\s+.~#?&//=]*)/

export default buildExpressionParser('url', urlRegex)
