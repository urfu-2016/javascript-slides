var fs = require('fs');

var fileName = __dirname + '/data.txt';
console.time('readFileSync');
var data = fs.readFileSync(fileName, 'utf-8');
console.timeEnd('readFileSync');

console.log(data);
