const path = require('path')
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
    chainWebpack: config => {
        config.module
            .rule('svg')
            .uses.clear()
        config.module
            .rule('svg1')
            .test(/\.svg$/)
            .use('svg-sprite')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
            .include
            .add(path.join(__dirname,'src/icons'))//这个地址为项目中svg文件的入口文件
            .end()
    }
}


