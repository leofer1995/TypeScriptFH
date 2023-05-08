"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Leonardo', 'Fernández');
    //const name = fullName('Leonardo');
    console.log(name);
})();
