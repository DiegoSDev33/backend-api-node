const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    if(req.url =='/home'){
        res.writeHead(200, {'Content-Type': "text/html"}); //  200 significa que o sitema esta run ok
        res.end('<h1>home page</h1>')
    }
    if(req.url == '/users' ){
        const users = [
            {
                name:'Diego Santos',
                email:'diego@diego.com'
            },
            {
                name:'Juliana Santos',
                email:'juliana@juliana.com'
            }
        ]
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users))
    }
})

server.listen(port, ()=> console.log(`rodando na porta ${port} !`));