const fs = require("fs");
const path = require("path");
const os = require('os')
//pc  cb7d092: 添加帮助中心

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
function readrd(url, url1 = '../standby-foreign-pc/src/') {
    //多语言文件
    fs.readFile(url1 + 'locale/lang/zh.json', "UTF-8", function (err, dataStr) {
        if (err) {
            return console.log("失败", err.message);
        }
        // data2 = eval("(" + dataStr.split('export default')[1] + ")");//第二种
        // let data2 = dataStr.replace('"invitation": "邀请机制"', '"invitation": "邀请机制","helpCenter": "帮助中心"')
        fs.readFile(url + 'locale/lang/zh.json',"UTF-8",function(erra,dataa){
            if (erra) {
                return console.log("失败", erra.message);
            }
            let comstr =  JSON.parse(dataa)
            comstr.common = JSON.parse(dataStr).common
            fs.writeFile(url + 'locale/lang/zh.json', JSON.stringify(comstr), function (err) {
                        console.log('成功', url)
                    });
        })
    });
    if (!fs.existsSync(url + 'views/help')) {
        //新建文件夹
        fs.mkdir(url + 'views/help', (err) => {
            if (err) throw err; // 如果出现错误就抛出错误信息
            console.log('文件夹创建成功');
        })
    }

    //帮助中心主页 (覆盖)
    fs.readFile(url1 + 'views/help/index.vue', "UTF-8", function (err, data) {
        if (err) {
            console.log(url, '帮助中心主页.js失败');
            return
        }
        fs.writeFile(url + 'views/help/index.vue', data, function (err1) {
            if (err1) {
                console.log('url 帮助中心主页');
                return
            }
        })
    })
    // home-pop
    fs.readFile(url + 'components/main/main.vue', "UTF-8", function (err, dataa) {
        if (err) {
            console.log('home-pop url');
            return
        }
        let str = dataa.replace(`<router-link to="authentication"`, ` <router-link to="helpCenter" class="meeee">
                      <i></i>
                      {{ $t('common.helpCenter') }}
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
        <router-link to="authentication"`)
        fs.writeFile(url + 'components/main/main.vue', str, function (error, date) {
            if (error) {
                console.log(date,'home-pop');
                return
            }
        })
    })
    //mian.js
    fs.readFile(url + 'config/index.js', "UTF-8", function (err, dataa) {
        if (err) {
            console.log('main url');
            return
        }
        let str = dataa.replace('enableSocket: true', 'enableSocket: true,' + os.EOL + "helpServiceURL: 'https://direct.lc.chat/15267201/'")

        fs.writeFile(url + 'config/index.js', str, function (error, date) {
            if (error) {
                console.log(date,'main--');
                return
            }
        })
    })
    //router/routers.js
    fs.readFile(url + 'router/routers.js', "UTF-8", function (eff, fada) {
        if (eff) {
            return console.log('package');
        }
        let str = fada.replace(`path: '/home',`, `
        path: '/helpCenter',
        name: 'helpCenter',
        meta: {
          title: 'common.helpCenter',
          headerLight: true
        },
        component: () => import('@/views/help/index.vue')
        },{
        path: '/home',`)
        str = fada.replace(`path: "/home",`, `
        path: '/helpCenter',
        name: 'helpCenter',
        meta: {
          title: 'common.helpCenter',
          headerLight: true
        },
        component: () => import('@/views/help/index.vue')
        },{
        path: "/home",`)
        console.log('routers--str');

        fs.writeFile(url + 'router/routers.js', str, function (err, data) {
            if (err) {
                return console.log(err.emssage);
            }
        })
    })
}

// readrd("../radian-pc/src/");

// readrd("../eastcentergroup-pc/src/");
// readrd("../qatar-pc/src/");
// readrd("../dmfnc-pc/src/");
// readrd("../mathews-pc/src/");
// readrd("../bitforex-copy-pc/src/");
readrd("../standby-foreign-pc/src/",'../clokoa-pc/src/');
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