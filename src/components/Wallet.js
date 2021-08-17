import { WalletWrapper, NegativeAmount, PositiveAmount } from "../styles/wallet.style";

export function Wallet({
    wallet,
    amount,
    exchangeAmount,
    currencyBaseCode,
    currencyToCode
}) {
    if (!wallet) return (<div />)

    const baseBalance = wallet.filter((row) => row.currency === currencyBaseCode)[0]
    const toBalance = wallet.filter((row) => row.currency === currencyToCode)[0]

    let baseAmount = baseBalance.amount
    let toAmount = toBalance.amount

    if (exchangeAmount > 0) {
        baseAmount = baseBalance.amount - amount
        toAmount = toBalance.amount + exchangeAmount
    }

    return (
        <WalletWrapper>
            <div>
                <label>Balance</label>
                {baseAmount.toLocaleString("en", {
                    style: "currency",
                    currency: currencyBaseCode,
                })}

                {exchangeAmount > 0 &&
                    <NegativeAmount>
                        -{amount.toLocaleString("en", {
                            style: "currency",
                            currency: currencyBaseCode,
                        })}
                    </NegativeAmount>
                }
            </div>
            <div>
                <label>Balance</label>
                {toAmount.toLocaleString("en", {
                    style: "currency",
                    currency: currencyToCode,
                })}

                {exchangeAmount > 0 &&
                    <PositiveAmount>
                        +{exchangeAmount.toLocaleString("en", {
                            style: "currency",
                            currency: currencyToCode,
                        })}
                    </PositiveAmount>
                }
            </div>
        </WalletWrapper>
    );
}