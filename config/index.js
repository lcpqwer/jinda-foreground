// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
// var root = process.env.API_ROOT
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8088,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/wave/index.php/': {
      //   target: 'http://web.moushu.org/wave/index.php/', // API服务所在IP及端口号
      //   changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
      //   pathRewrite: {
      //     '^/wave/index.php/': '' // 重写路径
      //   }
      // '/api': {
      //   target: 'http://web.moushu.org',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // }
      // '/api/**': {
      //   target: 'http://web.moushu.org/accounting/index.php/', //表示你跨域请求的接口的域名
      //   secure: false, //如果是https接口，需要配置这个参数
      //   changeOrigin: true, //如果接口跨域，需要进行这个参数配置
      // },
      // '/users/*': {
      //   target: 'http://127.0.0.1:8089'
      // }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
