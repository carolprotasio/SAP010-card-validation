/* const { TestWatcher } = require("jest");
 */
const validator = {
  // function to mask the credit card number
  //verifica se o número de cartão tem 4 dígitos ou menos. Se tiver, ele retorna o número sem mascará-lo.
  maskify: function (cc) {
    if (cc.length <= 4) {
      return cc;
    }
    const lastFourDigits = cc.slice(-4); // extrai os últimos 4 dígitos do número do cartão.
    const masked = cc.slice(0, -4).replace(/./g, "#"); //cria uma string mascarada, substituindo cada dígito, exceto os últimos 4, por "#"
    return masked + lastFourDigits; //retorna a string mascarada concatenada com os últimos 4 dígitos.
  },

  // function to validate the credit card using the Luhn algorithm
  isValid: function (cardNumber) {
    
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }
    //retorna true se a soma resultante for divisível por 10 e false caso contrário.
    return sum % 10 === 0;
  },
  
};

export default validator;
