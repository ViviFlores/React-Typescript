//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { TiposBasicos } from "./typescript/TiposBasicos";
//import { Funciones } from "./typescript/Funciones";
import { ListaUsuarios } from "./components/ListaUsuarios";
//import { Login } from "./components/Login";
//import { UseEffectComponente } from "./components/UseEffectComponente";
//import { UseStateContador } from "./components/UseStateContador";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción TS - React</h1>
      <hr />
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales />*/}
      {/*<Funciones />*/}
      {/*<UseStateContador />*/}
      {/*<UseEffectComponente />*/}
      {/*<Login />*/}
      <ListaUsuarios/>
    </div>
  )
}

export default App;