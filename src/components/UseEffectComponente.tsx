import { useEffect, useState } from "react";

export const UseEffectComponente = () => {
    //hook useState: cambiar un valor o un componente
    const [valor, setValor] = useState<boolean>(false);

    //hook useEffect: se ejecuta en segundo plano
    //- La página se carga
    //- Existe cambios en la página
    //- Se maneja una lista de dependencias
    useEffect(() => {
        console.log('Desde el hook useEffect');
    }, [valor]);  //lista de dependencias

    //función cmabiar valor
    const cambiarValor = () => {
        //llamar funicón cmabiar valor del useState
        setValor(!valor);
        //setValor (valor ? false :  true)
    }

    return (
        <div>
            <h3>Hook UseEffect</h3>
            <button onClick={cambiarValor}>Cambiar</button>
        </div>
    )
}
