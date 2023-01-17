// 修改单个文件
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
    let obj = dataStr.replace("// this.getBibiList();","this.getBibiList();");
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

//  readrd('./text', 'config.ini');
// readrd("../qe/src/pages/quotation.vue", "agreement.vue");  //qe-org
// readrd("../standby/src/pages/quotation.vue", "agreement.vue");
 
//  readrd("../bitmelcd/src/pages/quotation.vue", "agreement.vue");
//  readrd("../okex/src/pages/quotation.vue", "agreement.vue");
//  readrd("../xt/src/pages/quotation.vue", "agreement.vue");
//  readrd("../uk/src/pages/quotation.vue", "agreement.vue");  

//  readrd("../Franziska/src/pages/quotation.vue", "agreement.vue");  
//  readrd("../mtfexg-pc/src/pages/quotation.vue", "agreement.vue");  
//  readrd("../idscapt/src/pages/quotation.vue", "agreement.vue");  
//  readrd("../connectfsi/src/pages/quotation.vue", "agreement.vue");  
//  readrd("../bitfinexen/src/pages/quotation.vue", "agreement.vue");  
//  readrd("../ezifund/src/pages/quotation.vue", "agreement.vue");  
//  readrd("../gefoce/src/pages/quotation.vue", "agreement.vue");  
//  readrd("../block/src/pages/quotation.vue", "agreement.vue");  
//  readrd("../parachain/src/pages/quotation.vue", "agreement.vue");  
//  readrd("../venlyglobal/src/pages/quotation.vue", "agreement.vue");  


 
// readrd(fileArr[0]);
// console.log(fileArr, "fileArr");