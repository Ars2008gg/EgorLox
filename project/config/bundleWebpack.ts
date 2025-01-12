import webpack from 'webpack'
import { bundleDevServer } from "./bundleDevServer";
import { bundleLoaders } from "./bundleLoaders";
import { bundlePlugins } from "./bundlePlugins";
import { bundleResolves } from "./bundleResolves";
import { BuildOptions } from "./types/types";

export function bundleWebpack(options: BuildOptions): webpack.Configuration{
    
    const {mode, paths} = options
    const isDev = options.mode === 'development'
    
    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
          path: paths.output,
          filename: 'bundle.[contenthash].js',
          clean: true
        },
        plugins: bundlePlugins(options),
        module: {
          rules: bundleLoaders(options),
        },
        resolve: bundleResolves(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? bundleDevServer(options) : undefined
      }
} 