const express = require('express')
const UserModel = require('../src/models/user.model')
const app = express()
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'src/views')

// CRIANDO UMA MIDLEWARE

    app.use((req, res, next) => {
        console.log(`Request Type: ${req.method}`)
        console.log(`Content Type: ${req.headers["content-type"]}`)
        console.log(`Date: ${new Date()}`)

       next()
    })

app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({})




    res.render('index', {users})
})



//FAZENDO UMA CHAMADA EM JSON
//METODO GET
app.get('/users', async (req, res) =>{
   try{
    const users = await UserModel.find({});
    res.status(200).json(users)
   }
   catch(error){
    return res.status(500).send(error.message)
   } 
  
})

app.get('/users/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findById(id)
        return res.status(500).json(user)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})
// METODO POSTO - ESCREVENDO UM VALOR
app.post('/users',async (req, res) => {
   try{
    const user = await UserModel.create(req.body)
    res.status(201).json(user);
   }catch(error){
    res.status(500).send(error.message)
   }
})
//METODO PATCH - FAZENDO UPLOAD DO VALOR(TROCAR DADOS)
app.patch('/users/:id', async (req, res) => {
    try{
        const id = req.params.id
const user = await UserModel.findByIdAndUpdate(id, req.body, {new:true}) // criando esse nre para o update aparecer com a atualização, se nao apareceria com o valor anterior
res.status(200).json(user)
    }
    catch(error){
        res.status(500).send(error.message)
    }
})
// METODO DELETE - DELETANDO A ESTRUTURA DO USUARIO
app.delete('/users/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id);
        res.status(200).json(user)

    }
    catch(error){
        res.status(500).send(error.message)
    }
})



// PORTA DO SERVIDOR DE CONEXAO
const port = 8080 

app.listen(port, () => console.log(`rodando com express na porta ${port}!`))