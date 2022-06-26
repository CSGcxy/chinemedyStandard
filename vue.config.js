module.exports = {
    devServer: {
        host: 'localhost',
        port: '8088',
        disableHostCheck: true,
        // proxy: {
        //     '/':{
        //         // target: 'http://115.25.46.34:9001',
        //         target: 'http://localhost:8080',
        //         changeOrigin: true,
        //         pathRewrite:{
        //             '^/': ''
        //         }
        //     }
        // }
    },
};
