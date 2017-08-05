var wordnet = require('wordnet');
const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

var word = "";

rl.question("",(answer) => {
  word = answer;
wordLookup(word);
rl.close();
})

function wordLookup (word) {

  var gloss = [];

  wordnet.lookup(word, function(err,definitions) {
    if (err) {
      console.log('Not found');
    } else {

      //console.log("\n" + word + "\n");
      console.log();
      console.log(definitions);

      definitions.forEach(function(definition) {



        function checkDuplicate(gloss, synsetOffset) {
          //console.log('gloss: '+ gloss);
          //console.log('synth: '+ synsetOffset);
          if(gloss.indexOf(synsetOffset) > -1){
            //console.log('DUPLICATE');
            return false;
          }
          /*gloss.forEach(function (item) {
            if (item == synsetOffset) {
              console.log('DUPLICATE');
              return false;
            }
          });*/
          //console.log("no dupli");
          return true;
        }

        function printWord(definition, usePointers) {
          if (checkDuplicate(gloss, definition.meta.synsetOffset)) {
            console.log('  type : %s', definition.meta.synsetType);
            //console.log(definition.meta.pointers);
            var words = '';
            definition.meta.words.forEach(function (word) {
              words += word.word + ' ';
            });
            //console.log(words);
            words = words.trim();
            words = words.replace(/ /g, ", ");
            words = words.replace(/_/g, " ");
            console.log('  words: %s', words);
            //console.log(definition.meta.synsetOffset);
            gloss.push(definition.meta.synsetOffset);
            //console.log(gloss);
            console.log('  %s', definition.glossary);
            console.log();

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
                  printWord(pointer.data, false);
                }
              });
            }
          }
        }
        printWord(definition,true);
      });
    }
  });
}
