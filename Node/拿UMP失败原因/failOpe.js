const fs = require('fs');

fs.readFile('failSession.js', function (err, data) {
    if (err) throw err;
    let failArray = [];
    data.toString().split('龘').map((val,index)=>{
        let sub_msg = '';
        if (JSON.parse(val)['error_response']) {
            if (JSON.parse(val)['error_response']['sub_msg']) {
                sub_msg = JSON.parse(val)['error_response']['sub_msg'];                    
            } else if (JSON.parse(val)['error_response']['msg']) {
                sub_msg = JSON.parse(val)['error_response']['msg'];
            } else {
                sub_msg = val;
            }
        } else {
            sub_msg = val;
        }
        if (!failArray.join().includes(sub_msg)) {
            failArray.push(`'${sub_msg}',`);
        }
    });
    fs.writeFile('错误原因.js', failArray, (err) => {
        if (err) throw err;
        console.log('错误原因已保存');
    });
});