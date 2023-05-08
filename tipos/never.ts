(() => {
    /*
        cuando retorna never practicamente va a reventar
    */

    const abc = (message: string): never | number => {
        if(false) {           
            throw new Error(message);
        }

        return 1;
    }

    abc('Auxilio');
})();