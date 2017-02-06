# Integer

You can extract  **integers**:

```javascript
ns.parse('10', '{{integer}}');
ns.parse('I am 18', 'I am {{integer}}'); // you can also mix with simple words
// return true

ns.parse('10,000', '{{integer}}');
ns.parse('10 000', '{{integer}}');
// return false now should be changed in


ns.parse('10', '{{integer:var1}}');
ns.parse('I am 18', 'I am {{integer:var1}}'); // you can also mix with simple words
// return { var1: { text:'<real information parsed>', integer:<integer> } }
```
