"use strict";
(() => {
    const millonario = "Leonardo";
    function returnName() {
        return millonario;
    }
    const activateMoney = () => {
        return 'generando dinero';
    };
    console.log(typeof activateMoney);
    const millonarioName = returnName();
})();
