const { Connection } = require('./Connection')
const CreateCollections = require('./CreateCollections')

const Index = async () => {
  console.log('-'.repeat(60))
  console.log('Reporte de la Base de datos')
  console.log()

  try {
    const DB = await Connection()
    await CreateCollections(DB)
  } 
  catch (error) {
    console.error('Error: ', error.message)    
  }
  
}

module.exports = Index