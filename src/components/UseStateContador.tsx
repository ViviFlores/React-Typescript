import { useState } from "react";

export const UseStateContador = () => {
    //hook useState: cambiar le estado de un valor o un componente.
    const [valorContador, setValorContador] = useState<number>(0);  //Valor inicial

    //función que se encrague de cambiar el valorContador
    const cambiarContador = (numero: number) => {
        //llamar a la función del useState
        setValorContador(valorContador + numero);
        //setValorContador(9 + (-1))   
                    //     9 - 1 -> 8
    }

    return (
        <div>
            <h3>Contador: <small>{valorContador}</small></h3>
            <button
                className="btn btn-primary"
                onClick={() => cambiarContador(1)}
            >
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={() => cambiarContador(-1)}
            >
                -1
            </button>
        </div>
    )
}
