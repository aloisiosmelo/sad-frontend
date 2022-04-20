const validationUtilities = {
    criterioPattern: /^[0-9]*$/i,
    errorRegex: 'São aceitos apenas números de 1 a 9',
    isNecessary: (field) => `Um ${field} é necessário`,
    tooShort: (field) => `Este ${field} é muito curto`,
    tooLong: (field) => `Este ${field} é muito longo`,
}

export default validationUtilities