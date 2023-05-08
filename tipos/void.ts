(() => {

    /*
        para decir que no hay un valor de retorno
    */
    const callMillonario = (): void => {
        //return null// error
    }

    const a = callMillonario();
    console.log(a);//undefined
})()