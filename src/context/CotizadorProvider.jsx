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

   const [error, setError] = useState('')

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
            error,
            setError,
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
