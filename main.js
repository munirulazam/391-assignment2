// Array of fortunes
const fortunes = [
    "The people you fear are the people you are near",
    "Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there.",
    "Happiness is found within.",
    "A person who exhibits both positive and negative qualities strengths and weaknesses is not flawed but complete",
    "Life is balance of holding on and letting go"
];

// Function to get a random fortune
function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

//Currency Converter

        const rates = {
            usd: { usd: 1, gbp: 2.03032, cad: 1.01941, eur: 1.41544, aud: 0.88297 },
            gbp: { usd: 0.49246, gbp: 1, cad: 0.50221, eur: 0.69714, aud: 0.43497 },
            cad: { usd: 0.98054, gbp: 1.99169, cad: 1, eur: 1.38814, aud: 0.86613 },
            eur: { usd: 0.70641, gbp: 1.43448, cad: 0.72037, eur: 1, aud: 0.62382 },
            aud: { usd: 1.13262, gbp: 2.29964, cad: 1.15498, eur: 1.60329, aud: 1 }
        };
        function convertCurrency(source) {
            const value = parseFloat(document.getElementById(source).value);
            if (isNaN(value)) return;

            const sourceRates = rates[source];
            for (const currency in sourceRates) {
                if (currency !== source) {
                    document.getElementById(currency).value = (value * sourceRates[currency]).toFixed(2);
                }
            }
        }

        function clearFields() {
            document.getElementById('usd').value = '';
            document.getElementById('gbp').value = '';
            document.getElementById('cad').value = '';
            document.getElementById('eur').value = '';
            document.getElementById('aud').value = '';
        }


// Display the fortune on page load
document.addEventListener("DOMContentLoaded", () => {
    const fortuneElement = document.getElementById("fortune");
    fortuneElement.textContent = getRandomFortune();
});
