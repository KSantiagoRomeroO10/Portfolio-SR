class GenericModel{

  constructor(Collection, Fields){
    this.Collection = Collection
    this.RequiredFields = Fields
    this.NameCollection = Collection.s.namespace.collection    
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

  async Create(NewData) {
    if(this.ValidationStructureBasic(NewData)){
      const Insert = await this.Collection.insertOne(NewData)
      console.log(Insert.insertedId)
    }
  }
  
  async Read(Filtro = {}) {
    if(Object.keys(Filtro).length > 0 && !this.ValidationSpecific(Filtro)){
      throw new Error(`Los filtros ${Object.keys(Filtro).join(' ')} no son validos para buscar.`)
    }
    const Documentos = await this.Collection.find(Filtro).toArray()

    if(Documentos.length > 0) console.log('Documentos encotrados: ', Documentos)
    else console.log('No hay documentos para mostrar.')
    
    return Documentos
  }
  
  async UpdateOne(Filtro, DateUpdate) {
    if(this.ValidationSpecific(Filtro) && this.ValidationSpecific(DateUpdate)){
      const Result = await this.Collection.updateOne(Filtro, { $set: DateUpdate })
      console.log('Documento actualizado: ', Result.modifiedCount)
    }
    else{
      throw new Error(`La estructura de datos de Filtro o DateUpdate dada para ${this.NameCollection} no es valida, no se puede actualizar el documento.`)
    }
  }
  
  async UpdateMany(Filtro, DateUpdate) {
    if(this.ValidationSpecific(Filtro) && this.ValidationSpecific(DateUpdate)){
      const Result = await this.Collection.updateMany(Filtro, { $set: DateUpdate })
      console.log('Documentos actualizados: ', Result.modifiedCount)
    }
    else{
      throw new Error(`La estructura de datos de Filtro o DateUpdate dada para ${this.NameCollection} no es valida, no se puede actualizar el documento.`)
    }
  }
  
  async DeleteOne(Filtro) {
    if(this.ValidationSpecific(Filtro)){
      const Result = await this.Collection.deleteOne(Filtro)
      console.log('Documento Eliminado: ', Result.deletedCount)
    }
    else{
      throw new Error(`La estructura de datos del Filtro dada para ${this.NameCollection} no es valida, no se puede eliminar el documento.`)
    }
  }
  
  async DeleteMany(Filtro) {
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
