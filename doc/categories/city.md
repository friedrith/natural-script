# Capital city

You can extract city names. For now the list only contains the list of capital cities.

```javascript
ns.parse('Paris', '{{capital_city}}');
ns.parse('paris', '{{capital_city}}'); // lowercase also works
ns.parse('in Paris', '{{capital_city}}'); // it also catch prepositions about
                                          // locations like to, in, from, etc
ns.parse('What time is it in London ?', 'what time is it in {{capital_city}}');
// return true

ns.parse('Where is my home ?', 'where is my {{capital_city:city}}'); // home is not a city
// return false

ns.parse('What time is it in London ?', 'what time is it in {{capital_city:city}}');
// returns { city: { text: 'London' } }

ns.parse('What time is it in London ?', 'what time is it {{capital_city:city}}');
// returns { city: { text: 'London', preposition: 'in' } }

```

The returned object is :

```javascript

{
    text: <string>, // city name
    [preposition: <string> ] // preposition before the name
}

```

The list of available cities and managed prepositions are [here](../src/formats/capital-city.js).
