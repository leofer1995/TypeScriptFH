"use strict";
(() => {
    /*
        cuando retorna never practicamente va a reventar
    */
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('Auxilio');
})();
