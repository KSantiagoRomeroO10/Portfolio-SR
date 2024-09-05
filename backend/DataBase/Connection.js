const { MongoClient } = require('mongodb')

const URLConn = process.env.URLConn
const DBName = process.env.DBName
const CollProjects = process.env.CollProjects
const CollInfoPersonal = process.env.CollInfoPersonal
const CollInfoCV = process.env.CollInfoCV

const Connection = async () =>{
  const Client = new MongoClient(URLConn)

  try {
    await Client.connect()
    const DB = Client.db(DBName)

    const Collections = await DB.listCollections().toArray()

    const ProjectsExist = Collections.some(Coll => Coll.name === CollProjects)
    const InfoPersonalExist = Collections.some(Coll => Coll.name === CollInfoPersonal)
    const InfoCVExist = Collections.some(Coll => Coll.name === CollInfoCV)

    if(!ProjectsExist || !InfoPersonalExist || !InfoCVExist){ 
      await DB.createCollection(CollProjects)
      await DB.createCollection(CollInfoPersonal)
      await DB.createCollection(CollInfoCV)
    }
    
    console.log('Base de datos establecida')    
  } 
  catch (error) {
    console.log(`Error al conetar: ${error.message}`)    
  }
  finally{
    await Client.close()
  }
}

module.exports = Connection
