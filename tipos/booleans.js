"use strict";
(() => {
    let isSuperMan = true;
    let isBatman = false;
    console.log(isSuperMan);
    console.log({ isBatman });
    isSuperMan = (isBatman) ? true : false;
    isSuperMan = true && false;
    console.log({ isSuperMan });
})();
