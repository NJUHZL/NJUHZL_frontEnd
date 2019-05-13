//引入express
const express = require('express');
//引入中间件，解决history模式
const history = require('connect-history-api-fallback');
//监听的端口
const port = 80;
const app = express();

const timeout = require('connect-timeout');
const proxy = require('http-proxy-middleware');

// 超时时间
const TIME_OUT = 30 * 1e3;

// 设置端口
app.set('port', '80');

// 设置超时 返回超时响应
app.use(timeout(TIME_OUT));
app.use((req, res, next) => {
    if (!req.timeout) next();
});
proxyOption = {
    target: 'http://47.101.144.241:3000/',
    // pathRewrite: {
    //     '^/api/' : '/' // 重写请求，api/解析为/
    // },
    changeOrigin:true
};

// 反向代理
app.use('/api/*', proxy(proxyOption));

//使用中间件
app.use(history());
//设置静态文件路径
app.use(express.static('./dist'));
//监听端口
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    } else {
        console.log('Listening at http://localhost:' + port + '\n')
    }
});