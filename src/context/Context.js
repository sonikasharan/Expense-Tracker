import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState =JSON.parse(localStorage.getItem('transactions'))|| [[{"amount":500,"category":"Travel","type":"Expense","date":"2021-08-09","id":"6e15f091-946e-47b7-ab53-e99a4725142a"},{"amount":1000,"category":"Business","type":"Income","date":"2021-08-09","id":"5cc1fd7a-6aa0-46db-8a07-2d62fff44b96"}]];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
//action creator
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };
  
  const balance=transactions.reduce((acc, currVal) =>{
    return(currVal.type==='Expense' ? acc-currVal.amount : acc+currVal.amount)
  },0);

  return (
    <ExpenseTrackerContext.Provider value={{
      
      deleteTransaction,
      addTransaction,
      balance,
      transactions
    }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};