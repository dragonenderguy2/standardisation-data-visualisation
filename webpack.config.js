const path = require('path');

module.exports = {
    entry: './src/index.js', // Main entry point of the application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Name of the output file
    },
    devServer: {
        static: './dist', // Directory to serve for development
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Regex for all .js files
                exclude: /node_modules/, // Exclude the node_modules folder
                use: {
                    loader: 'babel-loader', // Use babel-loader to transpile the code
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for Babel
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Extensions to resolve when importing
    },
};