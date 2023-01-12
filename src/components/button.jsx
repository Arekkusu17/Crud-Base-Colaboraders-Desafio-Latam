import React from "react";

const Button =({type})=>{
  return(
  <div className="text-start">
    <button type={type} className="btn btn-primary col-6">Agregar</button>
  </div>
)}

export default Button