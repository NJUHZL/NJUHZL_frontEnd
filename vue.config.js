module.exports = {
  //baseUrl: "./",
  devServer: {
    port: 80,
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
