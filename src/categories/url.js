module.exports = function (sentence, varName) {

    if (!sentence) {
        return false;
    }

    var match = sentence.match(/^(|http(|s)?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
    // console.log(match);
    if (match) {
        var result = {
            left: sentence.replace(match[0], '').replace(/^ /,''),
            vars: {}
        };

        if (varName) {
            result.vars[varName] = match[0];
        }
        return result;
    } else {
        return false;
    }
};
