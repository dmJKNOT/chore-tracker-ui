const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

console.log("invoking webpack.conf.js. Happy Making!!!")

module.exports = {
    entry: path.join(__dirname, "./src", "index.tsx"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        // contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        allowedHosts: "auto",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
            'Access-Control-Allow-Headers': '*'
        }
    },
    resolve: {
        alias: {
          "@": path.resolve(__dirname, '/src'),
        },
        extensions: [".ts", ".tsx", ".js", ".css", ".scss", ".json", ".svg"]
    },
    module: {
        rules: [
            // {
            //     test: /\.(ts|tsx)$/,
            //     exclude: /node_modules/,
            //     loader: 'ts-loader',
            //     options: {
            //         compilerOptions: {noEmit: false}
            //     }
            // },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            // {
            //     test: /\.(png|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(svg|png|gif|jpg|ico)$/,
                include: path.resolve(__dirname, "public/img/[name].[hash].[ext]"),
                use: {
                    loader: 'file-loader',
                    options: {
                        context: 'src/assets',
                        name: 'root[path][name].[ext]'
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            // outputPath: 'images/', // Specify the output directory for images
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // filename: './index.tsx',
            favicon: 'src/assets/icons/favicon.ico'
        }),
    ]
}