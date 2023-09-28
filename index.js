/* const {Person} = require("./person")  */// Como esta exportando um objeto, colocar as {} no nome para ja receber nele

const dotenv = require('dotenv')

const connectToDatabase = require('./src/database/connect.js')

dotenv.config()

connectToDatabase()





/*  require("./modules/path") 
require("./modules/fs"); */

/* require("./modules/http") */

  require('./modules/express') 
/* const person = new Person('Diego') */


