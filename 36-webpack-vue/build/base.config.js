// 这个path包本身就在node里面，不需要安装
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'maindist.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader负责将css加载
                // style-loader负责将样式添加到DOM
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /\.less$/,

                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            },
            {
                test: /\.(png|ipg|git|jpeg)$/,

                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                // 排除
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归什么玩意'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}