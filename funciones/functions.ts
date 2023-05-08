(() => {
    const millonario: string = "Leonardo";

    function returnName(): string {
        return millonario;
    }

    const activateMoney = (): string => {
        return 'generando dinero';
    }

    console.log(typeof activateMoney);

    const millonarioName = returnName();
})()
