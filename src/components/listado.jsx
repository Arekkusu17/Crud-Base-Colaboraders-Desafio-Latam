import React from "react";
import ListItem from "./listItem";

const Listado=({title,mapColaboradores})=>{
  const listarColaboradores=mapColaboradores.map(({id,name,email})=>{
    
    return(
      <ListItem key={id} name={name} email={email} />
    );
  }
  );

  return(
    <div className="text-start">
      <h2>{title}</h2>
      {/* <ol>{listarColaboradores}</ol> */}
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
      
    </tbody></table>


    </div>
  );
};

export default Listado;