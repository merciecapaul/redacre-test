import { CurrencySelectorWrapper } from "../styles/currencySelector.style";

import exchange_icon from '../images/exchange_icon.svg'

export function CurrencySelector({
    supportedCurrencies,
    currencyBaseCode,
    currencyToCode,
    onChangeBaseCode,
    onChangeToCode,
    onSwitchCurrencies
}) {
    return (
        <CurrencySelectorWrapper>
            <div>
                <label htmlFor='from'>From</label>
                <select name='from' value={currencyBaseCode} onChange={onChangeBaseCode}>
                    {supportedCurrencies.map((code) => (
                        <option key={code} value={code}>
                            {code}
                        </option>
                    ))}
                </select>
            </div>
            <div className='exchange-icon'>
                <img onClick={onSwitchCurrencies} src={exchange_icon} alt='Exchange' width='20' height='20' />
            </div>
            <div>
                <label htmlFor='to'>To</label>
                <select name='to' value={currencyToCode} onChange={onChangeToCode}>
                    {supportedCurrencies.filter((symbol) => symbol !== currencyBaseCode).map((code) => (
                        <option key={code} value={code}>
                            {code}
                        </option>
                    ))}
                </select>
            </div>
        </CurrencySelectorWrapper>
    );
}