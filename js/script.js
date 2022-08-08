function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
  
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var categoria = document.querySelector('#categoria')
  

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
    

  
  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');
  var mensagem = "";

    
    if(imc >=16 && imc <=16.9)
    		{
    			(mensagem ='Você esta muito abaixo do peso!');
    		} 
      else if(imc >=17 && imc <= 18.4)
    		{
    			(mensagem="Abaixo do peso");
    		}
      else if(imc >=18.5 && imc <= 24.9)
    		{
    			(mensagem="Peso Normal");
    		}
      else if(imc >=25 && imc <= 29.9)
    		{
    			(mensagem="Obesidade Grau I");
    		}
      else if(imc >=30 && imc <= 34.4)
    		{
    			(mensagem="Obesidade Grau II");
    		}
      else if(imc >=35 && imc <= 40)
    		{
    			(mensagem="Obesidade Grau III");
    		}
      else 
    		{
    			(mensagem='Invalido');
    		}
  imcResult.textContent = formattedImc;
  categoria.textContent = mensagem;
}

start();
