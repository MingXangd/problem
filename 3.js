// 删除注释
var fs = require('fs')
var path = require('path')

/** 目标遍历的文件夹 */
// var fileRootPath = path.resolve('../bitmelcd/src/i18n/modules')
var fileRootPath = path.resolve('../block/src/i18n/modules')


/** 遍历的文件类型 */
var fileTypes = ['js', 'ts', 'tsx']

/** 注释reg */
var commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm

function commentReplace(match, multi, multiText, singlePrefix) {
  return singlePrefix || ''
}

/** 遍历文件夹里的文件 */
function fileReplace(filePath) {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function(err, files) {
    if (err) {
      console.warn(err)
    } else {
      //遍历读取到的文件列表
      files.forEach(function(filename) {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename)
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function(eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败')
          } else {
            var isFile = stats.isFile() //是文件
            var isDir = stats.isDirectory() //是文件夹
            if (isFile) {
              const fileType = filedir.split('.')[1]
              if (fileTypes.indexOf(fileType) == -1) {
                return
              }
              console.log(filedir)

              var content = fs.readFileSync(filedir, 'utf-8')
              // 去除注释后的文本
              content = content.replace(commentRegExp, commentReplace)
              // 覆盖原文件内容
              fs.writeFileSync(filedir, content)
              console.log('success')
            }
            if (isDir) {
              fileReplace(filedir) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      })
    }
  })
}

fileReplace(fileRootPath)
