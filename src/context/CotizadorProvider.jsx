import { createContext, useState} from 'react'

// se define el Context
const CotizadorContext = createContext();


// se define el Provider
const CotizadorProvider = ({ children }) => {

   const [data, setData] = useState({
      marca: '',
      year: '',
      plan: '',
   })

   const handleChangeData = e => {
      setData({
         ...data,
         [e.target.name]: e.target.value
      })  
   }

   
   return (
      <CotizadorContext.Provider
         value={{
            data,
            handleChangeData,
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
