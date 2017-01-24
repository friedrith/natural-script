const chrono = require('chrono-node');

module.exports = function (sentence, varName) {
    var results = chrono.parse(sentence);
    // console.log(results);
    if (results.length > 0) {
        if (sentence.startsWith(results[0].text)) {

            var result = {
                left: sentence.replace(results[0].text, ''),
                vars: {}
            };

            if (varName) {
                result.vars[varName] = results[0];
            }
            return result;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
