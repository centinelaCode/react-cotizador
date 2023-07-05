import { useContext } from 'react';
import CotizadorContext from '../context/CotizadorProvider';

const useCotizador = (context) => {

   return useContext(CotizadorContext);
}

export default useCotizador

