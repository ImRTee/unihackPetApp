var wordnet = require('wordnet');
var wordlookup = require('./wordlookup.js');
var synonym = require('./synonym.js');

var dictionary = wordlookup.wordLookup("cold");

//var syn = synonym.generateSynonym("cold");

console.log(dictionary);

//console.log(synonym);
