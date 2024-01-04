export const saveTransactions = (text, amount) => {
    return {
        id: crypto.randomUUID(),
        text,
        amount: parseInt(amount),
    }
};

export const deleteTransaction = (id) => {
    return id;
};


export const editTransaction = (oldTransactions) => {
    return oldTransactions;
};

export const updateTransaction = (transaction) => {
    return transaction;
}
