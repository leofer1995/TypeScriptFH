(() => {
    const atNumbers = (a: number, b: number): number => a+b;
    const greet = (name: string) => `Hola ${ name }`;
    const miPrimerMillon = () => `Hemos ganado el primer millón de dólares`;


    //let miFunction;
    //miFunction = 10;

    //let miFunction: Function;
    
    // let miFunction: (a: string) => string;
    // miFunction = greet;
    // console.log(miFunction('Leonardo'));
    
    // let miFunction: () => string;
    // miFunction = miPrimerMillon;
    // console.log(miFunction());

    let miFunction: (a:number, b:number) => number;
    miFunction = atNumbers;
    console.log(miFunction(1,2));
})()