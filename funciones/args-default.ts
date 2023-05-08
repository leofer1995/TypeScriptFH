(()=> {
    const fullName = (firstName: string, lastName?: string, upper: boolean =  false): string => {
        return upper 
            ? `${firstName} ${lastName || '-----'}`. toUpperCase()
            : `${firstName} ${lastName || '-----'}`;
    }

    const name = fullName('Leonardo', 'Fernández', true);
    //const name = fullName('Leonardo');

    console.log(name)
})()