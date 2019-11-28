import startsWith from '../utils/expression'

const isEmail = word => {
  const match = word.match(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/
  )

  return match ? match[0] : false
}

export default (english, expected) => {
  const wantEmail = startsWith('email', expected)
  if (!wantEmail) {
    return false
  }

  const words = english.split(/[!?,;\s]+/)
  if (words.length === 0) {
    return false
  }

  const email = isEmail(words[0])

  const vars = {}
  if (wantEmail[1]) {
    vars[wantEmail[1]] = email
  }

  if (email) {
    return {
      englishLeft: english.replace(email, ''),
      expectedLeft: expected.replace(wantEmail[0], ''),
      vars,
    }
  }

  return false
}
