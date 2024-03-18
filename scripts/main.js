const query = document.querySelector('.amount')
const source = document.querySelector('.currencySource')
const destination = document.querySelector('.currencyDestination')
const button = document.querySelector('#button')
const amount = document.querySelector('.result__amount')
const currency = document.querySelector('.result__currency')

fetch(`https://api.apilayer.com/fixer/convert?apikey=vUIKMGFoljkv0RXRohAQLSmkHWA6wSQD&to=${destination.value}&from=${source.value}&amount=${query.value}`)
  .then(response => response.json())
  .then(data => {
    function convert() {
        let quantity = parseFloat(Math.round((data.result) * 10000) / 10000);
        console.log(quantity);
        amount.innerHTML = quantity;
        currency.innerHTML = destination.value;
    }
    button.addEventListener('click', function(){
        convert();
    })
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
})
