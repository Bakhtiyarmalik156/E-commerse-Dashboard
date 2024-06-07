import React from "react";
import "./Footer.css";

const Footer = () => {
  const auth  = localStorage.getItem("user")
  return (
    <div>
      {
        auth ? (
         <h3 className="txt">
          E-Commerce DashBoard
         </h3>
        ) : (
         <h3></h3>
        )
      }
    </div>
  );
};

export default Footer;
