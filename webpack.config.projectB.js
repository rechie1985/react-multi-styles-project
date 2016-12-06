var webpack = require("webpack");
var path = require("path");

// 将require css文件提取到header中
// var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
    context: __dirname,
    entry: {
        index: ['./src/index.js', 'webpack/hot/dev-server'],
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "dist/", // relative path for github pages
        filename: "[name].js", // no hash in main.js because index.html is a static page
        chunkFilename: 'chunk/[name].[chunkhash:5].js',
    },
    // recordsOutputPath: path.join(__dirname, "records.json"),
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015'],
            }
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader!regexp-replace-loader?{"match":{"pattern": "#{{projectName}}", "flags": "g"}, "replaceWith": "projectB"}'//"style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader"
        }]
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 20 }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
    fakeUpdateVersion: 0
};


module.exports = config;
