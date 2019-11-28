import { WordTokenizer, JaroWinklerDistance } from 'natural'
import defaultOptions from './default-options'

/*
const natural = require('natural')
const tokenizer = new natural.WordTokenizer()

const MAX_DISTANCE = 0.8
const chrono = require('chrono-node')

function concat(block1, block2) {
  if (block2 === false) {
    return false
  } else if (block2 === true) {
    return block1
  } else if (block1 === true) {
    return block2
  } else if (block1 === false) {
    return false
  } else if (typeof block2 === 'object') {
    var result = {}
    for (var key in block1) {
      result[key] = block1[key]
    }

    for (var key in block2) {
      result[key] = block2[key]
    }

    return result
  }
}

var categories = {
  date: require('./categories/date'),
  capital_city: require('./categories/capital-city'),
  color: require('./categories/color'),
  occurrence: require('./categories/occurrence'),
  integer: require('./categories/integer'),
  email: require('./categories/email'),
  url: require('./categories/url'),
}

function parse(sentence, expression) {
  var result = parseAux(sentence, expression)
  // console.log(result);

  if (
    typeof result == 'object' &&
    Object.keys(result).length === 0 &&
    result.constructor === Object
  ) {
    return true
  } else {
    return result
  }
}

function parseAux(sentence, expression) {
  // console.log('parse', '"'+sentence+'"', '"'+expression+'"');
  var wordRegex = /^[a-zA-Z0-9]+/
  var formatRegex = /^(?:\{\{[ ]*([a-z\_]+[ ]*(?:\:[ ]*[a-z\_]+){0,1})[ ]*\}\})/
  var words = tokenizer.tokenize(sentence)
  if (sentence.match(/^[ ]+/)) {
    return parseAux(sentence.replace(/^[ ]+/, ''), expression)
  } else if (expression.match(/^[ ]+/)) {
    return parseAux(sentence, expression.replace(/^[ ]+/, ''))
  } else if (words.length == 0) {
    // console.log('length 0/0');
    if (expression.match(/^[ ]*$/)) {
      return true
    } else {
      return false
    }
  } else if (expression == '') {
    // console.log('length 0/1', expression, sentence);

    // end
    if (sentence == '') {
      return true
    } else {
      return false
    }
  } else if (expression.match(wordRegex)) {
    // console.log('simple word found');
    // simple word found
    var expectedWord = expression.match(wordRegex)[0]
    var realWord = words[0]
    var distance = natural.JaroWinklerDistance(realWord, expectedWord)
    // console.log(distance);
    if (distance > MAX_DISTANCE) {
      return parseAux(
        sentence.replace(realWord, ''),
        expression.replace(expectedWord, '')
      )
    } else {
      return false
    }
  } else if (expression.match(formatRegex)) {
    // console.log(expression.match(formatRegex));
    var currentCategory = expression.match(formatRegex)[1]
    var varCat = ''
    var varName = null
    if (currentCategory.match(/[a-z\_]+\:[a-z\_]+/)) {
      var split = currentCategory.replace(' ', '').split(':')
      varCat = split[0]
      varName = split[1]
    } else {
      varCat = currentCategory
    }

    // console.log(varType);
    if (categories[varCat]) {
      var partialResult = categories[varCat](sentence, varName)
      // console.log(partialResult);
      if (partialResult) {
        var newSentence = partialResult.left
        var newResult = parseAux(
          newSentence,
          expression.replace(formatRegex, '')
        )
        // console.log(result)
        return concat(partialResult.vars, newResult)
      } else {
        return false
      }
    } else {
      throw 'category "' + varCat + '" is not managed'
    }
  }
}

function addCategory(name, parser) {
  categories[name] = parser
}

module.exports = { categories, addCategory, parse }

*/

const tokenizer = new WordTokenizer()

export const parse = (english, script, options = defaultOptions) => {
  const words = tokenizer.tokenize(english)

  const distance = JaroWinklerDistance(english, script)

  console.log('distance', distance)

  return distance > options.maxDistance
}

export default {
  parse,
}
