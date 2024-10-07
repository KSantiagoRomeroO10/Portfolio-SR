const GenericModel = require('./GenericModel')
const { Connection, CloseConnection } = require('./Connection')

const CV = async() => {
  try {
    const DB = await Connection()
    const CV = new GenericModel(DB.collection('CV'), ['DescriptionGeneral', 'AcademicHistory', 'ProfesionalProfile', 'SkillsAbilities.'])
    return CV
  } 
  catch (error) {
    console.error('Error: ', error.message)    
  }
  finally{
    await CloseConnection()
  }
}

module.exports = CV
