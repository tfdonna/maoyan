module.exports = {
    publicPath: './',
    lintOnSave: true,
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        https: false,
        open: true,
        proxy: {
            './': {
                target: 'https://m.maoyan.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    }
}