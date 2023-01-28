/**
 * <a-input v-model="form.cn_name" v-else
										onkeyup="value=value.replace(/[^\u4e00-\u9fa5]/g,'')"/>
										只可以出入中文
										
	<a-input v-model="form.en_name" v-else
		onkeyup="value=value.replace(/[^a-z A-Z]/g,'')" />
		只能输入英文
 */

/**
 * 生成 uuid
 */
uuid() {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";
	var uuid = s.join("");
	return uuid;
}
/**
 *  生成 带逗号的英文格式金额数字
 */
fanjiebao(val, to = 2, num = 1) {
	//金额转换 分->元 保留2位小数 并每隔3位用逗号分开 1,234.56
	var str = (val / num).toFixed(to) + '';
	var intSum = str.substring(0, str.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g, ','); //取到整数部分
	var dot = str.substring(str.length, str.indexOf(".")) //取到小数部分搜索
	var ret = intSum + dot;
	return ret;
	//输出结果->20,000.00
}

/**
 * 判断是否是数字
 */
// this.form.qty = this.form.qty.replace(/[^\d]/g, '')


/**
 * 根据浏览器可是窗口 改变body 的fontsize rem设置
 */
fnResize();
window.addEventListener('resize', () => {
	fnResize();
});
/**
 * pc
 */
function fnResize() {
	var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
	console.log(deviceWidth, (deviceWidth / 100) + 'px');
	document.documentElement.style.fontSize = (deviceWidth / 100) + 'px';
}
/**
 * phone  '92%';
 */
function fnResize() {
	var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
	document.documentElement.style.fontSize = sta == 'pc' ? (deviceWidth / 100) + 'px' : '92%';
}
/**
 * 判断当前登入的设备
 */
function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	// 您的浏览设备为：
	if (bIsIphoneOs || bIsAndroid) {
		sta = 'phone'
	} else {
		sta = 'pc'
	}
}


// Number.isNaN()   
// Number.isFinite()只有数字返回true 字符串数字 等返回false
// Number.parseInt('12.31') //12  简写 parseInt()
// Number.parseFloat('123.45#') // 123.45  parseFloat()
// Number.isInteger(21.5)  判断数值是否是整数 返回 true false

// Math.trunc(4.1)  用于出去一个小数点小数部分  返回整数部分
// Math.sign 判断一个数到底是正数负数还是零 对于非数值 会将其转换成 数值


randomValue() {
		return Math.round(Math.random() * 1000);
	},

	emailfn() {
		if (this.form.email) {
			var t = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
			if (!(t.test(this.form.email))) {
				this.form.email = ''
				this.$message.warning('請輸入正確的電郵地址')
			}
		}
	},
	
	// vue3
// beforeCreate  创建之前
// created		  创建
// before mount  
// mounted       安装
// beforeupdate  更新前
// updated		  更新
// activated	  
// beforeUnmount 卸载前
// unmounted	  卸载
// errorCaptured 错误的
// rendertracked 渲染跟踪
// renderTriggered 渲染触发
disabledDate(val) {
				var time = val._d
				//time.getTime() < Date.now() || time.getTime() >Date.now() + 3 * 30 * 24 * 60 * 60 * 1000 ||
				var statenow = time.getDay() == 0 || time.getDay() == 6 || this.jiejiari.indexOf(time.getFullYear() + '-' +
					(time
						.getMonth() + 1) + '-' + time.getDate()) >= 0;
				return statenow;
			},
			
			
handexcel(){
				let str = ''
				if(this.island == 'yitijiao'){
					str = this.$api.SubmittedKh
				}else if(this.island == 'weitijao'){
					str = this.$api.Unsubmit
				}
				let obj = this.$refs[this.island].getfn()
				// obj.inviterid = this.itemobj.inviterid
				let urls = '?inviterid=' + this.itemobj.inviterid
				urls+='&token=' + this.$store.state.token
				for(let key in obj){
						urls += '&'+ key+'='+obj[key]
				}
				// window.location.href  = str + urls
				console.log(urls)
				this.$ajax({
					method: 'get',
					url: str+urls,
					responseType: 'blob'
				}).then(res => {
					const BLOB = res.data; // Blob 对象表示一个不可变、原始数据的类文件对象（File 接口都是基于Blob）
					      const fileReader = new FileReader(); // FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件的内容
					      fileReader.readAsDataURL(BLOB); // 开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个data: URL格式的Base64字符串以表示所读取文件的内容
					      fileReader.onload = (event) => { // 处理load事件。该事件在读取操作完成时触发
					        // 新建个下载的a标签，完成后移除。
					        let a = document.createElement('a');
					        a.download = this.island == 'yitijiao'?`已提交開户.xlsx`:`未提交開户.xlsx`;
					        a.href = event.target.result; 
					        document.body.appendChild(a);
					        a.click();
					        document.body.removeChild(a);}
				},err=>{
					// this.$message.warning(res.data)
				}).catch(res=>{
					// this.$message.warning(res.data.qmismsg)
				})
				
			},
			/*
			变量提升到底是什么？
			
			当 JavaScript 编译所有代码时，所有使用 var 的变量声明都被提升到它们的函数/局部作用域的顶部(如果在函数内部声明的话)，或者提升到它们的全局作用域的顶部(如果在函数外部声明的话)，而不管实际的声明是在哪里进行的。这就是我们所说的“提升”。请记住，这种“提升”实际上并不发生在你的代码中，而只是一种比喻，与JavaScript编译器如何读取你的代码有关。记住当我们想到“提升”的时候，我们可以想象任何被提升的东西都会被移动到顶部，但是实际上你的代码并不会被修改。
			
			函数声明也会被提升，但是被提升到了最顶端，所以将位于所有变量声明之上。
			
			在编译阶段变量和函数声明会被放入内存中，但是你在代码中编写它们的位置会保持不变。
			(移动到顶部的是变量声明，而不是赋值给变量的实际值。)
			*/