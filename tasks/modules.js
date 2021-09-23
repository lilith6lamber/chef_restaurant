const {
    src,
    dest
} = require('gulp');

const webpack = require('webpack-stream');

module.exports = function modules() {
    return src('src/js/index.js')
        .pipe(webpack({
            watch: true,
            mode: 'production',
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            },
            entry: {
                index: './src/js/index.js',
                map: './src/js/map.js',
            },
            output: {
                filename: '[name].js',
            },
        }))
        .pipe(dest('build/js'))
}