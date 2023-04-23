/* const { TestWatcher } = require("jest"); */

/*
fonte: https://www.w3schools.blog/credit-card-validation-javascript-js

--regex--
master: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
Amex: /^3[47][0-9]{13}$/
visa: /^4[0-9]{12}(?:[0-9]{3})?$/
discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]
|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/
diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/

*/


const validator = {
  
  function creditCardValidation (cardNumber) {

    var regEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;

     if(cardNumber.value.match(regEx)) {
        return true;
      }
     else {
       alert("Porfavor digite o número válido do cartão");
       return false;
       }
  }  

 /*  isValid(creditCardNumber) {
    //converter o num do cartão em array
    const array = creditCardNumber.split('').reverse();
    const arra2 = [];


    maskify(creditCardNumber) {
      if(creditCardNumber.length <= 4) {
        return creditCardNumber;
      }
      else { 
        const string = creditCardNumber.split("");
        const last4 = string.slice(-4).join("");
        const firstNum = string.slice(0, 4).join("");
        let numberHiden = firstNum.replace(/./g, "#" + "") + last4;
        return numberHiden
      }

    };
    
    

  } */

}

export default validator;
  