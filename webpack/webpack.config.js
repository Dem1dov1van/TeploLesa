const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.pug'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        })
    ],
    module: {
        rules: [
            {test: /\.css$/},
            {test: /\.s[ac]ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader},
                    'css-loader', 'sass-loader']
            },
            {test: /\.(svg|png|gif)$/,
                loader: 'file-loader',
                options: {name: '[name].[ext]', outputPath: 'img'}
            },
            {test: /\.pug$/, loader: 'pug-loader'}
        ]
    }
}
