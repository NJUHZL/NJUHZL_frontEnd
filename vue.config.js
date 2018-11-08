module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://easy-mock.com/mock/5bdeee5fa35eff759a8a804f/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
