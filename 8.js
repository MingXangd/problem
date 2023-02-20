const fs = require("fs");
const path = require("path");

function read(url) {
    let thisstr = []

    fs.readFile(url, "UTF-8", function (err, data) {
        if (err) {
            console.log('error', err.message);
            return
        }
        // 替换 '<h1>ARION</h1>'.replace("<")
        // 去内容 拆分  '<h1>ARION</h1>'.match(/\<.*?>/g)
        // let data
        // console.log(data.match(/\>.*?</g));
        data.match(/\>.*?</g).map(ev=>{
            if (ev.length > 2 && ev.indexOf('(')== -1){
                thisstr.push(ev.substr(1, ev.length - 2).trim())
            }
        })
        console.log(thisstr);
    })

    fs.readFile('../dongkwang/src/locales/en.json','utf-8',function(err,data) {
        if (err) {
            console.log('error', err.message);
            return
        }
        // console.log(data, Object.getOwnPropertyNames({ "name": "dasd", "age": 18 }).length);
        // console.log(data, Object.getOwnPropertyNames(data).length);
        thisstr.map(ev=>{
            
        })
    })
}
// read('./views/index.vue')
// read('../dongkwang/src/App.vue')
read('../dongkwang/src/views/index.vue')