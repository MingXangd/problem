const fs = require("fs");
const path = require("path");
//确认是否是正确路径
// fs.exists("./3.json",function(e){
//     console.log(e,'-*----')
// 	// 回调,e是exists的返回值，布尔值
// })
/**
 * 查询目标 目录下所有文件或文件夹名为 filename 的文件路径
 * @param {String} dir  查询目录
 * @param {String} filename  查询文件的名称
 * @returns {Array} 所有满足条件的文件路径
 */
function getAllDirbyFilename(dir, filename) {
  let dirPath = path.resolve(__dirname, dir);
  let files = fs.readdirSync(dirPath); // 该文件夹下的所有文件名称 (文件夹 + 文件)
  // console.log(dirPath, files);

  let resultArr = [];

  files.forEach((file) => {
    let filePath = dir + "/" + file; // 当前文件 | 文件夹的路径
    // 满足查询条件文件

    // if (file === filename) {
      // console.log(file, filePath, file === filename);
      return resultArr.push(filePath);
    // }

    // 继续深搜文件夹
    if (fs.statSync(filePath).isDirectory()) {
      resultArr.push(...getAllDirbyFilename(filePath, filename));
    }
  });

  return resultArr;
}

// 文件内容
// var iconv = require("iconv-lite");
function readrd(url, url2) {
  let data2 = {};
  fs.readFile(url2, "UTF-8", function (err, dataStr) {
    if (err) {
      return console.log("失败", err.message);
    }
    // data2 = dataStr.split('export default')[1];
    // data2 = eval("(" + dataStr.split('export default')[1] + ")");//第二种
    // var data1 = (new Function("return " + dataStr.split('export default')[1]))();//第三种
    // data2 = JSON.parse(dataStr.split('export default')[1]);
    data2 = JSON.parse(dataStr);
  });

  fs.readFile(url, "UTF-8", function (err, dataStr) {
    if (err) {
      return console.log("失败", err.message);
    }
    // console.log(dataStr)
    let obj = JSON.parse(dataStr);
    // let obj =  eval("(" + dataStr.split('export default')[1] + ")");//第二种;
    // console.log(data2,'data2')

    // console.log('成功',obj)

    for (let item in data2) {
      // console.log(item)
      if(item == 'agreement'&&!obj[item]){
        console.log(item, "item",url);

        obj[item] = data2[item];
        fs.writeFile(url, JSON.stringify(obj), function (err) {
          // console.log(err);
        });
     
      }
    }
    // console.log(obj)
  });
}

// fs.writeFile('./2.json','666',function(err){
//     console.log(err)
// })

// var fileStr = fs.readFileSync('11.txt',{encoding:'binary'});
// var buf = new Buffer.from(fileStr,'binary');
// var data = iconv.decode(buf,'GBK');
// console.log(data);
// console.log("结束end");


// 
// let fileArr = getAllDirbyFilename('./text', 'config.ini');
let fileArr = getAllDirbyFilename("../bitmelcd/src/i18n/modules", "en.js");

let fileArr2 = getAllDirbyFilename("../gefoce/src/i18n/modules", "en.js");
fileArr.map((ev,a)=>{
  // if(!a){
    readrd(fileArr2[a],ev);
  // }
})
// console.log(fileArr,fileArr2, "fileArr");