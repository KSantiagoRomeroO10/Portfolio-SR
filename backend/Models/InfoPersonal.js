const GenericModel = require('./GenericModel')

const InfoPersonal = (DB) => {
  const InfoPersonal = new GenericModel(DB.collection('InfoPersonal'), ['Developer', 'Name', 'Residencia', 'Correo', 'Telefono'])
  return InfoPersonal
}

module.exports = InfoPersonal
