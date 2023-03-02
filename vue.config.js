module.exports = {
  runtimeCompiler: true,
  //TODO 上面这一句相当于下面这样写、这里不写不会出界面效果、智慧显示代码
  // chainWebpack: (config) => { 
  //   config.resolve.alias
  //     .set("vue$", "vue/dist/vue.esm.js");
  // },
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
    disableHostCheck: true
  },
}; 