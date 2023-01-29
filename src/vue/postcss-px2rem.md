vue 自适应布局postcss-px2rem详解

lib-flexible 和 amfe-flexible

lib-flexible 是淘宝项目组开发的开源插件 会自动的在html的head中添加meta name="viewport"标签
同时会自动设置html font-size为屏幕宽度除以10 也就是1rem等于根节点的font-size 
amfe-flexible是lib-flexible的升级版本 与其搭配postcss-px2rem(pxtorem)作用把px转变为rem
下载 amfe-flexible  cnpm install postcss-px2rem -s
下载 postcss-px2rem  cnpm install postcss-px2rem -s
小tip:使用yarn下载不了

为避免兼容问题 版本参考
amfe-flexible 2.2.1
core-js  2.6.5
postcss-px2rem 0.3.0
vue 2.6.10

在 main.js 引入 amfe-flexible
  import amfe-flexinle
在 vue.config.js 文件配置postcss
  vue-cli3 配置入下
  module.export = {
    css:{
        loaderOptions:{
            css:{},
            postcss:{
                plugins:[
                    require('postcss-px2rem')({
                        remUnit:37.5
                    })
                ]
            }
        }
    }
  }

vue-cli2配置
module.exports = {
    "plugins":{
        "postcss-url":{},
        "postcss-import":{},
        "autoprefixer":{},
        "postcss-pxtorem":{
                rootValue: 100, // 换算基数，默认100，把根标签的font-size规定为1rem为50px,在设计稿上量出多少px直接在代码中写多少px
                unitPrecision: 5,  //保留rem小数点多少位
                propList: ['*', '!border', '!font-size'], //  存储将被转换的属性列表，'!font-size' 即不对字体进行rem转换
                selectorBlackList: ['.radius'], // 要忽略并保留为px的选择器，例如fs-xl类名，里面有关px的样式将不被转换，支持正则写法。
                replace: true,
                mediaQuery: false,//（布尔值）媒体查询( @media screen 之类的)中不生效
                minPixelValue: 12,///设置要替换的最小像素值，px小于12的不会被转换
                //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性
                propBlackList: ['font-size'], //黑名单
        }
    }
}

参考：

https://blog.csdn.net/weixin_44388523/article/details/90445885

https://blog.csdn.net/qq_42031498/article/details/106054343

https://github.com/cuth/postcss-pxtorem

https://github.com/mrsunx/lib-flexible#readme

到此这篇关于vue自适应布局（postcss-px2rem）的文章就介绍到这了,更多相关vue自适应布局内容请搜索脚本之家以前的文章或继续浏览下面的相关文章希望大家以后多多支持脚本之家！