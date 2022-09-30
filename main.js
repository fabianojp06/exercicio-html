const form = document.getElementById('form-deposito');
const btn = document.querySelector("#btn-depositar")
const numA = document.querySelector("#numero-a");
const numB = document.querySelector("#numero-b");

function validaNros(numA,numB) {
  if(numA < numB){
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const vlrNumA = numA.value;
  const vlrNumB = numB.value;
  const sucessMsg = (`O número B=${ vlrNumB }, é maior que o nro A=${ vlrNumA }`)

console.log(sucessMsg)

formEValido = validaNros(numB.value)
  if(formEValido) {
    const containnerMsgSucess = document.querySelector('.sucess-message');
    containnerMsgSucess.innerHTML = sucessMsg;
    containnerMsgSucess.style.display = 'block';

    vlrNumA.value = '';
    vlrNumB.value = '';
  }

});









/*

  const numeroContaBeneficiario = document.getElementById('numero-conta');
  const valorDeposito = document.getElementById('valor-deposito');
  const mensagemSucesso = `Montante de: <b>${ valorDeposito.value }</b> depositado para o cliente: <b>${ nomeBeneficiario.value }</b> - conta: <b>${ numeroContaBeneficiario.value }</b>`;

  formEValido = validaNome(nomeBeneficiario.value)
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector('.sucess-message')
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    nomeBeneficiario.value = '';
    numeroContaBeneficiario.value = '';
    valorDeposito.value = '';
  } else {
    nomeBeneficiario.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
  }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
  console.log(e.target.value);
  formEValido = validaNome(e.target.value)

  if (!formEValido) {
    nomeBeneficiario.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    nomeBeneficiario.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
  }
}) */
