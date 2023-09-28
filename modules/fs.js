const fs = require('fs')
const path = require('path')

// criar uma pasta
// na segunda vez ele ira apresentar o erro pois a pasta ja estara criada

 fs.mkdir(
    path.join(__dirname, '/teste'), 
    (error)=> {
    if(error){
     return   console.log('Erro: ', error)
    }

    console.log("Pasta criada com sucesso!")
}) 



// CRIAR UM ARQUIVO

fs.writeFile(
    path.join(__dirname, 'teste','test.html'), 
    'hello world!',
     (error) =>{
   if(error){
    console.log('Erro: ', error)
   }

   console.log("arquivo criado com sucesso!")
})

fs.writeFile(
    path.join(__dirname, 'teste','test.html'),
     'hello world!', 
     (error) =>{
    if(error){
     console.log('Erro: ', error)
    }
 
    console.log("arquivo criado com sucesso!")
 })
 

 // ADICIONAR A UM ARQUIVO

 fs.appendFile(
    path.join(__dirname, '/teste', 'test.txt'), 
    "so os loucos sabem.. ",
     (error) =>{
    if(error){
        console.log('Erro: ', error)
       }
    
       console.log("arquivo Modificado  com sucesso!")

 })

 //LER ARQUIVO
 fs.readFile(
    path.join(__dirname, '/teste', 'test.txt'),
     'utf-8',
      (error, data) =>{
    if(error){
        console.log('Erro: ', error)
       }
    
       console.log(data)

 })