// 移动
const fs = require("fs")
const path = require("path")
// const { COPYFILE_EXCL } = fs.constants;
var filePath = path.resolve('src/api');

//调用文件遍历方法
fileDisplay(filePath);

//文件遍历方法
function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, (err, files) => {
        if (err) {
            console.warn(err)
        } else {
            //遍历读取到的文件列表
            files.forEach((filename) => {
                //获取当前文件的绝对路径
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir, (eror, stats) => {
                    if (eror) {
                        console.warn('获取文件stats失败');
                    } else {
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if (isFile) {
                            // 文件重命名
                            try {
                                // 文件名
                                let fileName = filedir.split('\\').pop()
                                if (fileName.includes('.js')) {
                                    let pathList = filedir.split('\\')
                                    pathList.splice(pathList.length - 3, 2, 'abc')
                                    // 文件新的路径
                                    let newPathToFile = pathList.join('\\')
                                    // let newPathToFile = 'abc/' + fileName
                                    // 移动到新路径 把 ./1 文件夹下(包括子文件夹【区别是有没有用递归】)的 js 文件 移动（复制）到  ./1/1.1文件夹下
                                    fs.copyFileSync(filedir, newPathToFile)
                                    // 删除原文件
                                    try {
                                        // fs.unlinkSync(filedir);
                                    } catch (err) {
                                        // 处理错误
                                    }
                                }
                            } catch (err) {
                                throw err
                            }
                        } else if (isDir) {
                            //递归，如果是文件夹，就继续遍历该文件夹下面的文件
                            fileDisplay(filedir);
                        }
                    }
                })
            });
        }
    });
}



