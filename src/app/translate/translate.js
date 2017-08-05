var translate = require('google-translate-api')

var word = 

translate('Ik spreek Engels', {to: 'en'}).then(res => {
  console.log(res.text);
//=> print translation of word in English
}).catch(err => {
  console.error(err);
});
