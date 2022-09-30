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

