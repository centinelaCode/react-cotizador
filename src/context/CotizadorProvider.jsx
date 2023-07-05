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

   const cotizarSeguro = () => {
      // una base

      // diferencia de años 

      // restar el 3% por cada año

      // Americano +15% | Europero +30% | Asiatico 5%

      // basico +20% | completo +50%
   }

   
   return (
      <CotizadorContext.Provider
         value={{
            data,
            handleChangeData,
            error,
            setError,
            cotizarSeguro,
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
