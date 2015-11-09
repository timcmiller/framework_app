var path = require('path');

module.exports = function getContentType(file){
 var extname = path.extname(file);
 if (extname === '.html'){
   return 'text/html';
 }
 if (extname === '.css') {
   return  'text/css';
 }
 if (extname === '.js') {
   return 'application/javascript';
 }
};
