var fs = require('fs');
var fileName = __dirname + '/data.txt';

fs.readFile(fileName, 'utf-8', function (err, data) {
    console.log(data);
});
