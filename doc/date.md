# Date

You can extract is **date**:

```javascript
ns.parse('today', '{{date}}');
ns.parse('5 days ago', '{{date}}');
ns.parse('I left him 5 days ago', 'I left him {{date}}'); // you can also mix with simple words
// return true

ns.parse('today', '{{dat:var1}}');
ns.parse('I left him 5 days ago', 'I left him {{date:var1}}');
// return { var1: { text:'<real information parsed>', ref:'<interpretated information parsed>', ... } }
// look chrono-node documentation for more details on the returned object
```

It uses the module [chrono-node](https://github.com/wanasit/chrono) to parse the date.
See the [documentation](http://wanasit.github.io/pages/chrono/) to discover all date and time formats managed.
