const fs = require('fs');

fs.readFile('invite.csv', 'utf8', function (err, data) {
    const dataArray = data.split(/\r?\n/);
    console.log(dataArray);
});
