(() => {
    let isSuperMan: boolean = true;
    let isBatman: boolean = false;
    console.log(isSuperMan);
    console.log({isBatman});

    isSuperMan = (isBatman) ? true: false;
    isSuperMan = true && false;

    console.log({isSuperMan});
})();