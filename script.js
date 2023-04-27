var mainApiKey = "https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD"
var fromCurrencyCon = document.getElementById("prev-select")
var afterCurrencyCon = document.getElementById("after-select")

//Dropdown list from currency.js

fromCurrencyCon.forEach((currency) => {
    var pickCurrency = document.createElement("pickCurrency");
    pickCurrency.value = currency;
    pickCurrency.text= currency;
    fromCurrencyCon.add(pickCurrency)
})