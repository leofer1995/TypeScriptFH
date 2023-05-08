(()=> {
    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Leonardo', 'Fernández');
    //const name = fullName('Leonardo');

    console.log(name)
})()