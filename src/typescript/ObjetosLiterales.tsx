//rafc + TAB

//class, interface, type
// interface - typescript
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNumero: number;
}

export const ObjetosLiterales = () => {

    //objeto
    const persona: Persona = {
        nombreCompleto: 'Viviana Flores',
        edad: 32,
        direccion: {
            pais: 'Ecuador',
            casaNumero: 365
        }
    }

    //Acceder a la propiedad de mi objeto
    //persona.edad;
    //persona.nombreCompleto = 'Viviana Flores';
    // interfaces no se pueden instanciar
    //const instanciaPersona = new Persona();

    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}
