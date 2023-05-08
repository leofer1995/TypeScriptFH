"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villains = 20;
    if (avengers < villains) {
        console.log('estamos en problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = Number('55A'); //NaN
    console.log(avengers);
})();
