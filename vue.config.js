
const path = require('path')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

console.log('当前环境：', process.env)

// webpack配置参考： https://blog.csdn.net/gcyaozuodashen/article/details/128715388
module.exports = {
  publicPath: process.env.ENV === "production" ? "/" : "/",
  outputDir: "myDist",
  // productionSourceMap: true,  // 打包生成map索引文件、默认true开启
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了
  devServer: {
    host: '0.0.0.0',
    port: 8787,
    open: false,
    proxy: {
      '/apiSohu': {
        target: 'http://pv.sohu.com/', // localhost=>target
        changeOrigin: true,
        pathRewrite: {
          '/apiSohu': '/'
        }
      },
    },
    disableHostCheck: true,
    historyApiFallback: true
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end();

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'myicon-[name]'
      });
  },
  configureWebpack: config => {
    if (process.env.ENV === "production") {
      config.optimization.minimizer = [
        new UglifyJsPlugin({
          sourceMap: true, // 这里做了优化也需要开启sourceMap打包才能生成map文件
          uglifyOptions: {
            output: {
              comments: true, // 删除注释
            },
            warnings: false,
            compress: {
              drop_console: true,  // true为删除console
              drop_debugger: true,  // true为删除debugger
              pure_funcs: ["console.log"],
            }
          }
        })
      ];
    }
  }
}; 