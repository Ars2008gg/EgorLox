import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function bundleResolves(options: BuildOptions): Configuration['resolve']{
    return{
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    }
}