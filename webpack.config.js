const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = (env, { mode }) => {
  const isProduction = mode === "production";

  return {
    mode,
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "js/[name].[chunk].js" : "js/[name].js",
      chunkFilename: isProduction ? "js/[name].[chunk].js" : "js/[name].js",
    },

    module: {
      rules: [
        {
          test: /\.?(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "public", "index.html"),
      }),
    ],

    optimization: {
      minimize: isProduction,
      minimizer: [
        new ESBuildMinifyPlugin({
          target: "es2015",
          css: true,
        }),
      ],
    },

    performance: {
      maxEntrypointSize: Infinity,
      maxAssetSize: 1024 ** 2,
    },

    devtool: isProduction ? "source-map" : "inline-source-map",

    devServer: {
      host: "0.0.0.0",
      port: 3000,
      https: true,
      historyApiFallback: true,
    },
  };
};
