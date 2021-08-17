import { AmountInput, Error } from "../styles/amount.style";

export function AmountField({ wallet, currencyBaseCode, amount, onChange }) {
    
    let baseBalance
    if (wallet) {
        baseBalance = wallet.filter((row) => row.currency === currencyBaseCode)[0].amount
    }

    return (
        <form>
            <label htmlFor='amount'>Amount</label>
            <AmountInput
                name="amount"
                value={amount}
                onChange={onChange}
            />

            {amount > baseBalance && (
                <Error>Amount exceeds balance in wallet</Error>
            )}
        </form>
    );
}