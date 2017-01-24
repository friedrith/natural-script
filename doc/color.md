# Color

You can also extract colors.

```javascript
ns.parse('Blue', '{{color}}');
ns.parse('blue', '{{color}}'); // lowercase also works
ns.parse('dark blue', '{{color}}'); // manages modifiers like dark, light
ns.parse('electric blue', '{{color}}'); // complex colors also work
ns.parse('My shirt is blue', 'My shirt is {{color}}');
// return true

ns.parse('My shirt is dirty', 'my shirt is {{color}}'); // dirty is not a color
// return false

ns.parse('My shirt is blue', 'my shirt is {{color:color1}}');
// returns {
//            color1: {
//               name: 'blue',
//               hex: '0000FF',
//               rgb: { red: '0', green: '0', blue: '255' }
//            }
//         }

ns.parse('My shirt is dark blue', 'my shirt is {{color:color1}}');
// dark blue is blue with a modifier
// returns {
//            color1: {
//               name: 'blue',
//               hex: '0000FF',
//               rgb: { red: '0', green: '0', blue: '255' },
//               modifier: 'dark'
//            }
//         }

```

The list of available colors and modifiers are [here](../src/formats/color.js).
