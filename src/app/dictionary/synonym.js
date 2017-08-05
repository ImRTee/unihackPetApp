var wordnet = require('wordnet');

exports.generateSynonym = function(word) {

  var synonym = [];

  wordnet.lookup(word,function(err,definitions) {
    if (err) {
      return "Not found";
    } else {

      definitions.forEach(function(definition) {

        fillSynonym(definition,true);

        function fillSynonym(definition,usePointers) {

          definition.meta.words.forEach(function(word) {

            if(synonym.indexOf(word.word) < 0) {
              var syn = word.word.replace(/_/g, " ");
              synonym.push(syn);

              if (usePointers) {
                definition.meta.pointers.forEach(function(pointer) {

                  if (!pointer.data.meta) {
                    return;
                  }

                  var found = false;
                  pointer.data.meta.words.forEach(function (aWord) {
                    if (aWord.word.indexOf(word) == 0) {
                      found = true;
                    }
                  });

                  if (found || ['*', '='].indexOf(pointer.pointerSymbol) > -1) {
                    fillSynonym(pointer.data, false);
                  }
                })
              }
            }
          })
        }
      })
    }
  });
  console.log(synonym);
  return synonym;
};
