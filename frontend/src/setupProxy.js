const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/backend',
    createProxyMiddleware({
      target: 'http://192.168.1.100:5001',
      changeOrigin: true,
    }),
  );
};
