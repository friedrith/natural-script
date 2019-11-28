var colors = []

var modifiers = ['dark', 'light']

const modifierParser = require('../modifier')

module.exports = function(sentence, varName) {
  if (typeof sentence === 'string' && sentence != '') {
    var prep = modifierParser(sentence, modifiers)
    if (prep) {
      sentence = prep.left
    }

    var lowerSentence = sentence.toLowerCase()

    for (var i = 0; i < colors.length; i++) {
      if (lowerSentence.startsWith(colors[i].name)) {
        var result = {
          left: sentence.slice(colors[i].name.length),
          vars: {},
        }

        if (varName) {
          result.vars[varName] = colors[i]
          if (prep) {
            result.vars[varName].modifier = prep.modifier
          }
        }

        return result
      }
    }
  }
  return false
}

colors = [
  { name: 'amaranth', hex: 'E52B50', rgb: { red: 229, green: 43, blue: 80 } },
  { name: 'amber', hex: 'FFBF00', rgb: { red: 255, green: 191, blue: 0 } },
  { name: 'amethyst', hex: '9966CC', rgb: { red: 153, green: 102, blue: 204 } },
  { name: 'apricot', hex: 'FBCEB1', rgb: { red: 251, green: 206, blue: 177 } },
  {
    name: 'aquamarine',
    hex: '7FFFD4',
    rgb: { red: 127, green: 255, blue: 212 },
  },
  { name: 'azure', hex: '007FFF', rgb: { red: 0, green: 127, blue: 255 } },
  {
    name: 'baby blue',
    hex: '89CFF0',
    rgb: { red: 137, green: 207, blue: 240 },
  },
  { name: 'beige', hex: 'F5F5DC', rgb: { red: 245, green: 245, blue: 220 } },
  { name: 'black', hex: '000000', rgb: { red: 0, green: 0, blue: 0 } },
  { name: 'blue-green', hex: '0095B6', rgb: { red: 0, green: 149, blue: 182 } },
  {
    name: 'blue-violet',
    hex: '8A2BE2',
    rgb: { red: 138, green: 43, blue: 226 },
  },
  { name: 'cobalt blue', hex: '0047AB', rgb: { red: 0, green: 71, blue: 171 } },
  {
    name: 'electric blue',
    hex: '7DF9FF',
    rgb: { red: 125, green: 249, blue: 255 },
  },
  { name: 'blush', hex: 'DE5D83', rgb: { red: 222, green: 93, blue: 131 } },
  { name: 'bronze', hex: 'CD7F32', rgb: { red: 205, green: 127, blue: 50 } },
  { name: 'brown', hex: '964B00', rgb: { red: 150, green: 75, blue: 0 } },
  { name: 'burgundy', hex: '800020', rgb: { red: 128, green: 0, blue: 32 } },
  { name: 'byzantium', hex: '702963', rgb: { red: 112, green: 41, blue: 99 } },
  { name: 'carmine', hex: '960018', rgb: { red: 150, green: 0, blue: 24 } },
  { name: 'cerise', hex: 'DE3163', rgb: { red: 222, green: 49, blue: 99 } },
  { name: 'cerulean', hex: '007BA7', rgb: { red: 0, green: 123, blue: 167 } },
  {
    name: 'champagne',
    hex: 'F7E7CE',
    rgb: { red: 247, green: 231, blue: 206 },
  },
  {
    name: 'chartreuse green',
    hex: '7FFF00',
    rgb: { red: 127, green: 255, blue: 0 },
  },
  { name: 'chocolate', hex: '7B3F00', rgb: { red: 123, green: 63, blue: 0 } },
  { name: 'coffee', hex: '6F4E37', rgb: { red: 111, green: 78, blue: 55 } },
  { name: 'copper', hex: 'B87333', rgb: { red: 184, green: 115, blue: 51 } },
  { name: 'coral', hex: 'F88379', rgb: { red: 248, green: 131, blue: 121 } },
  { name: 'crimson', hex: 'DC143C', rgb: { red: 220, green: 20, blue: 60 } },
  { name: 'cyan', hex: '00FFFF', rgb: { red: 0, green: 255, blue: 255 } },
  {
    name: 'desert sand',
    hex: 'EDC9AF',
    rgb: { red: 237, green: 201, blue: 175 },
  },
  { name: 'emerald', hex: '50C878', rgb: { red: 80, green: 200, blue: 120 } },
  { name: 'erin', hex: '00FF3F', rgb: { red: 0, green: 255, blue: 63 } },
  { name: 'gold', hex: 'FFD700', rgb: { red: 255, green: 215, blue: 0 } },
  { name: 'harlequin', hex: '3FFF00', rgb: { red: 63, green: 255, blue: 0 } },
  { name: 'indigo', hex: '4B0082', rgb: { red: 75, green: 0, blue: 130 } },
  { name: 'ivory', hex: 'FFFFF0', rgb: { red: 255, green: 255, blue: 240 } },
  { name: 'jade', hex: '00A86B', rgb: { red: 0, green: 168, blue: 107 } },
  {
    name: 'jungle green',
    hex: '29AB87',
    rgb: { red: 41, green: 171, blue: 135 },
  },
  { name: 'lavender', hex: 'B57EDC', rgb: { red: 181, green: 126, blue: 220 } },
  { name: 'lemon', hex: 'FFF700', rgb: { red: 255, green: 247, blue: 0 } },
  { name: 'lilac', hex: 'C8A2C8', rgb: { red: 200, green: 162, blue: 200 } },
  { name: 'lime', hex: 'BFFF00', rgb: { red: 191, green: 255, blue: 0 } },
  {
    name: 'magenta rose',
    hex: 'FF00AF',
    rgb: { red: 255, green: 0, blue: 175 },
  },
  { name: 'magenta', hex: 'FF00FF', rgb: { red: 255, green: 0, blue: 255 } },
  { name: 'maroon', hex: '800000', rgb: { red: 128, green: 0, blue: 0 } },
  { name: 'mauve', hex: 'E0B0FF', rgb: { red: 224, green: 176, blue: 255 } },
  { name: 'navy blue', hex: '000080', rgb: { red: 0, green: 0, blue: 128 } },
  { name: 'ocher', hex: 'CC7722', rgb: { red: 204, green: 119, blue: 34 } },
  { name: 'olive', hex: '808000', rgb: { red: 128, green: 128, blue: 0 } },
  { name: 'orange-red', hex: 'FF4500', rgb: { red: 255, green: 69, blue: 0 } },
  { name: 'orchid', hex: 'DA70D6', rgb: { red: 218, green: 112, blue: 214 } },
  { name: 'peach', hex: 'FFE5B4', rgb: { red: 255, green: 229, blue: 180 } },
  { name: 'pear', hex: 'D1E231', rgb: { red: 209, green: 226, blue: 49 } },
  {
    name: 'periwinkle',
    hex: 'CCCCFF',
    rgb: { red: 204, green: 204, blue: 255 },
  },
  {
    name: 'persian blue',
    hex: '1C39BB',
    rgb: { red: 28, green: 57, blue: 187 },
  },
  { name: 'pink', hex: 'FFC0CB', rgb: { red: 255, green: 192, blue: 203 } },
  { name: 'plum', hex: '8E4585', rgb: { red: 142, green: 69, blue: 133 } },
  {
    name: 'prussian blue',
    hex: '003153',
    rgb: { red: 0, green: 49, blue: 83 },
  },
  { name: 'puce', hex: 'CC8899', rgb: { red: 204, green: 136, blue: 153 } },
  { name: 'purple', hex: '800080', rgb: { red: 128, green: 0, blue: 128 } },
  { name: 'raspberry', hex: 'E30B5C', rgb: { red: 227, green: 11, blue: 92 } },
  {
    name: 'red-violet',
    hex: 'C71585',
    rgb: { red: 199, green: 21, blue: 133 },
  },
  { name: 'rose', hex: 'FF007F', rgb: { red: 255, green: 0, blue: 127 } },
  { name: 'ruby', hex: 'E0115F', rgb: { red: 224, green: 17, blue: 95 } },
  { name: 'salmon', hex: 'FA8072', rgb: { red: 250, green: 128, blue: 114 } },
  { name: 'sangria', hex: '92000A', rgb: { red: 146, green: 0, blue: 10 } },
  { name: 'sapphire', hex: '0F52BA', rgb: { red: 15, green: 82, blue: 186 } },
  { name: 'scarlet', hex: 'FF2400', rgb: { red: 255, green: 36, blue: 0 } },
  { name: 'silver', hex: 'C0C0C0', rgb: { red: 192, green: 192, blue: 192 } },
  {
    name: 'slate gray',
    hex: '708090',
    rgb: { red: 112, green: 128, blue: 144 },
  },
  { name: 'spring bud', hex: 'A7FC00', rgb: { red: 167, green: 252, blue: 0 } },
  {
    name: 'spring green',
    hex: '00FF7F',
    rgb: { red: 0, green: 255, blue: 127 },
  },
  { name: 'tan', hex: 'D2B48C', rgb: { red: 210, green: 191, blue: 140 } },
  { name: 'taupe', hex: '483C32', rgb: { red: 72, green: 60, blue: 50 } },
  { name: 'teal', hex: '008080', rgb: { red: 0, green: 128, blue: 128 } },
  { name: 'turquoise', hex: '40E0D0', rgb: { red: 64, green: 224, blue: 208 } },
  { name: 'violet', hex: 'EE82EE', rgb: { red: 238, green: 130, blue: 238 } },
  { name: 'viridian', hex: '40826D', rgb: { red: 64, green: 130, blue: 109 } },
  { name: 'white', hex: 'FFFFFF', rgb: { red: 255, green: 255, blue: 255 } },
  {
    name: 'yankees blue',
    hex: '1C2841',
    rgb: { red: 28, green: 40, blue: 65 },
  },
  { name: 'yellow', hex: 'FFFF00', rgb: { red: 255, green: 255, blue: 0 } },
  { name: 'orange', hex: 'FFA500', rgb: { red: 255, green: 165, blue: 0 } },
  { name: 'blue', hex: '0000FF', rgb: { red: 0, green: 0, blue: 255 } },
  { name: 'red', hex: 'FF0000', rgb: { red: 255, green: 0, blue: 0 } },
  { name: 'green', hex: '00FF00', rgb: { red: 0, green: 255, blue: 0 } },
  { name: 'gray', hex: '808080', rgb: { red: 128, green: 128, blue: 128 } },
]
