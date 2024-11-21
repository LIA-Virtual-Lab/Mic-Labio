const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/animation.js", // Arquivo de entrada principal
  output: {
    path: path.resolve(__dirname, "dist"), // Diretório de saída
    filename: "bundle.js", // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use esta regra para arquivos JavaScript
        exclude: /node_modules/, // Exclua a pasta node_modules
        use: {
          loader: "babel-loader", // Use o babel-loader para transpilar o código
          options: {
            presets: ["@babel/preset-env"], // Use o preset @babel/preset-env
          },
        },
      },
      {
        test: /\.css$/, // Use esta regra para arquivos CSS
        use: ["style-loader", "css-loader"], // Use os loaders style-loader e css-loader para processar os estilos
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // Diretório base para o servidor de desenvolvimento
    port: 8080, // Porta do servidor de desenvolvimento
    open: true, // Abra o navegador automaticamente ao iniciar o servidor
  },
  devtool: "source-map",
};
