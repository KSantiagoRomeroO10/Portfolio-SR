const { Connection, CloseConnection } = require('./Connection')
const Index = async () => {
  
  try {
    await Connection()    
  } 
  catch (error) {
    console.error(`Error al conectar con la base de datos: ${error.message}`)
  } 
  finally {
    await CloseConnection()
  }

}

module.exports = Index