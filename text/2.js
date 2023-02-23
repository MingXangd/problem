const fs = require("fs");
const path = require("path");

function getAllDirbyFilename(dir, filename) {
    let dirPath = path.resolve(__dirname, dir);
    let files = fs.readdirSync(dirPath); // 该文件夹下的所有文件名称 (文件夹 + 文件)

    let resultArr = [];

    files.forEach((file) => {
        let filePath = dir + "/" + file; // 当前文件 | 文件夹的路径
        // 满足查询条件文件
        // if (file === filename) {
        if (file.indexOf('.vue') != -1) {
            resultArr.push(filePath);
        } else {
            let dirPathTwo = path.resolve(__dirname, filePath);
            let filesTwo = fs.readdirSync(dirPathTwo); // 该文件夹下的所有文件名称 (文件夹 + 文件)

            filesTwo.forEach((fileTwo) => {
                let filePathTwo = filePath + "/" + fileTwo; // 当前文件 | 文件夹的路径
                // 满足查询条件文件
                if (fileTwo.indexOf('.vue') != -1) {
                    resultArr.push(filePathTwo);
                }
            });
        }
    });
    console.log(resultArr)
    // resultArr.map(ev => {
    //     read(ev)
    // })
    return resultArr;
}
// let urlList = getAllDirbyFilename('../../waihui/dongkwang/src/views', 'Index.vue')
function read(url, enkey) {
    let thatstr = []
    fs.readFile(url, "UTF-8", function (err, data) {
        if (err) {
            console.log('error', err.message);
            return
        }
        // 替换 '<h1>ARION</h1>'.replace("<")
        // 去内容 拆分  '<h1>ARION</h1>'.match(/\<.*?>/g)
        // let data
        // console.log(data.match(/\>.*?</g));
        let pageData = data
        let thisstr = []
        let regexp = /\>.*?</g  
        pageData.match(regexp).map(ev => {
            if (ev.length > 2 && ev.indexOf('(') == -1) {
                thatstr.push(ev.substr(1, ev.length - 2).trim())
                thisstr.push(ev)
            }
        })
 
        thisstr.map((ev, index) => {
            let jsonKey = enkey + '.a0' + index
            let htmlkey = ">{{ t('" + 'jsonKey' + "') }}<"
            pageData = pageData.replace(ev, htmlkey)
        })
        fs.writeFile(url, pageData, function (err) {
            console.log('成功', url)
        });
        fs.readFile('../../waihui/dongkwang/src/locales/en.json', 'UTF-8', function (err, data) {
            if (err) {
                console.log('error', err.message);
                return
            }
            // console.log(data, Object.getOwnPropertyNames({ "name": "dasd", "age": 18 }).length);
            // console.log(data, Object.getOwnPropertyNames(data).length);

            let JSONdata = JSON.parse(data)
            thatstr.map((ev, index) => {
                let jsonKey = enkey + '.a0' + index
                JSONdata[jsonKey] = ev
            })

            fs.writeFile('../../waihui/dongkwang/src/locales/en.json', JSON.stringify(JSONdata), function (err) {
                console.log('成功', 'en.json')
            });
        })
    })
}

// read('../../waihui/dongkwang/src/views/Business/AutoPartsOil.vue', 'Business.AutoPartsOil')
// read('../../waihui/dongkwang/src/views/Business/MarineService.vue','Business.MarineService')
// read('../../waihui/dongkwang/src/views/Business/TradingLogistics.vue','Business.TradingLogistics')

read('../../waihui/dongkwang/src/views/Company/AboutUs.vue','Company.AboutUs')
// read('../../waihui/dongkwang/src/views/Company/CEOGreetings.vue','Company.CEOGreetings')
// read('../../waihui/dongkwang/src/views/Company/ContactUs.vue','Company.ContactUs')
// read('../../waihui/dongkwang/src/views/Inquiry/Inquiry.vue','Inquiry.Inquiry')
// read('../../waihui/dongkwang/src/views/Press/Notice.vue','Press.Notice')
// read('../../waihui/dongkwang/src/views/Press/PressRelease.vue','Press.PressRelease')