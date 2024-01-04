import { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {

    const initialState = {
        transactions: [{ id: 1, text: "Salary", amount: 1000 },
        { id: 2, text: "Recharge", amount: -239 }],
        edit: { transaction: {}, isEdit: false },
        darkMode: false,
    }
    const [state, dispatch] = useReducer(ExpenseReducer, initialState)

    return (
        <ExpenseContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ExpenseContext.Provider>
    )

}

export default ExpenseContext;