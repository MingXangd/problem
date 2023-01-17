text-indent  首行缩进

<a href="javascript:void(0)"></a>

Math.random() * (50 - 0 + 1) + 0; //0-50之间的随机数

//打印出0-999之间所有的 水仙花数，所谓 水仙花数 是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个 水仙花数 ，因为153=1的三次方＋5的三次方＋3的三次方。注意: 编码运行出结果, 最后正确答案是: 153 370  371 407

		for(a = 100; a <= 999; a++) {
			var bai = Math.floor(a / 100);
			var shi = Math.floor((a - bai * 100) / 10);
			var ge = Math.floor((a - bai * 100 - shi * 10) % 10);
			if (bai != 0 && shi != 0 && ge != 0){ // 当三位都不为0时, 再计算
				if(bai * bai * bai + shi * shi * shi + ge * ge * ge == a) {
					console.log(a);
				}
			}
			
		}

随机颜色
        var rand = Math.floor(Math.random() * (9 + 1));

        // 设置随机颜色
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        // rgb(123, 154, 198)
        "rgb(" + r + "," + g + "," + b + ")";

object.hasOwnProperty(key) 获取当下一级的key返回 true false