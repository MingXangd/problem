--legacy-peer-deps

在很多情况下会导致版本冲突 从而中断安卓过程

--legacy-peer-deps标志是在v7中引入的，目的是绕过peerDependency自动安装；它告诉 NPM 忽略项目中引入的各个modules之间的相同modules但不同版本的问题并继续安装，保证各个引入的依赖之间对自身所使用的不同版本modules共存。

在安装 依赖时报错 比如安装 npm i vuex

在日常使用命令npm install / npm install XX下载依赖的操作中，我经常会遇到无法解析依赖树的问题（依赖冲突）
code eresolve   unable to resolve dependecy tree 
但是每当遇到这种情况的时候，我用命令npm install --legacy-peer-deps就可以顺利进行下载操作

什么是peerDependency？
我们日常在前端项目开发过程中，见到最多的一定是package.json文件里的devDependencies（用于在开发环境下依赖的模块）和dependencies（无论开发环境还是生产环境都需要的依赖模块）

https://blog.csdn.net/devcloud/article/details/124469666