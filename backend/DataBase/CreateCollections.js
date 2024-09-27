const CreateCollections = async (DB, Collections) => {
  const ExistingCollections = await DB.listCollections().toArray()
  
  for (const { name } of Collections) {
    const CollectionExists = ExistingCollections.some(coll => coll.name === name)
    if (!CollectionExists) {
      await DB.createCollection(name)
      console.log(`Colección '${name}' creada.`)
    } 
    else {
      console.log(`La colección '${name}' ya existe.`)
    }
  }
}

module.exports = CreateCollections