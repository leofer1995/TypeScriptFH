(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe volcán negro`;

    console.log( `I'am ${batman}` );
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase || 'No esta presente');
})()