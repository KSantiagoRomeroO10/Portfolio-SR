const GenericModel = require('./GenericModel')
const { CloseConnection } = require('../DataBase/Connection')

class InfoPersonal extends GenericModel{
  constructor(InfoPersonal){
    super()
    this.InfoPersonal = InfoPersonal
  }

  async Create(){
    try {
      await this.ConnectionGeneric('InfoPersonal', ['Developer', 'Name', 'Residence', 'Email', 'Phone'])
      const IdInserted = await this.CreateGeneric(this.InfoPersonal)      
      return `Información personal creada con el id ${IdInserted}.`
    }
    catch (error) {
      throw new Error(`Error Creating InfoPersonal, ${error.message}`)
    }
    finally{
      await CloseConnection()
    }
  }

  async Read(Filtro = {}){
    try {
      await this.ConnectionGeneric('InfoPersonal', ['Developer', 'Name', 'Residence', 'Email', 'Phone'])
      const Search = await this.ReadGeneric(Filtro)      
      return `Información personal encontrada: ${Search}.`
    }
    catch (error) {
      throw new Error(`Error Read InfoPersonal, ${error.message}`)
    }
    finally{
      await CloseConnection()
    }
  }
}

module.exports = InfoPersonal
