import React from "react";

const ErrorBanner=({message})=>{
  return(
  <div className="alert alert-danger col-12" role="alert">
  {message}
  </div>
)}

export default ErrorBanner