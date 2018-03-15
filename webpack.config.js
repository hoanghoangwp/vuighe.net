const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/sass/main.scss',
        './src/js/main.js'
    ],
    output: {
        filename: 'dist/js/main.bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/css/style.bundle.css')
    ]
};