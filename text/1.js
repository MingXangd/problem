const fs = require("fs");
const path = require("path");
const xlsx = require("node-xlsx");

// 解析xlsx文件
let list = xlsx.parse("./txte.xlsx");
// 取出第一张工作表
let data = list[0].data;
// console.log(data);
let applist = []
data.map((ev,a)=>{
    if(ev.length == 6){
        applist.push(ev)
    }else{
        // console.log(ev,a)
    }
})


let chdata = {};
let jadata = {};
let endata = {};

function arrfn(list,num){
    for(let key in list){
        if(typeof list[key] == 'object'){
            arrfn(list[key])
        }else{
            applist.map(ev=>{

                console.log(ev)
                // if(ev[num] == list[key]){
                //     chdata[ev[num]].push(key)
                //     console.log(ev[num])
                // }
            })
        }
    }
    console.log(chdata)
}

// 文件内容
// var iconv = require("iconv-lite");
function readrd(url, url2) {
  let churl = url + "zh.json";
  let jaurl = url + "ja.json";
  let enurl = url + "en.json";

  fs.readFile(churl, "UTF-8", function(err, dataStr) {
    if (err) {
      return console.log("失败", err.message);
    }
    let arr= JSON.parse(dataStr);
    arrfn(arr,5)
  });

  fs.readFile(jaurl, "UTF-8", function(err, dataStr) {
    if (err) {
      return console.log("失败", err.message);
    }
    jadata = dataStr;
      // obj = obj.replace(
  //   "</html>",
  //   '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><script src="https://unpkg.com/pdfh5@1.4.2/js/pdf.js"></script><script src="https://unpkg.com/pdfh5@1.4.2/js/pdfh5.js"></script><script src="https://unpkg.com/pdfh5@1.4.2/js/pdf.worker.js"></script></html>'
  // );
  // fs.writeFile(url, obj, function (err) {
  //   console.log("成功", url);
  // });
  });

  fs.readFile(enurl, "UTF-8", function(err, dataStr) {
    if (err) {
      return console.log("失败", err.message);
    }
    endata = dataStr;
  });




}

readrd("../../qatar/src/common/locales/");
