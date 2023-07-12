const fs = require('fs');
const os = require('os');
const { execSync } = require('child_process');
//首先到指定的项目文件夹下运行 git pull
// 然后查询是否有某个文件a
// 有文件a读取文件a 
// 查询文件内容 a换成b
// 然后保存 提交git

function readrd(url,url1){
    const projectDirUrl = url + '/src/views/shopUsdt/shopUsdt.vue';
    // 切换到项目文件夹
    process.chdir(url);

    // 运行git pull
    execSync('git pull');

    // 检查文件是否存在
    if (fs.existsSync(projectDirUrl)) {
        // 读取文件a
        let content = fs.readFileSync(projectDirUrl, 'utf8');
        // 将a替换为b
   
        const arr = content.split('this.selectClassEnd,')
        if (arr.length == 4){
            let str =''
            arr.map((ev,i)=>{
                str+=ev
                if(i==1){
                    str += 'this.selectSell,'
                }else if(i<3){
                    str += 'this.selectClassEnd,'
                }
            })
            const newContent = str
            // 保存修改后的内容到文件
            fs.writeFileSync(projectDirUrl, newContent);
        }

        // 提交修改到git
        // execSync('git add shopUsdt && git commit -m "法币bug"');
    }
}

// readrd("../eastcentergroup-pc");
// jxbvip盘 radian盘
// Wazijie 盘
// Dmfnc 盘已关闭
// 就是以后都不用了 停用了
// readrd("../radian-pc");
// readrd("../dmfnc-pc");

readrd("../qatar-pc");
// readrd("../mathews-pc");
// readrd("../echovfx-pc");
// readrd("../clokoa-pc");

// readrd("../bitforex-copy-pc");
// readrd("../standby-foreign-pc", '../clokoa-pc');

// readrd("../../waihui-bit/wobzl-pc");
// readrd("../../waihui-bit/butchuae-pc");
// readrd("../../waihui-bit/bitforextop-pc");
// readrd("../../waihui-bit/mobzan-pc");
// readrd("../../waihui-bit/xmtalk-pc");
// readrd("../../waihui-bit/bitforex-copy-pc");
// readrd("../../waihui-bit/yaoec-pc");