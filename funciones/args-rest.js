"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const millonario = fullName('Leonardo', 'Fernandez', 'Segura');
    console.log({ millonario });
})();
