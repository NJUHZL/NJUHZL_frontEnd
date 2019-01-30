module.exports = {
  baseUrl: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.101.144.241:3000/",
        ws: true,
        changeOrigin: true
      }
    },
    historyApiFallback: {
      index: "./index.html" //index.html为当前目录创建的template.html
    }
  }
};
