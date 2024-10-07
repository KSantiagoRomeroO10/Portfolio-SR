const InfoPersonal = require('../../Models/InfoPersonal')
 
const IPCreateController = async (req, res) => {
  const { Developer, Name, Residence, Email, Phone } = req.body
  const NewInfoPersonal = new InfoPersonal({
    Developer: Developer,
    Name: Name,
    Residence: Residence,
    Email: Email,
    Phone: Phone
  })
  try {
    const Result = await NewInfoPersonal.Create()
    console.log({ 'IPController, Usuario Creado con éxito, ': Result })  
    res.status(200).json({ 'Message IPCreateController': Result })
  } 
  catch (error) {
    res.status(500).json({ 'Error IPCreateController, ': error.message })    
    console.log({ 'Error IPCreateController, ': error.message })    
  }
}

module.exports = IPCreateController