const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

// Middleware to set the Authentication header
app.use((req, res, next) => {
    if (req.path !== '/api/auth/login') {
        const TOKEN = localStorage.getItem("token");
        req.headers['Authorization'] = `Bearer ${TOKEN}`;
    }
    next();
});

app.use(
    '/api',
    createProxyMiddleware({
    target: process.env.API_HOST ?? 'http://example.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/'
    },
    })
);
};