//rafc+TAB
//Componente función REACT
export const TiposBasicos = () => {
  //varibles - typescript
  //let nombre: string | number = 'Viviana';
  //nombre = 32;
  //let nombre: string = 'Viviana';
  //constantes - typescript
  const nombre: string = 'Viviana';
  const edad: number = 32;
  const donanteOrganos: boolean = true;
  const poderes: string[] = ['volar', 'invisibilidad', 'fuerza'];
  //agregar elemento en el arreglo
  poderes.push('velocidad');

  return (
    <div>
      <h3>Tipos Básicos</h3>
      {nombre}, {edad}, {donanteOrganos ? 'Donante' : 'No Donante'}
      <br />
      {poderes.join(', ')}
    </div>
  )
}


