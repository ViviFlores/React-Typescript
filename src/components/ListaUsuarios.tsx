import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListaUsuarios, Usuario } from "../interfaces/interfacesReqres";

export const ListaUsuarios = () => {

    //hook useState: cambiar el estado del arreglo
    const [users, setUsers] = useState<Usuario[]>([]);

    //hook useEffect
    useEffect(() => {
        //llamar al API listar los usuarios
        reqResApi.get<ReqResListaUsuarios>('/users').then(resp => {
            //console.log(resp.data.data);
            //Modificar el arreglo por la data del API
            setUsers(resp.data.data);
        }).catch(console.log);
    }, []);

    //Función que muestre en cada fila de la tabla a los usuarios
    const itemUsuario = ({first_name, last_name, email, avatar}: Usuario) => {
        return (
            <tr>
                <td>
                    <img src={avatar}/>
                </td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usuario) => itemUsuario(usuario))
                    }
                </tbody>
            </table>
        </div>
    )
}
