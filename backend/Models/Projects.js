const GenericModel = require('./GenericModel')
const { Connection, CloseConnection } = require('./Connection')

const Projects = async () => {
  try {
    const DB = await Connection()
    const Projects = new GenericModel(DB.collection('Projects'), ['Title', 'Description', 'Technologies', 'URLGit', 'URLDeployment'])
    return Projects
  } 
  catch (error) {
    console.error('Error: ', error.message)    
  }
  finally{
    await CloseConnection()
  }
}

module.exports = Projects
