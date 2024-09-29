const CollProjects = process.env.CollProjects
const CollInfoPersonal = process.env.CollInfoPersonal
const CollInfoCV = process.env.CollInfoCV

const CreateCollections = async (DB) => {

  const CollectionsToCheck = [
    { name: CollProjects },
    { name: CollInfoPersonal },
    { name: CollInfoCV }
  ]

  const ExistingCollections = await DB.listCollections().toArray()
  
  for (const { name } of CollectionsToCheck) {

    const CollectionExists = ExistingCollections.some(coll => coll.name === name)

    if (!CollectionExists) {
      await DB.createCollection(name)
      console.log(`Colección '${name}' creada.`)
    } 
    else {
      console.log(`La colección '${name}' ya existe.`)
    }

  }

  console.log() 

}

module.exports = CreateCollections