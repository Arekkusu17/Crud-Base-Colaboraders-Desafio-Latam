import React from "react";

const ErrorBanner=({message})=>{
  return(
  <div className="alert alert-danger col-8" role="alert">
  {message}
  </div>
)}

export default ErrorBanner