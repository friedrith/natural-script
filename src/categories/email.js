module.exports = function (sentence, varName) {

    if (!sentence) {
        return false;
    }


    var match = sentence.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/);
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
