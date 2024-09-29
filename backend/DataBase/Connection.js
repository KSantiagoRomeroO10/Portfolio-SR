const { MongoClient } = require('mongodb')

const URLConn = process.env.URLConn
const DBName = process.env.DBName


let Client = new MongoClient(URLConn)

const Connection = async () => {
  
  await Client.connect()
  const DB = Client.db(DBName)
  
  console.log('Base de datos conectada.')
  console.log()

  return DB
    
}

const CloseConnection = async () => {
  if(Client){
    await Client.close()    
    Client = null 
  }
}

module.exports = { Connection, CloseConnection }
