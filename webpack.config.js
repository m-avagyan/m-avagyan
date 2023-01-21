const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = (_env, { mode }) => {
  const isProduction = mode === "production";

  return {
    mode,
    entry: path.join(__dirname, "src", "index.js"),

    resolve: {
      alias: {
        images: path.resolve(__dirname, "src/public/images/"),
      },
    },

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
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",

            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "postcss-preset-env",
                      {
                        autoprefixer: {
                          grid: true,
                          flexbox: true,
                        },
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                native: false,
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "public", "index.html"),
      }),
      new MiniCssExtractPlugin(),
    ],

    optimization: {
      minimize: isProduction,
      minimizer: [
        new ESBuildMinifyPlugin({
          target: "es2015",
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
      server: "https",
      historyApiFallback: true,
    },
  };
};
