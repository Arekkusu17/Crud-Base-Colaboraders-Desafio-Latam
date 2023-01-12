import React from "react";


const Input=({title,type, changeEvent,placeholder,value})=>{
  return(
    <div className="mb-3 text-start col-5">
      <h4>{title}</h4>
      <input
        onChange={changeEvent}
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
      />
      </div>      
  );
};

export default Input;