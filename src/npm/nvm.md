nvm 作用 

nvm是一个node版本管理工具
需要在不同项目中使用不同的node版本，可以使用nvm管理node版本

nvm 命令

nvm ls ：列出所有已安装的 node 版本

nvm ls-remote ：列出所有远程服务器的版本（官方node version list）

nvm list ：列出所有已安装的 node 版本

nvm on  开启node.js版本管理。

nvm off  关闭node.js版本管理。

nvm proxy [url]  设置下载代理。不加可选参数url，显示当前代理。将url设置为none则移除代理。

nvm list available ：显示所有可下载的版本 （查看网络上可安装的版本号  LTS表示长期稳定版）

nvm install stable ：安装最新版 node

nvm install [node版本号] ：安装指定版本 node

nvm uninstall [node版本号] ：删除已安装的指定版本

nvm use [node版本号] ：切换到指定版本 node

nvm current ：当前 node 版本

nvm alias [别名] [node版本号] ：给不同的版本号添加别名

nvm unalias [别名] ：删除已定义的别名

nvm alias default [node版本号] ：设置默认版本

nvm root [path] 设置和查看root路径 （传path参数，设置路径。反之，查看路径）

/* nvm use [node版本号] 切换有时候会报错 
   解决方法 卸载 node 
   运行 nvm root 显示出 nvm安装的目录
   打开 nvm文件夹下的settings.txt文件添加
   node_mirror: https://npm.taobao.org/mirrors/node/
   npm_mirror: https://npm.taobao.org/mirrors/npm/
   指向淘宝 一句是 node下载地址 二句是npm
*/