(() => {
    const fullName = (firstName: string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const millonario = fullName('Leonardo', 'Fernandez', 'Segura');

    console.log({ millonario })
})()