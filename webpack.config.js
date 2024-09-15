let createWebpackConfigAsync  = require('@expo/webpack-config');
let path = require('path');

module.exports = async function (env, argv) {
    const config = await createWebpackConfigAsync(env, argv);
    config.resolve.alias['react-native'] = 'react-native-web';
    config.resolve.alias['react-native-maps'] = 'react-native-web-maps';
    config.target = 'web';

    config.output = {
        path: path.resolve(__dirname, 'web-build'),
        filename: 'bundle.js',
    };

    config.optimization = {
        splitChunks: false,
        runtimeChunk: false,
    };


    config.resolve = {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    };

    config.module.rules.push(
        {
            test: /\.(ts)x?$/,
            exclude: /node_modules|\.d\.ts$/, // this line as well
            use: {
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        noEmit: false, // this option will solve the issue
                    },
                },
            },
        },
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                },
            },
            exclude: /node_modules/,
        }
    );

    config.devtool = 'source-map';

    return config;
};
