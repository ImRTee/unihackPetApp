var Dictionary = require("oxford-dictionary-api");
var async = require("async");

var app_id = "2a9dfd9f";
var app_key = "caee9ecc368552b49706cc2b10ada560";

var dict = new Dictionary(app_id,app_key);

var dictlist = [];

var word = "ace";

 exports.wordlookup = function(word) {
   dict.find(word,function(error,data){
     if(error) return console.log(error);
     data.results[0].lexicalEntries.forEach(function(lex) {
       //format = [lexicalCategory,definition,example]
       lex.entries[0].senses.forEach(function(lex1) {
         lex1.examples.forEach(function(lex2) {
           dictlist.push([lex.lexicalCategory,lex1.definitions[0],lex2.text]);
         })
       });
       //console.log(temp);
     });


     //console.log(data.results[0].lexicalEntries[0].entries[0].senses[0].definitions); //definitions, forEach lexicalEntries, forEach senses
     //console.log(data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0]); //examples, forEach lexicalEntries, forEach senses, forEach examples
     data.results[0].lexicalEntries.forEach(function(lex) {
       console.log(lex.lexicalCategory);
     });
   });
 }

exports.dictlist = dictlist;

/*exports.wordlookup = function wordlookup(word) {
  async.waterfall([
    first(word),
    //second,
    //third,
  ], function(err,result) {
    console.log(err);
  });
  function first(word) {
    return function(callback) {
      var temp = []
      dict.find(word,function(error,data) {
        if(error) return console.log(error);
        console.log(data);
        temp = data;
      })
      console.log(temp)
      callback(null,temp);
    }
  }*/
  // function second(data,callback) {
  //   var dictlist = [];
  //   data.results[0].lexicalEntries.forEach(function(lex) {
  //     //format = [lexicalCategory,definition,example]
  //     lex.entries[0].senses.forEach(function(lex1) {
  //       lex1.examples.forEach(function(lex2) {
  //         dictlist.push([lex.lexicalCategory,lex1.definitions[0],lex2.text]);
  //       })
  //     });
  //   });
  //   callback(null,dictlist);
  // }
  // function third(dictlist,callback) {
  //   console.log(dictlist);
  //   return dictlist;
  // }
}



