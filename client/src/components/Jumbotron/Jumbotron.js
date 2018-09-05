import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" , background: "linear-gradient(35px, #CCFFFF, #FFCCCC) !important"
}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
