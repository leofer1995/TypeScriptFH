"use strict";
(() => {
    /*
        para decir que no hay un valor de retorno
    */
    const callMillonario = () => {
        //return null// error
    };
    const a = callMillonario();
    console.log(a); //undefined
})();
