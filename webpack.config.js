let createWebpackConfigAsync  = require('@expo/webpack-config');
let path = require('path');


module.exports = async function (env, argv) {
    const config = await createWebpackConfigAsync(env, argv);
    // config.mode= 'production'
    // config.resolve.alias['react-native'] = 'react-native-web';
    // config.resolve.alias['react-native-maps'] = 'react-native-web-maps';
    // config.target = 'web';

    config.output = {
        path: path.resolve(__dirname, 'web-build'),
        filename: 'bundle.js',
    };

    config.optimization = {
        splitChunks: false,
        runtimeChunk: false,
    };


    // config.resolve = {
    //     extensions: ['.ts', '.tsx', '.js', '.jsx'],
    // };


    // config.devtool = 'source-map';

    // Disable code splitting
    // config.optimization


    // Disable performance warnings for large bundles
    config.performance.hints = false;

    return config;
};
