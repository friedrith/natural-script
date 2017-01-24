# natural-script [![Build Status](https://travis-ci.org/thibaultfriedrich/natural-script.svg?branch=master)](https://travis-ci.org/thibaultfriedrich/natural-script)  [![Dependencies](https://david-dm.org/thibaultfriedrich/natural-script.png?theme=shields.io)](https://david-dm.org/thibaultfriedrich/natural-script) [![devDependency Status](https://david-dm.org/thibaultfriedrich/natural-script/dev-status.svg)](https://david-dm.org/thibaultfriedrich/natural-script#info=devDependencies)

**Natural-script** is a script language to easily parse english expressions.

When you write a bot (slack bot, messenger bot, etc) you have to parse user inputs, classify it and extract information you need. It is easy to classify simple user sentences like *hello*, *How are you?*, *What time is it in London ?*. But it is quite harder when you want to extract complex information. Try for example to parse the date from the expression *my appointment is planned for tomorrow at 2pm at home*.

With **natural-script**, describe the request you want with english words and the categories of information you want to extract. These are some examples of **natural-script** language :

```javascript
hello
how are you
what time is it in {{capital_city}}
my appointment is planned for {{date:date1}}
```

A demo is available at url [ns.techmind.io](http://ns.techmind.io/).

> Other category will be available soon like countries, occurences, etc.

## Getting started

For now, this project is only available for node.js because it uses [natural](https://github.com/NaturalNode/natural).

```bash
$ npm install natural-script
```

```javascript
const ns = require('natural-script');

// ns.parse(<user input>, <pattern to match>)

ns.parse('Hello', 'hello');
// returns true

ns.parse('Bonjour', 'hello');
// returns false

ns.parse('What time is it in London ?', 'what time is it in {{capital_city}}');
// returns true

ns.parse('What time is it in London ?', 'what time is it in {{capital_city:var1}}');
// returns { var1: 'London' }

```


## Syntax

### Simple words

Firstly, you can detect simple words. In order to make detection more robust, the module [natural](https://github.com/NaturalNode/natural) is used to detect the words, authorize a small difference between the detected word and the expected word (againts typing errors) and remove ponctuation.

```javascript
ns.parse('hello', 'hello'); // exactly same words
ns.parse('Hello', 'hello'); // no case sensitivity
ns.parse('Hallo', 'hello'); // accepts a little difference
ns.parse('Hello!', 'hello'); // remove ponctuation
ns.parse(' Hello !', 'hello'); // remove useless spaces
ns.parse('hello world', 'hello world'); // exactly 2 same words
ns.parse('hallo Worldi!', 'hello world'); // a lot of difference but still works
// return true

ns.parse('Bonjour', 'hello'); // too much difference
ns.parse('hello world', 'hello'); // not exact words count
// returns false
```
> The function used to evaluate the distance between the real word and the expected word is JaroWinklerDistance from [natural](https://github.com/NaturalNode/natural) module. You can change the maximum authorized distance with `ns.MAX_DISTANCE = <new distance>`

### Categories

Then, you can ask to parse specific information even if the formats are very particular.

```javascript
ns.parse('<user input>', '{{<category>}}');
// return true if the user input is of the requested type.
// return false else
```

You can also ask to store the information in a variable
```javascript
ns.parse('<user input>', '{{<category>:variableName}}');
// return {variableName:<object>} if the user input is of the requested type.
// The object format depends of the category.
// return false else
```

The available categories are:

* [date](doc/date.md)
* [capital_city](doc/city.md)
* [color](doc/color.md)

### Customized category

You can add new category yourself by adding a new format parser like this:

```javascript

ns.addCategory('date', function (sentence, varName /* optionnal */) {
    // if sentence doesn't contain a date
    return false;

    // if the sentence contains a date but not in first position
    return false;

    // if the sentence contains a date in first position but varName is not present
    return { left: <sentence without date> };

    // if the sentence contains a date in first position and varName is present
    return { left: <sentence without date>, vars: { <varName>: <object containing the date> }};
}
```

## Contribution

This project is only at the beginning so do not hesitate to contribute or propose improvements.

## License

This project is distributed on MIT license.
