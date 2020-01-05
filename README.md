# natural-script [![Build Status](https://travis-ci.org/friedrith/natural-script.svg?branch=master)](https://travis-ci.org/friedrith/natural-script)

**Natural-script** is a script language to easily parse english expressions.
It also includes a node.js implementation of a parser.

When you write a bot (slack bot, messenger bot, etc) you have to parse user inputs, classify it and extract information you need. It is easy to classify simple user sentences like _hello_, _How are you?_, _What time is it in London ?_. But it is quite harder when you want to extract complex information. Try for example to parse the date from the expression _my appointment is planned for tomorrow at 2pm at home_.

> You could use Natural Language Processing but sometimes it is a bit overkill. Besides sometimes you expect very specific commands and NLP may be as strict as expected.

With **natural-script**, describe the request you expect with a simplified expression based on english words. These are some examples of **natural-script** language :

```javascript
Hello
~hello
how are you
my email is {email}
go to {url:var1}
```

## Getting started

For now, this project is only available for node.js because it uses [natural](https://github.com/NaturalNode/natural).

```bash
# with npm
$ npm install natural-script

# with yarn
$ yarn add natural-script
```

```javascript
import { parse } from 'natural-script'
(async () => {
  // parse returns a promise
  // await parse(<user input>, <pattern to match>)

  // by default parse accepts only strict equal strings
  (await parse('Hello', 'hello')) === false

  // ~ accepts similar words
  (await parse('Hello', '~hello')) === true
  (await parse('Hello', '~helo')) === true
  (await parse('Bonjour', '~hello')) === false

  // detects words and returns them
  (await parse('hello thibault', 'hello {word}')) === true
  (await parse('hello thibault', 'hello {word:name}')) === { name: 'foo' }

  // detects emails and returns them
  (await parse('my email is foo@bar.com', 'my email is {email}')) === true
  (await parse('my email is foo@bar.com', 'my email is {email:foo}')) === { foo: 'foo@bar.com' }

  // detects urls and returns them
  (await parse('go to http://foo.com', 'go to {url}')) === true
  (await parse('go to http://foo.com', 'go to {url:bar}')) === { bar: 'http://foo.com' }
})()
```

## Contribution

This project is only at the beginning so do not hesitate to contribute or propose improvements.
Please follow [guidelines](CONTRIBUTING.md).

## License

This project is distributed on MIT license.
