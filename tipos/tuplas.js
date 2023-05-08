"use strict";
(() => {
    const cuentaAhorros = [
        'Leonardo Fernández',
        1000000000,
        true,
    ];
    cuentaAhorros[0] = 'Carolina Fernández';
    cuentaAhorros[1] = 10000000000;
    cuentaAhorros[2] = true;
    console.log(cuentaAhorros);
    //cuentaAhorros[0] = 50; // no se puede por que en la definición ya dije que el primer valor debe ser string
})();
