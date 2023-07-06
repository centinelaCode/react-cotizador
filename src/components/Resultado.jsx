import { useCallback, useMemo, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constants'


const Resultado = () => {

   const { resultado, data } = useCotizador()
   const { marca, year, plan } = data

   // aplicamos array destructuring y usamos en uno useCallback para evitar render del plan y marca hasta que 
   // cambia el resultado y en otro use memo son muy similares(este hay que hacer el return explicito) y
   // usamos un useRef para year (ya que este no tiene una funcion)
   const [nombreMarca] = useCallback( 
      MARCAS.filter(m => m.id === Number(marca)), 
      [resultado]
   )
   const [nombrePlan] = useMemo( () =>
      PLANES.filter(p => p.id === Number(plan)),
      [resultado]
   )
   // usamos hook useRef para evitar el render de year, se accede como yearRef.current
   const yearRef = useRef(year)
   

   if(resultado === 0) {
      return null
   }

   return (
      <div className="bg-gray-100 text-center mt-5 p-5 shadow">
         <h2 className="text-gray-600 font-black text-3xl">
            Resumen
         </h2>

         <p className="my-2">
            <span className="font-bold">Marca: </span> 
            {nombreMarca.name}
         </p>
         <p className="my-2">
            <span className="font-bold">Plan: </span> 
            {nombrePlan.name}
         </p>
         <p className="my-2">
            <span className="font-bold">Year Car: </span> 
            {yearRef.current}
         </p>

         <p className="my-2 text-2xl">
            <span className="font-bold">Total Quote: </span> 
            {resultado}
         </p>


      </div>
   )
}

export default Resultado