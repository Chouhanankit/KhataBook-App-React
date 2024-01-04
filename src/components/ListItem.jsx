import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { deleteTransaction, editTransaction } from '../context/ExpenseAction';

function ListItem({ transaction }) {

    const { dispatch, darkMode } = useContext(ExpenseContext);

    const handleDelete = (id) => {
        const data = deleteTransaction(id);
        dispatch({
            type: "DELETE",
            payload: data,
        });
    };

    const handleEdit = (oldTransaction) => {
        const data = editTransaction(oldTransaction);
        dispatch({
            type: "EDIT",
            payload: data,
        })
    }



    return (
        <li className={darkMode ? "list-group-item shadow-sm p-3 my-1 rounded-0 border border-warning bg-black text-light" : "list-group-item shadow-sm p-3 my-1 rounded-0 border border-warning"} >
            <span className='d-flex'>
                <h1 className='display-5 '>{transaction.text}:</h1>
                <h1 className={transaction.amount > 0 ? 'display-5 text-success' : 'display-5 text-danger'}>{transaction.amount} </h1>
            </span>
            <p className={transaction.amount > 0 ? "text-success" : "text-danger"}>{transaction.amount > 0 ? "Credit Success" : "Debit Success"}</p>
            <span className="float-end">
                <button className="btn btn-warning btn-sm mx-2 " onClick={() => handleEdit(transaction)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(transaction.id)}>Delete</button>
            </span>
        </li>
    )
}

export default ListItem