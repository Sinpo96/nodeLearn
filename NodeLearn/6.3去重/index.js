const fs = require('fs');

let obj = {};

/**
 * @description: 读文件
 * @param {string} filePath 路径
 * @param {obj} obj 用于统计的对象
 * @param {boolean} write 是否需要写入
 * @return: Promise
 */
const readFileToArr = (filePath, obj, write = false) => {
    return new Promise((resolve, reject) => {
        filePath.map((value, index) => {
            fs.readFile(`/Users/metalfish/Desktop/Github/nodeLearn/NodeLearn/6.3去重/朋友圈/${value}`, 'utf8', (err, data) => {
                data.split(',').map((val) => {
                    if (obj[val]) {
                        let num = obj[val];
                        obj[val] = ++num;
                    } else if (!write) {
                        obj[val] = 1;
                    }
                });
                // console.log(index);
                if (index == filePath.length - 1) {
                    if (write) {
                        // 说明遍历全了
                        fs.writeFile('朋友圈用户数据.txt', JSON.stringify(obj), (err) => {
                            if (err) throw err;
                            console.log('打印成功');
                            resolve();
                        });
                    } else {
                        console.log('设置成功');
                        resolve();
                    }
                }
            });
        });
    });        
}
// 先拿一下对应的目录下的文件
fs.readdir('/Users/metalfish/Desktop/Github/nodeLearn/NodeLearn/6.3去重/朋友圈', async (err, files) => {
    // 开始遍历
    // 先取前两个作为模板
    await readFileToArr(files.slice(0,2), obj);
    // 然后再去看剩下的
    await readFileToArr(files.slice(2), obj, true);
});