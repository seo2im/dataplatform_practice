const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../srcs/index.tsx'),
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.join(__dirname, './.babelrc')
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
        })
    ]
};
