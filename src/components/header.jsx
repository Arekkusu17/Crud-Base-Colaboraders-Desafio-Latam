import React from "react";
import Search from "./search";

const Header=({valueSearch,handleSearch})=>{
  return(
    <header>
      <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand ps-3 mb-0 h1">Base de Colaboradores</span>
      <Search valueSearch={valueSearch} handleSearch={handleSearch}/>
      </div>
    </nav>
    </header>
  )
}

export default Header;