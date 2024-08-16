const ValidationRules = {
  Required: Value => Value.trim() !== '',
  Email: Value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Value),
  Password: Value => /[a-zA-Z]/.test(Value) && /\d/.test(Value) && /[!@#$%^&*(),.?":{}|<>]/.test(Value),
  // Verificar que tenga una letra, un número y un caracter especial
  MinLength: (Value, Length) => Value.length >= Length,
  MaxLength: (Value, Length) => Value.length <= Length,
}

export default ValidationRules
