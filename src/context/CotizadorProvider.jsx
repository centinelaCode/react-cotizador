import { createContext, useState} from 'react'

// se define el Context
const CotizadorContext = createContext();


// se define el Provider
const CotizadorProvider = ({ children }) => {

   
   return (
      <CotizadorContext.Provider
         value={{
         }}
      >
         { children }
      </CotizadorContext.Provider>
   )
}


export {
   CotizadorProvider
}
export default CotizadorContext;