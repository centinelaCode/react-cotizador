export const MARCAS = [
   { id: 1, name: 'European' },
   { id: 2, name: 'American' },
   { id: 3, name: 'Asian' },
]

// get current year
const YEARMAX = new Date().getFullYear();
// create a array with las 20 years
export const YEARS = Array.from( new Array(20), (valor, index) => YEARMAX - index)


export const PLANES = [
   { id: 1, name: 'Basic' },
   { id: 2, name: 'Compleate' },
]