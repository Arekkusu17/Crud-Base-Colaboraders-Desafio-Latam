import React from "react";

const ListItem=({id,name,email,HandleDelete})=>{
  return(
    <tr key={id} className="align-middle">
        <td>{name}</td>
        <td>{email}</td>
        <td className="d-flex w">
        <button type="button" className="btn btn-danger" onClick={()=>HandleDelete(name)}>Eliminar</button></td>
    </tr>
  )
}

export default ListItem