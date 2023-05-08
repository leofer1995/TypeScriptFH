(() => {
    let avenger: any = 123;
    let exist; //any
    let power; //any

    avenger = 'Dr Strange';
    // console.log(avenger.charAt(0));
    console.log((avenger as string).charAt(0));


    avenger = 153.23;
    console.log(<number>avenger.toFixed(2));

    console.log(exist);
    console.log(power);

})()