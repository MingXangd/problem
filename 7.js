const fs = require("fs");
const path = require("path");

// 文件内容
// var iconv = require("iconv-lite");
function readrd(url, url2) {
  
  let strurl = url + 'pages/fund/transfer.vue';
  fs.readFile(strurl, "UTF-8", function (err, dataStr) {
    if (err) {
      return console.log("失败", err.message);
    }
    // data2 = dataStr.split('export default')[1];
    // data2 = eval("(" + dataStr.split('export default')[1] + ")");//第二种
    // var data1 = (new Function("return " + dataStr.split('export default')[1]))();//第三种
    // data2 = JSON.parse(dataStr.split('export default')[1]);
    // data2 = JSON.parse(dataStr);
    // console.log(dataStr)
    let str = dataStr.replace("onShow", "mounted")
    // str = str.replace("this.$public.captcha1(_data)", "this.$public.captcha1(_data, this)")
    fs.writeFile(strurl, str, function (err) {
        console.log('成功',url)
      });
  });

//   fs.readFile(url, "UTF-8", function (err, dataStr) {
//     if (err) {
//       return console.log("失败", err.message);
//     }
//     // console.log(dataStr)
//     let obj = JSON.parse(dataStr);
//     // let obj =  eval("(" + dataStr.split('export default')[1] + ")");//第二种;
//     // console.log(data2,'data2')

//     // console.log('成功',obj)

//     for (let item in data2) {
//       // console.log(item)
//       if(item == 'agreement'&&!obj[item]){
//         console.log(item, "item",url);

//         obj[item] = data2[item];
//         fs.writeFile(url, JSON.stringify(obj), function (err) {
//           // console.log(err);
//         });
     
//       }
//     }
    // console.log(obj)
//   });
}

// readrd("../qatar-pc/src/", "../qatar-pc/src/views/securitycenter/capitalpasswordmodify.vue");

// readrd("../dmfnc-pc/src/","../qatar-pc/src/views/securitycenter/capitalpasswordmodify.vue");
// readrd("../eastcentergroup-pc/src/", "../qatar-pc/src/views/securitycenter/capitalpasswordmodify.vue");
// readrd("../mathews-pc/src/", "../qatar-pc/src/views/securitycenter/capitalpasswordmodify.vue");
// readrd("../radian-pc/src/", "../qatar-pc/src/views/securitycenter/capitalpasswordmodify.vue");
// readrd("../bitforex-copy-pc/src/", "../qatar-pc/src/views/securitycenter/capitalpasswordmodify.vue");
readrd("../standby-foreign-pc/src/", "../qatar-pc/src/views/securitycenter/capitalpasswordmodify.vue");

