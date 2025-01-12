import path from 'path'
import webpack from 'webpack'
import { BuildMode, BuildPaths, BuildPlatform } from './config/types/types'
import { bundleWebpack } from './config/bundleWebpack'

interface EnvVariables {
  port: number,
  mode: BuildMode,
  platform: BuildPlatform
}

export default (env: EnvVariables) => {

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'bundle'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
  }

  const config: webpack.Configuration = bundleWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    platform: env.platform ?? 'desktop'
  })

  return config
}

