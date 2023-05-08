"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return upper
            ? `${firstName} ${lastName || '-----'}`.toUpperCase()
            : `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Leonardo', 'Fernández', true);
    //const name = fullName('Leonardo');
    console.log(name);
})();
