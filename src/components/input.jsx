import React from "react";


const Input=({title,type, changeEvent,placeholder})=>{
  return(
    <div className="mb-3 col-8 text-start">
      <h4>{title}</h4>
      <input
        onChange={changeEvent}
        type={type}
        className="form-control"
        placeholder={placeholder}
        
      />
      </div>      
  );
};

export default Input;