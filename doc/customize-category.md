# Customize the category

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
