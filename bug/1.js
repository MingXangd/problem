const fs = require("fs");
const path = require("path");
const os = require('os')
//app  cb7d092: 添加帮助中心
//判断文件是否存在方法
const folderPath = './bug/Rabbit';

// if (fs.existsSync(folderPath)) {
//     console.log('Folder exists');
// } else {
//     console.log('Folder does not exist');
// }
//新建文件夹
// fs.mkdir('./bug/Rabbit', (err) => {
//     if (err) throw err; // 如果出现错误就抛出错误信息

//     console.log('文件夹创建成功');
// })
//新建文件 
// fs.writeFile('./bug/Rabbit/ab.js', 'sss' + os.EOL +'rn 1',function(err,data){
//     if(err){
//         console.log(err,data)
//     }
// })
// 文件内容
function readrd(url, url1 = '../standby-foreign/src/') {
    //多语言文件
    fs.readFile(url1 + 'common/locales/zh.json', "UTF-8", function (err, dataStr) {
        if (err) {
            return console.log("失败", err.message);
        }
        // data2 = eval("(" + dataStr.split('export default')[1] + ")");//第二种

        let data2 = dataStr.replace('"5l2o5h2upw40": "客服"', '"5l2o5h2upw40": "客服","5l2o5h2upw41": "帮助中心","5l2o5h2upw43": "帮助中心"')
        fs.writeFile(url + 'common/locales/zh.json', data2, function (err) {
            console.log('成功', url)
        });
    });
    if (fs.existsSync(url + 'pages/help')) {
    console.log('Folder exists');
} else {
    console.log('Folder does not exist');
        //新建文件夹
        fs.mkdir(url + 'pages/help', (err) => {
            if (err) throw err; // 如果出现错误就抛出错误信息
            console.log('文件夹创建成功');
        })
}

    //帮助中心主页 (覆盖)
    fs.readFile(url1 + 'pages/help/index.vue', "UTF-8", function (err, data) {
        if (err) {
            console.log(url, '帮助中心主页.js失败');
            return
        }
        fs.writeFile(url + 'pages/help/index.vue', data, function (err1) {
            if (err1) {
                console.log('url 帮助中心主页');
                return
            }
        })
    })
    //icon (覆盖)
    fs.readFile(url1 + 'static/iconfont.js', "UTF-8", function (err, data) {
        if (err) {
            console.log(url, 'icon.js失败');
            return
        }
        fs.writeFile(url + 'static/iconfont.js', data, function (err1) {
            if (err1) {
                console.log('url icon');
                return
            }
        })
    })
    // home-pop
    fs.readFile(url + 'components/home-popup/index.vue', "UTF-8", function (err, dataa) {
        if (err) {
            console.log('home-pop url');
            return
        }
        let str = dataa.replace(`image: '#icon-shezhi-xianxing'`, `  image: '#icon-bangzhuzhongxin',
          name: this.$t('mine.index.5l2o5h2upw43'),
          url: '/pages/help/index',
          needToken: true
        },
        {
          image: '#icon-shezhi-xianxing'`)
        fs.writeFile(url + 'components/home-popup/index.vue', str, function (error, date) {
            if (error) {
                console.log(date,'home-pop');
                return
            }
        })
    })
    //mian.js
    fs.readFile(url + 'main.js', "UTF-8", function (err, dataa) {
        if (err) {
            console.log('main url');
            return
        }
        let str = dataa.replace('Vue.prototype.$official_service', 'Vue.prototype.$help_service = "https://direct.lc.chat/15267201/";' + os.EOL + 'Vue.prototype.$official_service')
        fs.writeFile(url + 'main.js', str, function (error, date) {
            if (error) {
                console.log(date,'main--');
                return
            }
        })
    })
    //pages.json
    fs.readFile(url + 'pages.json', "UTF-8", function (eff, fada) {
        if (eff) {
            return console.log('package');
        }
        let str = fada.replace(` ],`, `,
    {
      "path":"pages/help/index",
      "style": {
        "navigationBarTitleText": "",
        "enablePullDownRefresh": false
      }
    }
  ],`)
        fs.writeFile(url + 'pages.json', str, function (err, data) {
            if (err) {
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
// readrd("../standby-foreign/");
readrd("../clokoa/src/");

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