var wordnet = require('wordnet');

var dictionary = [];

exports.wordLookup = function(word) {



	wordnet.lookup(word, function(err,definitions) {
		if (err) {
      return "Not found";
    } else {
      //console.log(definitions);
			definitions.forEach(function(definition) {

				function checkDuplicate(dictionary, synsetOffset) {
					if(dictionary.indexOf(synsetOffset) > -1){
						return false;
					}
					return true;
				}

				function fillDictionary(definition,usePointers) {
					if (checkDuplicate(dictionary, definition.meta.synsetOffset)) {
						synType = definition.meta.synsetType;

						var words = '';
						definition.meta.words.forEach(function(word) {
							words += word.word + ' ';
						});
						words = words.trim();
						words = words.replace(/ /g, ", ");
						words = words.replace(/_/g, " ");

						glossary = definition.glossary;

						dictionary.push([synType,words,glossary]);

						//console.log(dictionary);

						if (usePointers) {
						  definition.meta.pointers.forEach(function (pointer) {

							if (!pointer.data.meta) {
							  return;
							}

							/* Print the word only if contains (or prefixes) the look up expression */
							var found = false;
							pointer.data.meta.words.forEach(function (aWord) {
							  if (aWord.word.indexOf(word) == 0) {
								found = true;
							  }
							});

							if (found || ['*', '='].indexOf(pointer.pointerSymbol) > -1) {
								fillDictionary(pointer.data, false);
							}
						  });
						}
					}
				}
        fillDictionary(definition,true);
			});
		}
    console.log('hello');
    console.log(dictionary)
    return dictionary;
	});
};
