var Dictionary = require("oxford-dictionary-api");
var rundictionary = require("./rundictionary.js");
var async = require("async");

var temp = rundictionary.wordlookup("ace");

// var dictlist = [];
//
// async.waterfall([
//   First,
//   Second,
//   Third,
// ], function(err,result) {
//   console.log(err);
// });
// function First(callback) {
//   rundictionary.wordlookup("ace");
//   callback(null,'one');
// }
// function Second(arg1,callback) {
//   dictlist = rundictionary.dictlist
//   callback(null,'two');
// }
// function Third(arg1,callback) {
//   console.log(dictlist)
//   callback(null,'done')
// }

//rundictionary.wordlookup("ace");

//setTimeout(console.log(rundictionary.dictlist),1500);


