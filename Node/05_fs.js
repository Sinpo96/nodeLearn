let fs = require('fs');

// fs.stat('01_http.js', (error, stats) => {
//     if (error) {
//         console.error(error);
//         return;
//     } else {
//         console.dir(stats);
//     }
// });

// fs.mkdir('CSS', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('创建成功');
//     }
// });

// fs.rmdir('CSS', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('删除成功');
//     }
// });

// fs.writeFile('testFS.txt', '测试写入', err => {
//     if (err) {
//         console.error(err);
//     };
//     console.log('写入成功');
// });

// fs.readFile('testFS.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     } else {
//         console.log(data);
//     }
// });

fs.rename('testFS.txt', 'testFS.js', err => {
    console.error(err);
});