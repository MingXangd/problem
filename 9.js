const fs = require("fs");
const path = require("path");

// 文件内容
function readrd(url, url1 = '../radian/src/') {
    fs.readFile(url1 + 'components/klinechart/klinechart.vue', "UTF-8", function (err, dataStr) {
        if (err) {
            return console.log("失败", err.message);
        }
        // data2 = dataStr.split('export default')[1];
        // data2 = eval("(" + dataStr.split('export default')[1] + ")");//第二种
        // data2 = JSON.parse(dataStr);
        let data = dataStr.split('createSocket() {')[1].split('//初始化图表')[0]
        fs.readFile(url + 'src/components/klinechart/klinechart.vue', "UTF-8", function (ear, dda) {
            if (ear) {
                return console.log("失败", ear.message);
            }
            
            dda = dda.replace("export default {", "import ws2klineSocket from '@/components/klinechart/ws2klineSocket.js';export default {")
            let dda0 = dda.split('createSocket() {')[0]
            let da1 = dda.split('createSocket() {')[1].split('//初始化图表')[1]
            fs.writeFile(url + 'src/components/klinechart/klinechart.vue', dda0 + 'createSocket() {' + data + '//初始化图表'+
                da1, function (err) {
                    console.log('成功', url)
                });
        })

    });
    fs.readFile(url1 + 'components/klinechart/params.js', "UTF-8", function (err, data) {
        if (err) {
            console.log(url, 'params.js失败');
            return
        }
        fs.writeFile(url + 'src/components/klinechart/params.js', data, function (err1) {
            if (err1) {
                console.log('url params');
                return
            }
        })
    })
    fs.readFile(url1 + 'components/klinechart/ws2klineSocket.js', "UTF-8", function (err, data) {
        if (err) {
            console.log(url, 'ws2klineSocket.js失败');
            return
        }
        fs.writeFile(url + 'src/components/klinechart/ws2klineSocket.js', data, function (err1) {
            if (err1) {
                console.log('url ws2klineSocket');
                return
            }
        })
    })
    fs.readFile(url + 'src/store/index.js', "UTF-8", function (err, dataa) {
        if (err) {
            console.log('index url');
            return
        }
        let str = dataa.replace('wss://ws.eastcentergroup.com/wss', 'wss://ws2.eastcentergroup.com/wss')
        fs.writeFile(url + 'src/store/index.js', str, function (error, date) {
            if (error) {
                console.log(date);
                return
            }
        })
    })

    fs.readFile(url + 'src/siteConfig.js', "UTF-8", function (err, dataa) {
        if (err) {
            console.log('index url');
            return
        }
        let str = dataa.replace('wss://ws.eastcentergroup.com/wss', 'wss://ws2.eastcentergroup.com/wss')
        fs.writeFile(url + 'src/siteConfig.js', str, function (error, date) {
            if (error) {
                console.log(date);
                return
            }
        })
    })

    fs.readFile(url + 'package.json',"UTF-8",function(eff,fada){
        if(eff){
            return console.log('package');
        }
        let str = fada.replace('"devDependencies": {','"devDependencies": { "dayjs": "^1.11.7",')
        fs.writeFile(url + 'package.json',str,function(err,data){
            if(err){
                return console.log(err.emssage);
            }
        })
    })
}
// readrd("../radian/src/");

// readrd("../qatar/src/");
// readrd("../dmfnc/src/");
// readrd("../eastcentergroup/src/");
// readrd("../mathews/src/");
// readrd("../echovfx/src/");
// readrd("../bitforex-copy/src/");
readrd("../standby-foreign/");


// readrd("../radian-pc/src/");

// readrd("../eastcentergroup-pc/src/");
// readrd("../qatar-pc/src/");
// readrd("../dmfnc-pc/src/");
// readrd("../mathews-pc/src/");
// readrd("../bitforex-copy-pc/src/");
// readrd("../standby-foreign-pc/src/");
// readrd("../echovfx-pc/src/");
// readrd("../clokoa-pc/src/");


function read(url) {
    fs.readFile(url, "UTF-8", function (err, data) {
        if (err) {
            console.log('error', err.message);
            return
        }
        // 替换 '<h1>ARION</h1>'.replace("<")
        // 去内容 拆分  '<h1>ARION</h1>'.match(/\<.*?>/g)
        // let data
        console.log(data);

    })
}
// read('./views/index.vue')
// read('../dongkwang/src/App.vue')