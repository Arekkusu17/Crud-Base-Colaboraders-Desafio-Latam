import React from "react";

const Button =({type})=>{
  return(
  <div className="text-start container col-2 d-flex flex-column justify-content-center">
    <button type={type} className="btn btn-primary ">Agregar</button>
  </div>
)}

export default Button