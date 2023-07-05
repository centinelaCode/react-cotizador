import { createContext, useState} from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers';

// se define el Context
const CotizadorContext = createContext();


// se define el Provider
const CotizadorProvider = ({ children }) => {

   // states
   const [data, setData] = useState({
      marca: '',
      year: '',
      plan: '',
   })
   const [error, setError] = useState('')
   const [resultado, setResultado] = useState(0)
   const [cargando, setCargando] = useState(false)

   // funciones
   const handleChangeData = e => {
      setData({
         ...data,
         [e.target.name]: e.target.value
      })  
   }

   const cotizarSeguro = () => {
      // una base
      let resultado  = 2000
      //console.log("resultado inicial:", resultado)

      // diferencia de años 
      const diferencia = obtenerDiferenciaYear(data.year);
      //console.log("diferencia de años:", diferencia)
      
      // restar el 3% por cada año
      resultado -= ((diferencia * 3) * resultado) / 100
      //console.log("resultado (-)3% c/año:", resultado)

      // Americano +15% | Europero +30% | Asiatico 5%
      resultado *= calcularMarca(data.marca)
      //console.log("resultado (+)% en base a marca:", resultado)

      // basico +20% | completo +50%
      resultado *= calcularPlan(data.plan)
      //console.log("resultado (+)% en base al plan:", resultado)

      // resultado = resultado.toFixed(2)
      resultado = formatearDinero(resultado);
      //console.log(resultado)

      setCargando(true)

      setTimeout(() => {
         setResultado(resultado)         
         setCargando(false)
      }, 3000);
   }

   
   return (
      <CotizadorContext.Provider
         value={{
            data,
            handleChangeData,
            error,
            setError,
            cotizarSeguro,
            resultado,
            cargando,
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
