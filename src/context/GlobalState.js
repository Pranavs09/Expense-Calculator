import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial State
const initiaState = {
  transactions: [],
};

//create context
export const globalContext = createContext(initiaState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initiaState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction){
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    })
  }

  return (
    <globalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
