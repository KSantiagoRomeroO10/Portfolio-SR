const GenericModel = require('./GenericModel')

const CV = (DB) => {
  const CV = new GenericModel(DB.collection('CV'), ['DescriptionGeneral', 'AcademicHistory', 'ProfesionalProfile', 'SkillsAbilities.'])
  return CV
}

module.exports = CV
