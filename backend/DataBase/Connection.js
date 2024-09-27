const { MongoClient } = require('mongodb')

const URLConn = process.env.URLConn
const DBName = process.env.DBName
const CollProjects = process.env.CollProjects
const CollInfoPersonal = process.env.CollInfoPersonal
const CollInfoCV = process.env.CollInfoCV

const CreateCollections = require('./CreateCollections')

let Client = new MongoClient(URLConn)

const Connection = async () => {

  console.log('-'.repeat(60))
  console.log('Base de datos')  
  console.log()
    
  await Client.connect()
  const DB = Client.db(DBName)

  const CollectionsToCheck = [
    { name: CollProjects },
    { name: CollInfoPersonal },
    { name: CollInfoCV }
  ]

  await CreateCollections(DB, CollectionsToCheck)
  
  console.log()
  console.log('Base de datos establecida')
  console.log()
  console.log('-'.repeat(60))    
    
}

const CloseConnection = async () => {
  if(Client){
    await Client.close()    
    Client = null 
  }
}

module.exports = { Connection, CloseConnection }
