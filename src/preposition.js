
var prepositions = [
    'to', 'in', 'from', 'into', 'at'
];

module.exports = function (sentence) {
    for (var i = 0 ; i  < prepositions.length ; i++) {
        if (sentence.toLowerCase().indexOf(prepositions[i]+' ') == 0) {
            // console.log(sentence);
            var newSentence = sentence.slice(prepositions[i].length).replace(/^[ ]*/, ''); // deleting useless
            return { left: newSentence, preposition: prepositions[i]};
        }
    }

    return false;
}
