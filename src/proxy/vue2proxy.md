    config/index.js 
    dev内的
    
    proxyTable: {
      //一劳永逸，当你的前段请求/nc 开头的接口时 所有都会被转发http://c.m.163.com 进行请求 而且这次请求是nodejs发送的请求 所以跳过类ajax 跨域限制
      // "/nc":{
      //   target:"http://c.m.163.com",
      //   changeOrigin:true
      // },
      "/api": {
        target: "https://cnodejs.org",
        changeOrigin: true
      },
      "nc":{
        target:"http:c.m.163.com",
        changeOrigin: true
      }
    },