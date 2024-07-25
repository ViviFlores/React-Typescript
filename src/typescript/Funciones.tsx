
export const Funciones = () => {

    //funciones - typescript
    const sumar = (num1: number, num2: number): number => {
        return num1 + num2;
    }

    return (
        <div>
            <h3>Funciones</h3>
            <span>El resultado es: {sumar(4, 5)}</span>
        </div>
    )
}
