const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        appendTodo: './src/modules/appendTodo.js',
        createProject: './src/modules/createProject.js',
        createTodo: './src/modules/createTodo.js',
        deleteTodo: './src/modules/deleteTodo.js',
        projectCreationPopup: './src/modules/projectCreationPopup.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },  
};

