import path from 'path'

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import DotenvFlow from 'dotenv-flow-webpack'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
const isDev = process.env.NODE_ENV !== 'production'

const srcDir = path.join(__dirname, 'src')
const outDir = path.join(__dirname, 'dist/js')

function getEntry(name: string) {
  return [path.join(srcDir, name), ...(isDev ? [`mv3-hot-reload/${name}`] : [])]
}

const config: webpack.Configuration = {
  watch: isDev,
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'inline-source-map' : 'source-map',
  // @ts-ignore
  devServer: {
    hot: true,
    firewall: false,
    port: 3912,
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      watch: false,
    },
    client: {
      host: 'localhost',
    },
  },
  entry: {
    background: getEntry('background'),
    content: getEntry('content'),
  },
  output: {
    path: outDir,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /skin\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /content\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          // auto insert react runtime
          presets: [['react-app', { runtime: 'automatic' }]],
          plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': srcDir,
      FroalaEditor: 'file_name',
    },
    modules: ['../node_modules/froala-editor/js', 'node_modules'],

    fallback: {
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
    },
  },
  // @ts-ignore
  plugins: [
    new CleanWebpackPlugin(),
    new DotenvFlow(),
    new MiniCssExtractPlugin(),
    new webpack.EnvironmentPlugin({
      MV3_HOT_RELOAD_PORT: 7761,
    }),
    isDev &&
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
  ].filter(Boolean),
}

export default config
