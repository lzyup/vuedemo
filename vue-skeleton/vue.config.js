const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
    configureWebpack: (config) => {
        config.plugin.push(new SkeletonWebpackPlugin({
            webpackConfig: {
                entry: {
                    app: path.join(__dirname, './src/skeleton.js')
                }
            },
            minimize: true,
            quiet: true
        }))
    },
    //css配置
    css: {
        //是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/是src/的别名
                //所以这里假设你`src/variables.scss`这个文件
                data: `@import "@/common.scss"`
            }
        }
    },
    //启用CSS modules for all css/ pre-processor files
    modules: false
};
