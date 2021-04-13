import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/assests.svg";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        <h3>SHOP</h3>
      </Link>
      <Link className="option" to="/contact">
        <h3>CONTACT</h3>
      </Link>
    </div>
  </div>
);

export default Header;
