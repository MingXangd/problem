//生成文案
const fs = require('fs');
const path = require('path');

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

  let fileArr = getAllDirbyFilename("../bitmelcd/src/pages/footerTemplate", "agreement.vue");
  readrd("../gefoce/src/pages/footerTemplate/agreement.vue",fileArr[0]);

  function readrd(url, url2) {
    let data2 = '';
    fs.readFile(url2, "UTF-8", function (err, dataStr) {
      if (err) {
        return console.log("失败", err.message);
      }
      data2 = dataStr
      console.log(typeof data2)
    });
    // console.log(data2)
    console.log(url)
    // fs.writeFile(url, data2, function (err) {
    //     console.log(err);
    // });
  }