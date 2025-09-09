import {createContext, useContext} from 'react'

const BudgetContext=createContext();
const BugetProvider = ({children}) => {

    const value= true;
    return(
      <BudgetContext.Provider value={value}>
        {children}
      </BudgetContext.Provider>
    )
}
const useBudgetContext = ()=>{
  const context = useContext(BudgetContext)
  return context
}

export {BugetProvider,useBudgetContext}