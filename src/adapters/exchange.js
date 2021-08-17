export function getWallet() {
    return fetch('./data.json')
        .then((res) => res.json())
        .then((res) => res);
}

export function getExchangeRates(base, supportedCurrencies) {
    const symbols = supportedCurrencies
        .filter((symbol) => symbol !== base) // exclude your own code from requested symbols
        .join();

    const url = `${process.env.REACT_APP_EXCHANGE_API_URL}latest?access_key=${process.env.REACT_APP_EXCHANGE_API_KEY}&base=${base}&symbols=${symbols}`;
    return fetch(url)
        .then((res) => res.json())
        .then((res) => res.rates);
}