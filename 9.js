const fs = require("fs");
const path = require("path");

// 文件内容
function readrd(url, url2) {

    let strurl = url + 'pages/fund/transfer.vue';
    fs.readFile(strurl, "UTF-8", function (err, dataStr) {
        if (err) {
            return console.log("失败", err.message);
        }
        // data2 = dataStr.split('export default')[1];
        // data2 = eval("(" + dataStr.split('export default')[1] + ")");//第二种
        // data2 = JSON.parse(dataStr);
        let str = dataStr.replace("onShow", "mounted")
        // str = str.replace("this.$public.captcha1(_data)", "this.$public.captcha1(_data, this)")
        fs.writeFile(strurl, str, function (err) {
            console.log('成功', url)
        });
    });
}

// readrd("../qatar/src/", "../qatar/src/views/securitycenter/capitalpasswordmodify.vue");

// readrd("../dmfnc/src/","../qatar/src/views/securitycenter/capitalpasswordmodify.vue");
// readrd("../eastcentergroup/src/", "../qatar/src/views/securitycenter/capitalpasswordmodify.vue");
// readrd("../mathews/src/", "../qatar/src/views/securitycenter/capitalpasswordmodify.vue");
// readrd("../radian/src/", "../qatar/src/views/securitycenter/capitalpasswordmodify.vue");
// readrd("../bitforex-copy/src/", "../qatar/src/views/securitycenter/capitalpasswordmodify.vue");
readrd("../standby-foreign/src/", "../qatar/src/views/securitycenter/capitalpasswordmodify.vue");

