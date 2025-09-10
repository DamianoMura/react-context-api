import {createContext, useContext, useState} from 'react'

const BudgetContext=createContext();

const BudgetProvider = ({children}) => {
    const [budgetMode,setBudgetMode]=useState(false);
    const [maxPrice,setMaxPrice]=useState(null);
    
    
    const value={
      maxPrice,
      setMaxPrice
    }
    return(
      <BudgetContext.Provider value={value}>
        {children}
      </BudgetContext.Provider>
    )
};
const useBudgetContext = ()=>{
  const context = useContext(BudgetContext)
  return context
}

export {BudgetProvider,useBudgetContext}