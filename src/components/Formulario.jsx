import { Fragment, useContext } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import CotizadorContext from '../context/CotizadorProvider';


const Formulario = () => {

   const { modal, cambiarState } = useContext(CotizadorContext);

   console.log(modal)

   return (
      <>
         <button 
            onClick={cambiarState}
         >
            Cambiar modal de Context
         </button>

         <form>
            {/* Marca */}
            <div className="my-5">
               <label className="block mb-3 fornt-bold text-gray-500 uppercase">Select Brand</label>
               <select
                  name="marca"
                  className="w-full p-3 bg-white border border-gray-200"
               >
                  <option value="">-- Select Brand --</option>
                  { MARCAS.map(marca => (
                     <option
                        key={marca.id}
                        value={marca.id}
                     >
                        {marca.name}
                     </option>   
                  ))}

               </select>
            </div>

            {/* years */}
            <div className="my-5">
               <label className="block mb-3 fornt-bold text-gray-500 uppercase">Select Year</label>
               <select
                  name="marca"
                  className="w-full p-3 bg-white border border-gray-200"
               >
                  <option value="">-- Select Year --</option>
                  { YEARS.map( year => (
                     <option
                        key={year}
                        value={year}
                     >
                        {year}
                     </option>   
                  ))}

               </select>
            </div>

            {/* Planes */}
            <div className="my-5">
               <label className="block mb-3 fornt-bold text-gray-500 uppercase">Select a Plan</label>
               <div className="flex gap-3 items-center">
                  { PLANES.map( plan => (
                     <Fragment key={ plan.id}>
                        <label>{plan.name}</label>
                        <input 
                           type="radio"
                           name="plan"                           
                           value={ plan.id }
                        />
                     </Fragment>
                  )) }
               </div>
            </div>

            <input 
               type="submit" 
               className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
               value="Quote" 
            />
         </form>
      </>      
)
}

export default Formulario