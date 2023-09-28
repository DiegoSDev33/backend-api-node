

const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose.connect("mongodb+srv://diegodevsilva:admin@cluster0.gvyzhtc.mongodb.net/node?retryWrites=true&w=majority")
    .then(() => {
      console.log('Conexão com o banco de dados estabelecida com sucesso');
    })
    .catch((error) => {
      console.error('Erro na conexão com o banco de dados:', error);
    });
};

module.exports = connectToDatabase;








/*     const mongoose = require('mongoose')

const connectToDatabase = async () =>{
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.gvyzhtc.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
        if(error) {
                return console.log('Ocorreu um erro ao se conectar ao banco de dados', error)
        }
        return console.log('conexao ao banco de dados realizado com sucesso')
    })
    
}

module.exports = connectToDatabase;   */




// para callbaclk
/*  const mongoose = require('mongoose');

const connectToDatabase = ()=>{
 mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.gvyzhtc.mongodb.net/node?retryWrites=true&w=majority`, function (error) {
  if (error) {
    console.error('Erro na conexão com o banco de dados:', error);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  }
});
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.gvyzhtc.mongodb.net/node?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  })
  .catch((error) => {
    console.error('Erro na conexão com o banco de dados:', error);
  });
}
  module.exports = connectToDatabase; 

 */
  

  
/* 
  const mongoose = require('mongoose');

  function connectToDatabase() {
    return new Promise((resolve, reject) => {
      mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.gvyzhtc.mongodb.net/databse?retryWrites=true&w=majority`)
        .then(() => {
          console.log('Conexão com o banco de dados estabelecida com sucesso');
          resolve();
        })
        .catch((error) => {
          console.error('Erro na conexão com o banco de dados:', error);
          reject(error);
        });
    });
  }
  
  module.exports = connectToDatabase;
   */
  

  
