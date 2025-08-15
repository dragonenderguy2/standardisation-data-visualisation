const path = require('path');

module.exports = {
    entry: './src/index.js', // Point d'entrée principal de l'application
    output: {
        path: path.resolve(__dirname, 'dist'), // Répertoire de sortie
        filename: 'bundle.js', // Nom du fichier de sortie
    },
    devServer: {
        static: './dist', // Dossier à servir pour le développement
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Regex pour tous les fichiers .js
                exclude: /node_modules/, // Exclure le dossier node_modules
                use: {
                    loader: 'babel-loader', // Utilisation de babel-loader pour transpiler le code
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Presets pour Babel
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Extensions à résoudre lors de l'importation
    },
};