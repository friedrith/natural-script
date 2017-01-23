module.exports = function (sentence, modifiers) {
    for (var i = 0 ; i  < modifiers.length ; i++) {
        if (sentence.toLowerCase().indexOf(modifiers[i]+' ') == 0) {
            // console.log(sentence);
            var newSentence = sentence.slice(modifiers[i].length).replace(/^[ ]*/, ''); // deleting useless
            return { left: newSentence, modifier: modifiers[i]};
        }
    }

    return false;
}
