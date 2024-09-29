const { Connection, CloseConnection } = require('./Connection')
const CreateCollections = require('./CreateCollections')

const InfoPersonal = require('../Models/InfoPersonal')

const Index = async () => {
  console.log('-'.repeat(60))
  console.log('Reporte de la Base de datos')
  console.log()

  try {
    const DB = await Connection()
    await CreateCollections(DB)

    // const NewInfoPersonal = InfoPersonal(DB)
    // const NewData = {
    //   Developer: 'Developer',
    //   Name: 'asdf',
    //   Residencia: 'Residencia',
    //   Correo: 'Correo',
    //   Telefono: 'Telefono'
    // }
    // await NewInfoPersonal.Create(NewData)
    // await NewInfoPersonal.Read({Loca: 'Loca'})
    // await NewInfoPersonal.Read({Name: 'name'})
    // await NewInfoPersonal.UpdateOne({ Loca: 'asdf' }, { Telefono: '123-456-78910' })
    // await NewInfoPersonal.UpdateMany({ Name: 'Name' }, { Name: 'Santiago' })
    // await NewInfoPersonal.DeleteOne({ Name: 'Santiago' })
    // await NewInfoPersonal.DeleteMany({ Name: 'asdf' })
  } 
  catch (error) {
    console.error('Error: ', error.message)    
  }
  finally{
    await CloseConnection()
  }
  
}

module.exports = Index