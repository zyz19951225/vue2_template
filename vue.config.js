
module.exports = {
    lintOnSave: false,
    devServer: {
        // Paths
        proxy: {
            '/api': {
                target: 'http://10.5.24.15:36976',  //目标接口域名
                // target: 'https://mock.mengxuegu.com/mock/61c5332cbba8817f8a41346c/examples',  //目标接口域名
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': '/'   //重写接口
                }
            }
        },
        // Various Dev Server settings
        host: '0.0.0.0',// can be overwritten by process.env.HOST
        port: 8081, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined

    },

}


