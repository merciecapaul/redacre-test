import { useState, useCallback, useEffect } from "react";

import { CurrencySelector } from "./CurrencySelector";
import { AmountField } from "./AmountField";

import { ExchangeWrapper, ExchangeButton, ExchangeTitle } from "../styles/exchange.style";
import { getExchangeRates, getWallet } from "../adapters/exchange";
import { Wallet } from "./Wallet";

export function ExchangeRate() {
    const [amount, setAmount] = useState(0);
    const [exchangeAmount, setExchangeAmount] = useState(0);
    const [currencyBaseCode, setCurrencyBaseCode] = useState("EUR");
    const [currencyToCode, setCurrencyToCode] = useState("GBP");
    const [currencyData, setCurrencyData] = useState(null);
    const [wallet, setWallet] = useState(null);
    const [supportedCurrencies, setSupportedCurrencies] = useState([]);

    useEffect(() => {
        getWallet().then((res) => {
            setWallet(res)
            setSupportedCurrencies(res.map((row) => row.currency))
        });
    }, []);

    // fetch the exchange rates each time currency code changes
    useEffect(() => {
        getExchangeRates(currencyBaseCode, supportedCurrencies).then((res) => {
            setCurrencyData(res);
        });
    }, [currencyBaseCode]);

    const handleCurrencyBaseCode = useCallback(
        (e) => setCurrencyBaseCode(e.target.value),
        []
    );

    const handleCurrencyToCode = useCallback(
        (e) => setCurrencyToCode(e.target.value),
        []
    );

    const handleAmountChange = useCallback((e) => {
        let newAmount = e.target.value;
        setAmount(newAmount);
    }, []);

    const onSwitchCurrencies = useCallback(
        (e) => {
            setCurrencyBaseCode(currencyToCode)
            setCurrencyToCode(currencyBaseCode)
        }, []
    );

    const handleExchange = () => {
        let baseBalance = wallet.filter((row) => row.currency === currencyBaseCode)[0].amount
        if (amount > baseBalance) return

        const rate = currencyData[currencyToCode]
        setExchangeAmount(amount * rate);
    };

    return (
        <ExchangeWrapper>
            <ExchangeTitle>
                <h1>Exchange Rate</h1>
                {currencyData &&
                    <div>{currencyData[currencyToCode]}</div>
                }
            </ExchangeTitle>
            <section>
                <AmountField
                    wallet={wallet}
                    amount={amount}
                    currencyBaseCode={currencyBaseCode}
                    onChange={handleAmountChange}
                />

                <CurrencySelector
                    supportedCurrencies={supportedCurrencies}
                    currencyBaseCode={currencyBaseCode}
                    currencyToCode={currencyToCode}
                    onChangeToCode={handleCurrencyToCode}
                    onChangeBaseCode={handleCurrencyBaseCode}
                    onSwitchCurrencies={onSwitchCurrencies}
                />
            </section>
            <section>
                <Wallet
                    wallet={wallet}
                    amount={amount}
                    exchangeAmount={exchangeAmount}
                    currencyBaseCode={currencyBaseCode}
                    currencyToCode={currencyToCode}
                />
            </section>
            <section>
                <ExchangeButton onClick={handleExchange}>Exchange</ExchangeButton>
            </section>
        </ExchangeWrapper>
    );
}