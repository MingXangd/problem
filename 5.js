//隐藏 注册协议
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

    if (file === filename) {
      // console.log(file, filePath, file === filename);
      return resultArr.push(filePath);
    }

    // 继续深搜文件夹
    if (fs.statSync(filePath).isDirectory()) {
      resultArr.push(...getAllDirbyFilename(filePath, filename));
    }
  });
  return resultArr;
}


// 文件内容
// var iconv = require("iconv-lite");

function readrd(url) {

  fs.readFile(url, "UTF-8", function (err, dataStr) {
    if (err) {
      return console.log("失败", err.message);
    }
    // console.log(dataStr)
    let obj = dataStr.replace("{{$t('agreement.yhyw', { msg: strname })}}","");
    // let obj = JSON.parse(dataStr);
    // let obj =  eval("(" + dataStr.split('export default')[1] + ")");//第二种;
    // console.log(data2,'data2')

    // console.log('成功',obj)

    console.log('成功')
    fs.writeFile(url, obj, function (err) {
        // console.log(err);
    });
  });
}

// fs.writeFile('./2.json','666',function(err){
//     console.log(err)
// })

// let fileArr = getAllDirbyFilename('./text', 'config.ini');

// let fileArr = getAllDirbyFilename("../bitmelcd/src/pages/footerTemplate", "agreement.vue");
// let fileArr = getAllDirbyFilename("../okex/src/pages/footerTemplate", "agreement.vue");
// let fileArr = getAllDirbyFilename("../standby/src/pages/footerTemplate", "agreement.vue");
// let fileArr = getAllDirbyFilename("../xt/src/pages/footerTemplate", "agreement.vue");
let fileArr = getAllDirbyFilename("../qe/src/pages/footerTemplate", "agreement.vue");  //qe-org
// let fileArr = getAllDirbyFilename("../uk/src/pages/footerTemplate", "agreement.vue");  

// let fileArr = getAllDirbyFilename("../Franziska/src/pages/footerTemplate", "agreement.vue");  
// let fileArr = getAllDirbyFilename("../mtfexg-pc/src/pages/footerTemplate", "agreement.vue");  
// let fileArr = getAllDirbyFilename("../idscapt/src/pages/footerTemplate", "agreement.vue");  
// let fileArr = getAllDirbyFilename("../connectfsi/src/pages/footerTemplate", "agreement.vue");  
// let fileArr = getAllDirbyFilename("../bitfinexen/src/pages/footerTemplate", "agreement.vue");  
// let fileArr = getAllDirbyFilename("../ezifund/src/pages/footerTemplate", "agreement.vue");  
// let fileArr = getAllDirbyFilename("../gefoce/src/pages/footerTemplate", "agreement.vue");  
// let fileArr = getAllDirbyFilename("../block/src/pages/footerTemplate", "agreement.vue");  
// let fileArr = getAllDirbyFilename("../parachain/src/pages/footerTemplate", "agreement.vue");  


readrd(fileArr[0]);
console.log(fileArr, "fileArr");