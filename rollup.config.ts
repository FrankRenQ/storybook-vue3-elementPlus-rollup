/**
 * @Author: 任强
 * @Date: 2023/2/22 20:06
 * @Version: 1.0
 * @Content:
 */
import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import vue from 'rollup-plugin-vue'

export default defineConfig([
    {
        input: 'src/index.js',
        external: ['vue'],
        output: {
            file: 'dist/rt-ui.js',
            format: 'esm',
            exports: 'named',
        },
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript({
                check: false
            }),
            vue(),
            postcss(),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.js', '.vue']
            })
        ]
    }
])
