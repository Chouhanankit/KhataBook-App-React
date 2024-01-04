import React, { useContext, useEffect, useState } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { saveTransactions, updateTransaction } from '../context/ExpenseAction';

function BalanceSecction() {
    const { transactions, edit, dispatch, darkMode } = useContext(ExpenseContext);

    const Balance = transactions.reduce((p, c) => {
        return p + c.amount;
    }, 0)


    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit.isEdit) {
            const data = updateTransaction({ id: edit.transaction.id, text: text, amount: +amount });
            dispatch({
                type: "UPDATE",
                payload: data,
            })
        } else {
            const data = saveTransactions(text, amount)
            dispatch({
                type: "SAVE",
                payload: data,
            })
        }
        setAmount("");
        setText("");
    }

    useEffect(() => {
        setText(edit.transaction.text);
        setAmount(edit.transaction.amount);
    }, [edit]);

    return (

        <div className='bal-section my-2'>

            <div className={darkMode ? "balance bg-black" : "balance"}>
                <h1 className='display-5'>Balance:</h1>
                <h2 className='display-4 card-title'>{Balance} <span id="rs">rs</span></h2>
            </div>

            <div id={darkMode ? 'balance-1' : 'balance-2'}>
                <form onSubmit={handleSubmit}>
                    <input className='form-control my-2 rounded-0' type="number" placeholder='Enter The Amount' onChange={(e) => setAmount(e.target.value)} value={amount} required />
                    <input className='form-control my-2 rounded-0' type="text" placeholder='Enter The Expense' onChange={(e) => setText(e.target.value)} value={text} />
                    <button className='btn btn-sm btn-warning w-100 rounded-0'>Save</button>
                </form>
            </div>

        </div>

    )
}

export default BalanceSecction