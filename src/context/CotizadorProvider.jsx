import { createContext, useState} from 'react'

// se define el Context
const CotizadorContext = createContext();


// se define el Provider
const CotizadorProvider = ({ children }) => {

   const [modal, setModal] = useState(false);

   const cambiarState = () => {
      setModal(!modal)
   }

   return (
      <CotizadorContext.Provider
         value={{
            modal, 
            cambiarState
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