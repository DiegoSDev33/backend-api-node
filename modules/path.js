const path = require('path')

// Basename - consigo pegar o nome do arquivo atual e chamalo para o index.js

console.log(path.basename(__filename));

// nome do diretorio atual
console.log(path.dirname(__filename))

// extensao do arquivo ".js"
console.log(path.extname(__filename))

// criar objeto path

console.log(path.parse(__filename))

// junte varios caminhos de arquivos

console.log(path.join(__dirname, "teste"))