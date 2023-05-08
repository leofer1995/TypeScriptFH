// Funciones Básicas
function sumar( a: number, b: number ): number{
    return a + b;
  }
  
  const contar = ( heroes: string[] ): number => {
    return heroes.length;
  }
  const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);
  
  //Parámetros por defecto
  const llamarBatman = ( llamar: boolean = false ) => {
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }
  
  llamarBatman();
  
  // Rest?
  const unirheroes = ( ...personas: string[] ): string => {
    return personas.join(", ");
  }
  
  
  // Tipo función
  const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[] ): void=> {}
  
  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco: (a:number, b:string, c:boolean, d:string[]) => void;
  noHaceNadaTampoco = noHaceNada