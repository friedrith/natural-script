# Email

You can extract  **emails**:

```javascript
ns.parse('toto@titi.fr', '{{email}}');
ns.parse('titi-toto@tutu.fr', '{{date}}');
ns.parse('my email is titi.toto@tutu.fr', 'my email is {{date}}'); // you can also mix with simple words
// return true

ns.parse('toto@titi.fr', '{{email:var1}}');
ns.parse('my email is titi.toto@tutu.fr', 'my email is {{date:var1}}');
// return { var1: <email> }
```
