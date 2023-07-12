const fs = require('fs');
const os = require('os');
//文字重叠
function readrd(url,url1){
    //less
    fs.readFile(url +'styles/contrac.less',"UTF-8",function(err,data){
        if(err){
            console.log('less error');
        }
        let str = data.replace(`margin-right: 23px;`,``)
        str = str.replace(`padding-right: 4vw;
                .display();
                .list{
                    flex: 1;`,`padding-right: 3vw;display: flex;
    justify-content: space-between;
                //.display();
                .list{
                    //flex: 1;`)
        fs.writeFile(url + 'styles/contrac.less',str,function(err1,data1){
            if(err1){
                console.log('err1',url);
            }
        })
    })
    
    //contheader.vue
    fs.readFile(url +'views/dazong/components/contheader.vue','UTF-8',function(err,data){
        if(err){
            console.log('contheader1');
        }
        let str = data.replace(`min-width: 350px;`,``)
        fs.writeFile(url + 'views/dazong/components/contheader.vue',str,function(){

        })
    })
    //e:/aproject/waihui/standby-foreign-pc/src/views/foreign/components/contheader.vue (2e5b58a)
    fs.readFile(url + 'views/foreign/components/contheader.vue','UTF-8',function(err,data){
        if(err){
            console.log('2');
        }
        let str = data.replace(`min-width: 350px;`, ``)
        fs.writeFile(url + 'views/foreign/components/contheader.vue',str,function(){

        })
    })
}

// readrd("../eastcentergroup-pc/src/", "../standby-foreign-pc/src/");
// jxbvip盘 radian盘
// Wazijie 盘
// Dmfnc 盘已关闭
// 就是以后都不用了 停用了
// readrd("../radian-pc/src/", "../standby-foreign-pc/src/");
// readrd("../dmfnc-pc/src/", "../standby-foreign-pc/src/");

// readrd("../qatar-pc/src/", "../standby-foreign-pc/src/");
// readrd("../mathews-pc/src/", "../standby-foreign-pc/src/");
// readrd("../echovfx-pc/src/", "../standby-foreign-pc/src/");
// readrd("../clokoa-pc/src/", "../standby-foreign-pc/src/");

// readrd("../bitforex-copy-pc/src/", "../standby-foreign-pc/src/");
// readrd("../standby-foreign-pc/src/", '../clokoa-pc/src/');


readrd("../../waihui-bit/wobzl-pc/src/");
readrd("../../waihui-bit/butchuae-pc/src/");
readrd("../../waihui-bit/bitforextop-pc/src/");
readrd("../../waihui-bit/mobzan-pc/src/");
readrd("../../waihui-bit/xmtalk-pc/src/");
readrd("../../waihui-bit/bitforex-copy-pc/src/");
// readrd("../../waihui-bit/yaoec-pc/src/");