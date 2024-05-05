let selectedCurrency1 = 'RUB'
let selectedCurrency2 = 'EUR'
let apiURL = `https://open.er-api.com/v6/latest/${selectedCurrency1}`
// fetch(`https://open.er-api.com/v6/latest/${selectedCurrency1}`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(selectedCurrency1, '=', data.rates[selectedCurrency2], selectedCurrency2);
//     });

// let response = await fetch(apiURL)
// let text = await response.json()
//
// console.log(text.rates)


// async function getExchangeRates(selectedCurrency1) {
//     try {
//         const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${selectedCurrency1}`);
//         const data = await response.json();
//         return data.conversion_rates;
//     } catch (error) {
//         console.error('Ошибка при получении курсов валют:', error);
//         return {}; // Возвращаем пустой объект в случае ошибки
//     }
// }
// getExchangeRates(selectedCurrency1)

