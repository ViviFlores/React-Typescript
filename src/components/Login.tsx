import { useEffect, useReducer } from "react";

//interface estado inicial
interface AuthState {
  validando: boolean;
  token: string | null;
  correo: string;
  contrasenia: string;
}
// 3 formas para gestionar un objeto: interface, type, class

//type payload
type PayloadAction = {
  correo: string;
  contrasenia: string;
}

//type action
type AuthAction =
  { type: 'logout' }
  | { type: 'login', payload: PayloadAction }

export const Login = () => {
  //Estado inicial useReducer
  const initialState: AuthState = {
    validando: true,
    token: null,  // string / null
    correo: '',
    contrasenia: ''
  }

  //Función reducer para definir las acciones en el cambio de estado
  const reducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'logout':
        return {
          validando: false,
          token: null,
          correo: '',
          contrasenia: ''
        }
      case 'login':
        const { correo, contrasenia } = action.payload;
        return {
          validando: false,
          token: 'sdfdsf687687S_DFDSFfdf76587dsfdsf_sdfdskjhfkjds',
          correo: correo,
          contrasenia: contrasenia
        }
      default:
        return state;
    }
  }

  //hook useReducer: cambio de estados más complejos
  const [{ validando, token }, dispatch] = useReducer(reducer, initialState);


  //desestrutucturar un objeto
  /*const persona = {
    nombre: 'Viviana',
    edad: 32
  }

  const { nombre, edad } = persona;
  //console.log(persona.edad);
  console.log(edad);*/

  //hook useEffect
  useEffect(() => {
    //Método quer define el tiempo en el que se desea ejecutar el código
    setTimeout(() => {
      //código a ejecutar
      dispatch({ type: 'logout' })  //disparando la accion de logout
    }, 1500); //milisegundos
  }, []);

  //Función cambiar action a login
  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        correo: 'vflores@gmail.com',
        contrasenia: '123456'
      }
    });
  }

  //Función para cambiar action a logout
  const logout = () => {
    dispatch({ type: 'logout' });
  }

  //Verificando el valor del atributo validando
  if (validando) {
    return (
      <div>
        <h3>Login</h3>
        <div className="alert alert-info">
          Validando...
        </div>
      </div>
    )
  }

  return (
    <div>
      <h3>Login</h3>
      {
        (token == null)
          ? <div className="alert alert-danger">No autenticado...</div>
          : <div className="alert alert-success">Autenticado...</div>
      }

      {
        (token == null)
          ? <button
            className="btn btn-primary"
            onClick={login}>
            Iniciar Sesión
          </button>
          : <button
            className="btn btn-danger"
            onClick={logout}>
            Cerrar Sesión
          </button>
      }
    </div>
  )
}
