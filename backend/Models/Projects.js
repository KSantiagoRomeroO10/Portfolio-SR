const GenericModel = require('./GenericModel')

const Projects = (DB) => {
  const Projects = new GenericModel(DB.collection('Projects'), ['Title', 'Description', 'Technologies', 'URLGit', 'URLDeployment'])
  return Projects
}

module.exports = Projects
