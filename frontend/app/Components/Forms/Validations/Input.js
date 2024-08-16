const Input = (Type) => {
  if(Type === 'Email'){
    return {
      Error: 'No es un email correcto',
      Rules: ['Required', 'Email']
    }
  }
  else if(Type === 'Password'){ 
    return {
      Error: 'Mínimo con 6 caráteres, una letra, número y caráter especial',
      Rules: ['Required', 'Password', { MinLength: 6 }] 
    }
  }
  else if(Type === 'Username'){
    return {
      Error: 'Nombre de usuario mínimo 4 y máximo 20 caracteres',
      Rules: ['Required', { MinLength: 4 }, { MaxLength: 20 }]
    }
  }
  return {
    Error: null,
    Rules: ['Required']
  }
}

export default Input
