// 引入express
const express = require('express')
const cors = require('cors')
// 调用express()
const app = express()
 
// 设置请求对应的处理函数--当客户端以get方法请求,
//请求地址后面需要加/getbooks才能访问到响应后的数据
//app.get('/getbooks')相当于添加事件监听，当用户以get方法请求时，地址后面需要跟/getbooks，后面的回调函数才会执行

app.use(cors())
app.get('/getbooks', function (request, response) {
    request.header('Access-Control-Allow-Origin', 'example.com');
  let books = {
    "status": 200,
    "msg": "获取图书列表成功",
    "data": [
      {
        "id": 1,
        "bookname": "西游记",
        "author": "吴承恩",
        "publisher": "北京图书出版社"
      },
      {
        "id": 2,
        "bookname": "红楼梦",
        "author": "曹雪芹",
        "publisher": "上海图书出版社"
      },
      {
        "id": 3,
        "bookname": "三国演义",
        "author": "罗贯中",
        "publisher": "北京图书出版社"
      }
    ]
  }
//response.send是express框架提供的方法，相当于结束本次请求。
  response.send(books)
})
 
app.post('/booklist' ,function (request, response) {
    request.header('Access-Control-Allow-Origin','example.com')
    let str= {
        "static":200,
        "msg":"成功",
        "data":[
            {
                "name":001
            },{
                "name":002
            }
        ]
    }
    response.send(str)
})
// 监听端口，启动web服务
app.listen(8000, function () {
  console.log('app listening on port 8000!')
})