// import Chart from 'chart.js/auto';
// import { Tooltip } from 'chart.js';

// incluindo api para selecionar a moeda
const api = "https://api.exchangerate-api.com/v4/latest/USD";
  
// seleção dos diferentes elementos
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var valorConvertido = document.querySelector(".valorConvertido");
var result = document.getElementById("result");
var resultFrom;
var resultTo;
var searchValue;
  
// ocorre um 'evento' quando a moeda 1 e 2 são selecionadas
fromCurrency.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
  
toCurrency.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

// salvando o valor digitado no input
search.addEventListener('input', updateValue);
  
function updateValue(e) {
    searchValue = e.target.value;
}
  
// quando o btn de converter for clicado, será chamada a função 'getResults' 
convert.addEventListener("click", getResults);
  
// function getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}

// mostrar resultado depois da converção
function displayResults(currency) {
    // essas variáveis recebem o nome da moeda e depois o seu respectivo valor, de acordo com o arquivo da api
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    // cálculo da conversão
    valorConvertido.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    convert.style.display = "block";
}

// visualizando valores no console
console.log();


