import React from "react";
import ListItem from "./listItem";

const Listado=({title,mapColaboradores,onHandleDelete})=>{
  const listarColaboradores=mapColaboradores.map(({id,name,email})=>{
    
    return(
      <ListItem key={id} id={id} name={name} email={email} HandleDelete={onHandleDelete}/>
    );
  }
  );

  return(
    <div className="text-start mt-3">
      <h2>{title}</h2>
      <table className="table">
        <thead>
          <tr>        
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {listarColaboradores}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;