# natural-script

**Natural-script** is a script language to easily parse english expressions.

When you write a bot (slack bot, messenger bot, etc) you have to parse user inputs, classify it and extract information you need. It is easy to classify simple user sentences like *hello*, *How are you?*, *What time is it in London ?*. But it is quite harder when you want to extract complex information. Try for example to parse the date from the expression *my appointment is planned for tomorrow at 2pm at home*.

With **natural-script**, describe the request you want with english words and the type of information you want to extract. These are some examples of **natural-script** language :

```javascript
hello
how are you
my appointment is planned for {{date:date1}}
```

> Other kind of information will be available soon like cities, countries, etc

## Getting started

```bash
npm install natural-script
```

```javascript

const ns = require('natural-script');

// ns.parse(<user input>, <pattern to match>)

ns.parse('Hello', 'hello');
// returns true

ns.parse('Bonjour', 'hello');
// returns false

ns.parse('What time is it in London ?', 'what time is it {{place}}');
// returns true

ns.parse('What time is it in London ?', 'what time is it {{place:var1}}');
// returns { var1: 'London' }

```


## Syntax

### Simple words

Firstly, you can detect simple words. In order to make detection more robust, the module [natural](https://github.com/NaturalNode/natural) is used to detect the words, authorize a small difference between the detected word and the expected word (agains typing errors) and remove ponctuation.

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
> The function used to evaluate the distance between the real word and the expect word is JaroWinklerDistance from [natural](https://github.com/NaturalNode/natural) module. You can change the maximum authorized distance with `ns.MAX_DISTANCE = <new distance>`

### Specific information

Then, you can ask to parse specific information even if the formats are very particular.

```javascript
ns.parse('<user input>', '{{<information type>}}');
// return true if the user input is of the requested type.
// return false else
```

You can also ask to store the information in a variable
```javascript
ns.parse('<user input>', '{{<information type>|variableName}}');
// return {variableName:<object>} if the user input is of the requested type. The object format depends of the information type.
// return false else
```

#### Date

The first kind of information you can extract is **date**. It uses the module [chrono-node](https://github.com/wanasit/chrono) to parse the date. See the [documentation](http://wanasit.github.io/pages/chrono/) to discover all date and time formats managed.

```javascript
ns.parse('today', '{{date}}');
ns.parse('5 days ago', '{{date}}');
ns.parse('I left him 5 days ago', 'I left him {{date}}'); // you can also mix with simple words
// return true

ns.parse('today', '{{date|var1}}');
ns.parse('I left him 5 days ago', 'I left him {{date|var1}}');
// return { var1: { text:'<real information parsed>', ref:'<interpretated information parsed>', ... } }
// look chrono-node documentation for more details on the returned object
```

#### Customized information type

You can add new kind of information yourself by adding a new format parser like this:

```javascript
ns.format.date = function (sentence, varName /* optionnal */) {
    // if sentence doesn't contain a date
    return false;

    // if the sentence contains a date but not in first position
    return false;

    // if the sentence contains a date in first position but varName is not present
    return true;

    // if the sentence contains a date in first position and varName is present
    return { left: <left sentence>, vars: { <varName>: <object containing the date> }};
}

```

> Do not hesitate to propose new customized parsers
