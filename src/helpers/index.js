export function obtenerDiferenciaYear(year) {
   return new Date().getFullYear() - year
}

export function calcularMarca(marca) {
   let incremento

   switch (marca) {
      // 1->Europeo + 30%
      case "1":
            incremento = 1.30
         break;

      // 2->Americano + 15%
      case "2":
            incremento = 1.15
         break;

      // 3->Europeo + 5%
      case "3":
            incremento = 1.05
         break;
   }

   return incremento
}


export function calcularPlan(plan) {
   return (plan === "1") ? 1.20 : 1.50;
}

export function formatearDinero(cantidad) {
   return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: "USD",
   })
}