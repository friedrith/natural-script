# Url

You can extract  **urls**:

```javascript
ns.parse('https://google.fr', '{{url}}');
ns.parse('http://google.fr', '{{url}}');
ns.parse('www.google.fr', '{{url}}');
ns.parse('google.fr', '{{url}}');
ns.parse('look the website http://google.fr', 'look the website  {{url}}'); // you can also mix with simple words
// return true

ns.parse('https://google.fr', '{{url:var1}}');
ns.parse('look the website http://google.fr', 'look the website  {{url:var1}}'); // you can also mix with simple words
// return { var1: <url> }
```
