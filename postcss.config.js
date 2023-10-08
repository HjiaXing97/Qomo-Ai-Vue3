// postcss.config.js

module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 1920, // 视口宽度
      unitPrecision: 5, // 单位精度
      viewportUnit: "vw", // 转换的视口单位
      selectorBlackList: [], // 忽略的 CSS 选择器
      minPixelValue: 1, // 最小的像素单位值
      mediaQuery: false // 是否允许媒体查询中转换
    }
  }
};
