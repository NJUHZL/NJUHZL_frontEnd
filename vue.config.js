module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.101.144.241/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
