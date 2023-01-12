import React from "react";
import Button from "./button";

const ListItem=({name,email})=>{
  return(
    // <li className="list-group-item" >
    //   {name} - {email}
    // </li>
    <tr>
        
        <td>{name}</td>
        <td>{email}</td>
        <td className="d-flex w"><button type="button" >Eliminar</button></td>
        </tr>
  )
}

export default ListItem