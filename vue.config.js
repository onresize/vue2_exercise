
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  // 去除vue打包后js目录下生成的.map文件、用于加速生产环境构建、默认打包后线上开启sourcemap
  productionSourceMap: false, 
  runtimeCompiler: true,
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
  }
}; 