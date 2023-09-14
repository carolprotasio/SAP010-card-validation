import validator from './validator.js';  
 

// function para update a padina do  HTML page com o num. mascarado e o resultado da função
//chamada quando o campo de número do cartão de crédito é atualizado e atualiza a página HTML com o número do cartão mascarado e se o cartão é valido.
function updateCardInfo() {
  const cardNumber = document.getElementById('cardNumber').value;
  const maskedNumber = validator.maskify(cardNumber);
  const isValid = validator.isValid(cardNumber);
  let brand = '';
 
  // seleciona todos os inputs de texto
  const inputs = document.querySelectorAll('input[type="text"]');

  // adiciona um listener de evento de entrada para cada input
  inputs.forEach(input => {
    input.addEventListener('input', () => {
    // remove todos os caracteres não numéricos
      input.value = input.value.replace(/\D/g, '');
    });
  }); 
 
  //verifica se o número de cartão está vazio ou se o comprimento está fora do intervalo válido (entre 13 e 16 dígitos). Se for, retorna false.
  if (!cardNumber || cardNumber.length < 13 || cardNumber.length > 16) {
    return false;
  }

  
 
  if (cardNumber.match(/^4/)) {
    brand = 'Visa';
  } else if (cardNumber.match(/^5[1-5]/)) {
    brand = 'Mastercard';
  } else if (cardNumber.match(/^3[47]/)) {
    brand = 'American Express';
  } else if (cardNumber.match(/^6(?:011|5)/)) {
    brand = 'Discover';
  }

  document.getElementById('result').innerHTML = ` Os últimos 4 digitos do cartão informado são: </br>
    <div class="card-masked">${maskedNumber}</div>
    <div class="card-validity">${isValid ? 'Este cartão é <strong>VÁLIDO!</strong>' : 'Este cartão é inválido'}</div>
    ${brand ? `<div class="card-brand">A bandeira do cartão é: <strong>${brand}</strong></div>` : ''}
    `;

  cardNumberInput = ''; //limpar o input
  
}

// add event listeners para o numero do cartão -input field/faz a chamada
let cardNumberInput = document.getElementById('cardNumber');
cardNumberInput.addEventListener('input', updateCardInfo);

/* console.log(validator);  */ 
 
 

/* alert("Esta ferramenta não verifica ou valida CVV/CVC, data de validade do cartão e outros detalhes confidenciais do cartão. Ele apenas verifica e valida o número do cartão de crédito se está no formato correto e se passou na verificação do Algoritmo Luhn. ")

// function para mascarar o numero do cartão
//verifica se o número de cartão tem 4 dígitos ou menos. Se tiver, ele retorna o número sem mascará-lo.
function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }
  const lastFourDigits = cc.slice(-4); // extrai os últimos 4 dígitos do número do cartão.
  const masked = cc.slice(0, -4).replace(/./g, '#'); //cria uma string mascarada, substituindo cada dígito, exceto os últimos 4, por "#"
  return masked + lastFourDigits; //retorna a string mascarada concatenada com os últimos 4 dígitos.
}

// function para validar o cartão usando Luhn algorithm
function validateCardNumber(cardNumber) {
//verifica se o número de cartão está vazio ou se o comprimento está fora do intervalo válido (entre 13 e 16 dígitos). Se for, retorna false.
  if (!cardNumber || cardNumber.length < 13 || cardNumber.length > 16) {
    return false;
  }
  //o algoritmo de Luhn, que soma os dígitos do número do cartão, alternando a partir do penúltimo dígito e dobrando os dígitos que aparecem em posições ímpares. Se a soma resultante for divisível por 10, o cartão é válido.
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
  return (sum % 10) === 0;
}
// function para update a padina do  HTML page com o num. mascarado e o resultado da função
//chamada quando o campo de número do cartão de crédito é atualizado e atualiza a página HTML com o número do cartão mascarado e se o cartão é valido.
function updateCardInfo() {
  const cardNumber = document.getElementById('cardNumber').value;
  const maskedNumber = maskify(cardNumber);
  const isValid = validateCardNumber(cardNumber);
  let brand = '';

  if (cardNumber.match(/^4/)) {
    brand = 'Visa';
  } else if (cardNumber.match(/^5[1-5]/)) {
    brand = 'Mastercard';
  } else if (cardNumber.match(/^3[47]/)) {
    brand = 'American Express';
  } else if (cardNumber.match(/^6(?:011|5)/)) {
    brand = 'Discover';
  }

  document.getElementById('result').innerHTML = ` Os últimos 4 digitos do cartão informado são: </br>
    <div class="card-masked">${maskedNumber}</div>
    <div class="card-validity">${isValid ? 'Este cartão é <strong>VÁLIDO!</strong>' : 'Este cartão é inválido'}</div>
    ${brand ? `<div class="card-brand">A bandeira do cartão é: <strong>${brand}</strong></div>` : ''}
    `;

  cardNumberInput = ''; //limpar o input
  
}

// add event listeners para o numero do cartão -input field/faz a chamada
let cardNumberInput = document.getElementById('cardNumber');
cardNumberInput.addEventListener('input', updateCardInfo);
 */