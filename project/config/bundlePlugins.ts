import { Configuration, DefinePlugin, webpack } from "webpack"
import { BuildOptions } from "./types/types"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import path from "path"

export function bundlePlugins(options: BuildOptions): Configuration['plugins']{

    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ 
            template: options.paths.html,
            favicon: path.resolve(__dirname, options.paths.public, 'favicon.ico')
         }),
        // TREE SHAKING
        new DefinePlugin({
            _PLATFORM_: JSON.stringify(options.platform)
        })
    ]

    if(isDev){
        // plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin()),
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if(isProd){
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            })
        )
    }

    return plugins
}