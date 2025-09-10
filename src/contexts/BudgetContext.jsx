import {createContext, useContext, useState} from 'react'

const BudgetContext=createContext();

const BudgetProvider = ({children}) => {
    const [budgetMode,setBudgetMode]=useState(false);

    const toggleBudgetMode=()=>{
      setBudgetMode(!budgetMode);
    }
    
    const value={
      budgetMode,
      toggleBudgetMode
    }
    return(
      <BudgetContext.Provider value={{budgetMode,toggleBudgetMode}}>
        {children}
      </BudgetContext.Provider>
    )
};
const useBudgetContext = ()=>{
  const context = useContext(BudgetContext)
  return context
}

export {BudgetProvider,useBudgetContext}