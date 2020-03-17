const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://www.coffeecola.cn:8080/",
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      pathRewrite: {
        "^/api": ""
      }
    })
  )
}
