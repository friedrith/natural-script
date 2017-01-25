# occurrence

You can extract **occurrences**:

```javascript
ns.parse('every weekday', '{{occurrence}}');
ns.parse('at 5:00 pm', '{{occurrence}}');
ns.parse('start the alarm clock at 5:00 pm on Weds,Thurs and Fri', 'start the alarm clock {{occurrence}}'); // you can also mix with simple words
// return true

ns.parse('every weekend', '{{occurence:var1}}');
ns.parse('Let me sleep every weekend', 'Let me sleep {{occurence:var1}}');
// return { var1: <object> }
// look later.js documentation for more details on the returned object
```
See the [later.js documentation](https://github.com/bunkat/later) to discover all occurrences managed.
