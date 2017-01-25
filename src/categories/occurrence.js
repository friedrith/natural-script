const later = require('later');

// need optimization but later module is so great

module.exports = function (sentence, varName) {

    if (typeof sentence !== 'string' || sentence == '') {
        return false;
    }

    var words = sentence.split(' ');

    if (words.length == 0) {
        return false;
    }

    var leftSentence = '';
    var previousResult = null;
    var previousIndex = -1;

    for (var i = 0 ; i < words.length ; i++) {

        if (leftSentence == '') {
            leftSentence = words[i];
        } else {
            leftSentence = leftSentence + ' ' + words[i];
        }
        var result = later.parse.text(leftSentence);
        // console.log(leftSentence, result.error);

        if (result.error == -1) {
            previousResult = result;
            previousIndex = i;
        }
    }

    if (previousResult == null) {
        return false;
    } else {
        words.splice(0, previousIndex+1);
        var result = {
            left: words.join(' '),
            vars: {}
        };

        if (varName) {
            result.vars[varName] = { laterjs: previousResult.schedules }
        }

        return result;
    }
};
