# Date

You can extract  **dates**:

```javascript
ns.parse('today', '{{date}}');
ns.parse('5 days ago', '{{date}}');
ns.parse('I left him 5 days ago', 'I left him {{date}}'); // you can also mix with simple words
// return true

ns.parse('today', '{{date:var1}}');
ns.parse('I left him 5 days ago', 'I left him {{date:var1}}');
// return { var1: { text:'<real information parsed>', ref:'<interpretated information parsed>', ... } }
// look chrono-node documentation for more details on the returned object
```

The returned object is the [chrono-node](https://github.com/wanasit/chrono) object.
See the [chrono documentation](http://wanasit.github.io/pages/chrono/) to discover all date and time formats managed.
