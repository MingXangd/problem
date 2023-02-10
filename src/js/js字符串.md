1  charAt() 查找字符串位置返回下角标
"hello".charAt(1)
string.charAt(index)
返回字符串对应下角标的字符

    charCodeAt()   //获取指定位置处字符的ASCII码

2 concat() 字符串拼接返回拼接后的字符传
"hello".concat("1")
string.concat(string1,string2)
字符拼接

3 indexOf 有无字符   返回index 或者-1
string.indexOf(string,start)
start 整数规定字符串中检索的位置 默认0 首字符开始检索

4 includes() 查找字符 返回true false
string.includes(searchvalue,start)
start 选填从哪个位置开始寻找

5 match()
let str = 'hello'
str.match(/l/g)
str.match(regexp)
regexp 必填 规定要匹配的模式regexp对象 如果该参数不是regexp对象 需要首先吧它传给regexp构造函数，将其转换成regexp对象

6 repeat 将字符串复制指定次数返回
str.repeat(count)
count 必填 设置复制次数

7 replace() 字符串替换一部分字符串
str.replace(string/regexp,string/function())

8 replaceAll() 同replace() 匹配所有

9 search() 返回与正则表达式查找内容匹配的第一个字符串的位置。

10 slice(start,end) 截取字符串的某个部分

11 split(string) 根据string 拆分字符串成数组

12 substring(start,end) 用于提取字符串中介于指定的下角标字符
     substr()    //从start位置开始，截取length个字符

13 toLowercase() 转小写
   toUppercase() 转大写

14 trim() 去收尾空格
