import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import ListGroup from './ListGroup';

function AccountSection() {

    const { transactions, darkMode } = useContext(ExpenseContext);

    const income = transactions.filter((item) => item.amount > 0).reduce((p, c) => {
        return p + c.amount;
    }, 0);

    const expense = transactions.filter((item) => item.amount < 0).reduce((p, c) => {
        return p + c.amount;
    }, 0)


    return (

        <div className='expense-section'>
            <div className="exp-inc">
                <div className={darkMode ? 'expense bg-black text-light' : 'expense'}>
                    <h1 className='display-5 card-title'>Expense:</h1>
                    <h1 className='display-4 card-title'>{expense} <span>rs</span></h1>
                </div>

                <div className={darkMode ? "income bg-black text-light" : "income"}>
                    <h1 className='display-5 card-title'>Total income:</h1>
                    <h1 className='display-4 card-title'>{income} <span >rs</span></h1>
                </div>
            </div>
        </div>
    )
}

export default AccountSection