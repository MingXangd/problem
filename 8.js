const fs = require("fs");
const path = require("path");

// 文件内容
// var iconv = require("iconv-lite");
function readrd(url, url2) {
  fs.readFile(url, "UTF-8", function (err, dataStr) {
    if (err) {
      return console.log("失败", err.message);
    }
    let obj = dataStr.replace(
      "<title>",
      '<link  href="https://unpkg.com/pdfh5@1.4.2/css/pdfh5.css"><title>'
    );
    obj = obj.replace(
      "</html>",
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><script src="https://unpkg.com/pdfh5@1.4.2/js/pdf.js"></script><script src="https://unpkg.com/pdfh5@1.4.2/js/pdfh5.js"></script><script src="https://unpkg.com/pdfh5@1.4.2/js/pdf.worker.js"></script></html>'
    );
    fs.writeFile(url, obj, function (err) {
      console.log("成功", url);
    });
  });
}

// readrd("../venlyglobal/index.html", "../xt/index.html");
// readrd("../qe/index.html", "../xt/index.html"); //qe-org
// readrd("../standby/index.html", "../xt/index.html");
// readrd("../bitmelcd/index.html", "../xt/index.html");
// readrd("../okex/index.html", "../xt/index.html");
// readrd("../uk/index.html", "../xt/index.html");
// readrd("../Franziska/index.html", "../xt/index.html");
// readrd("../mtfexg-pc/index.html", "../xt/index.html");
// readrd("../idscapt/index.html", "../xt/index.html");
// readrd("../connectfsi/index.html", "../xt/index.html");
// readrd("../bitfinexen/index.html", "../xt/index.html");
// readrd("../ezifund/index.html", "../xt/index.html");
// readrd("../gefoce/index.html", "../xt/index.html");
// readrd("../block/index.html", "../xt/index.html");
// readrd("../parachain/index.html", "../xt/index.html");

//  readrd("../xt/index.html", "../xt/index.html");
