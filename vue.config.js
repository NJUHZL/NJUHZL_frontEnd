module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.101.144.241/3000",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
