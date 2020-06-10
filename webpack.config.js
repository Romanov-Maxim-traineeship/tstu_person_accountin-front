const path = require("path");
const sveltePreprocess = require("svelte-preprocess");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const packageJSONConfig = require("./package.json");

const preprocesses = sveltePreprocess({
  postcss: true,
});

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const openBrowser = !(process.env.BROWSER === "none");
const publicPath = isDev ? "/" : packageJSONConfig.homepage;

const svelteConfig = {
  mode: isDev ? "development" : "production",
  bail: isProd,
  devtool: isDev ? "cheap-module-source-map" : false,

  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    hot: false,
    open: openBrowser,
    port: 3000,
  },

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath,
    filename: isProd ? "[name].[contenthash:8].js" : "bundle.js",
    chunkFilename: isProd ? "[name].[contenthash:8].chunk.js" : "[name].chunk.js",
  },

  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
      constants: path.resolve(__dirname, "src/constants/"),
      assets: path.resolve(__dirname, "src/assets/"),
      utils: path.resolve(__dirname, "src/utils/"),
      components: path.resolve(__dirname, "src/components/"),
      apiAdapter: path.resolve(__dirname, "src/apiAdapter/"),
    },
  },

  module: {
    rules: [
      {
        test: /\.svelte$/,
        // exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: false,
            preprocess: preprocesses,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "images",
          // name: "images/[name].[ext]",
        },
      },
    ],
  },

  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name].[id].css",
    }),

    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: path.resolve(__dirname, "public", "index.html"),
        },
        isProd
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined,
      ),
    ),
  ].concat(isDev ? [new webpack.HotModuleReplacementPlugin()] : []),
};

module.exports = [svelteConfig];
