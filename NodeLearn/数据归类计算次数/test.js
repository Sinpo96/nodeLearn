let fs = require('fs');
let userArr = [];
fs.readFile('/Users/metalfish/Desktop/Github/nodeLearn/Node/数据归类计算次数/arr.js', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else {
        //拿到用户的数组
        userArr = data.split(',');
        let num = {}, cishu = {};
        userArr.map((val,index) => {
            if (!num[val]) {
                num[val] = 1;
            } else {
                num[val]++;
            }
        });
        let sum = 0;
        for (const i in num) {
            if (cishu[num[i]]) {
                cishu[num[i]]++;
            } else {
                cishu[num[i]] = 1;
            }
        }
        fs.writeFile('/Users/metalfish/Desktop/Github/nodeLearn/Node/数据归类计算次数/用户名单.json', JSON.stringify(cishu), err => {
            if (err) {
                console.error(err);
            };
            console.log('写入成功');
        });
    }
});