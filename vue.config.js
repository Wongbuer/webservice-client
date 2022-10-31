const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://ws.webxml.com.cn/WebServices/MobileCodeWS.asmx',
                changeOrigin: true,
                pathRewrite: {
                    // 标识替换
                    // 原请求地址为 /api/todos 将'/api'替换''时，
                    // 代理后的请求地址为： http://localhost:3000/api/todos
                    // 若替换为'/other',则代理后的请求地址http://localhost:3000/api/other/todos
                    '^/api': ''
                }
            }
        }
    }
})
