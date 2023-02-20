const fs = require("fs");
const path = require("path");

// 文件内容
function readrd(url) {
    let strurl = url + 'views/assets/total.vue';
    console.log(strurl)
    fs.readFile(strurl, "UTF-8", function (err, dataStr) {
        if (err) {
            return console.log("失败", err.message);
        }
        // data2 = dataStr.split('export default')[1];
        // data2 = eval("(" + dataStr.split('export default')[1] + ")");//第二种
        // data2 = JSON.parse(dataStr);
        let str = dataStr.replace('<el-table-column prop="mark"', '<el-table-column v-if="false" prop="mark"')
        str = str.replace('width="265"', 'width="393"')
        str = str.replace('width="300"', 'width="393"')
        str = str.replace('width="306"', 'width="393"')
     
        // str = str.replace("this.$public.captcha1(_data)", "this.$public.captcha1(_data, this)")
        fs.writeFile(strurl, str, function (err) {
            console.log('成功', url)
        });
    });
}

// readrd("../qatar/src/");
// readrd("../dmfnc/src/");
// readrd("../eastcentergroup/src/");
// readrd("../mathews/src/");
// readrd("../radian/src/");
// readrd("../bitforex-copy/src/");
// readrd("../standby-foreign/src/");



// readrd("../eastcentergroup-pc/src/");

// readrd("../qatar-pc/src/");
// readrd("../dmfnc-pc/src/");
// readrd("../mathews-pc/src/");
// readrd("../radian-pc/src/");
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
read('../dongkwang/src/App.vue')