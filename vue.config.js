module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? './' : './', //部署应用包时的基本 URL
    outputDir: 'dist', //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    assetsDir: 'assets', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    lintOnSave: false, // eslint-loader 是否在保存的时候检查   安装@vue/cli-plugin-eslint有效
    runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  devServer: {
    port: 80,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://47.101.144.241:3000/",
        ws: true,
        changeOrigin: true
      }
    },
    historyApiFallback: {
      index: "/index.html" //index.html为当前目录创建的template.html
    }
  },
  configureWebpack: { 
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      "element-ui": "ELEMENT",
      axios: "axios"
    }
  }
};
