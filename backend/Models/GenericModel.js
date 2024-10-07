const { Connection } = require('../DataBase/Connection')

class GenericModel{

  async ConnectionGeneric(NameCollection, Keys){   
    try {
      const DB = await Connection()      
      this.Collection = DB.collection(`${NameCollection}`)
      this.RequiredFields = Keys
      this.NameCollection = this.Collection.s.namespace.collection
      return DB
    } 
    catch (error) {     
      throw new Error(`Message ConnectionGeneric, ${error.message}.`)
    }
  }

  ValidationStructureBasic(Data) {
    const DataFields = Object.keys(Data)
    
    const MissingFields = this.RequiredFields.filter(Field => !DataFields.includes(Field))    
    if(MissingFields.length > 0){
      throw new Error(`Faltan los siguientes campos: ${MissingFields.join(' ')}`)
    }    

    const InvalidFields = DataFields.filter(Field => !this.RequiredFields.includes(Field))
    if(InvalidFields.length > 0){
      throw new Error(`Los siguientes campos no son validos: ${InvalidFields.join(' ')}`)      
    }

    return true

  }

  ValidationSpecific(Data){    
    const DataFields = Object.keys(Data)

    const SearchFields = this.RequiredFields.filter(Field => DataFields.includes(Field))
    const InvalidFields = DataFields.filter(Field => !this.RequiredFields.includes(Field))
  
    return SearchFields.length > 0 && InvalidFields.length < 1 ? true : false

  }

  async CreateGeneric(NewData) {
    try {
      if(this.ValidationStructureBasic(NewData)){
        const Insert = await this.Collection.insertOne(NewData)
        return Insert.insertedId
      } 
    } 
    catch (error) {
      throw new Error(`Error en CreateGeneric, ${error.message}`)
    }
  }
  
  async ReadGeneric(Filtro = {}) {
    if(Object.keys(Filtro).length > 0 && !this.ValidationSpecific(Filtro)){
      throw new Error(`Los filtros ${Object.keys(Filtro).join(' ')} no son validos para buscar.`)
    }
    const Documentos = await this.Collection.find(Filtro).toArray()

    if(Documentos.length > 0) console.log('Documentos encotrados: ', Documentos)
    else console.log('No hay documentos para mostrar.')
    
    return Documentos
  }
  
  async UpdateOneGeneric(Filtro, DateUpdate) {
    if(this.ValidationSpecific(Filtro) && this.ValidationSpecific(DateUpdate)){
      const Result = await this.Collection.updateOne(Filtro, { $set: DateUpdate })
      console.log('Documento actualizado: ', Result.modifiedCount)
    }
    else{
      throw new Error(`La estructura de datos de Filtro o DateUpdate dada para ${this.NameCollection} no es valida, no se puede actualizar el documento.`)
    }
  }
  
  async UpdateManyGeneric(Filtro, DateUpdate) {
    if(this.ValidationSpecific(Filtro) && this.ValidationSpecific(DateUpdate)){
      const Result = await this.Collection.updateMany(Filtro, { $set: DateUpdate })
      console.log('Documentos actualizados: ', Result.modifiedCount)
    }
    else{
      throw new Error(`La estructura de datos de Filtro o DateUpdate dada para ${this.NameCollection} no es valida, no se puede actualizar el documento.`)
    }
  }
  
  async DeleteOneGeneric(Filtro) {
    if(this.ValidationSpecific(Filtro)){
      const Result = await this.Collection.deleteOne(Filtro)
      console.log('Documento Eliminado: ', Result.deletedCount)
    }
    else{
      throw new Error(`La estructura de datos del Filtro dada para ${this.NameCollection} no es valida, no se puede eliminar el documento.`)
    }
  }
  
  async DeleteManyGeneric(Filtro) {
    if(this.ValidationSpecific(Filtro)){
      const Result = await this.Collection.deleteMany(Filtro)  
      if(Result.deletedCount > 0){
        console.log('Documentos Eliminados: ', Result.deletedCount)
      }
      else{
        console.log('Documento no eliminado, no se encontró el documento.')      
      } 
    }
    else{
      throw new Error(`La estructura de datos del Filtro dada para ${this.NameCollection} no es valida, no se pueden eliminar los documentos.`)
    }
  }

}

module.exports = GenericModel
