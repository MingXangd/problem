// https://github.com/michael-ciniawsky/postcss-load-config


// postcssrc.js

module.exports = {
  "plugins": {
    "postcss-px2rem": {
      remUnit: this.$isMobile ? 75 : 192,//设计图是1920
      "propList": ["*"],
      minPixelValue: 12, // px小于12的不会被转换
      unitPrecision: 2, // 保留rem小数点多少位
    },
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
