// webpack.config.js
const slsw = require('serverless-webpack');

module.exports = {
    mode: 'development',
    entry: slsw.lib.entries,
    target: 'node',
};