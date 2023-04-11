import React from "react";
import "../Navbar/Navbar.css";
import "../Navbar/NavbarAdaptive.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./NavbarImages/LogoNameWhite (1).png";

const LinkStyle = {
  listStyleType: "none",
  textDecoration: "none",
  color: "white",
};

// ! links----------------------------------------------------------
const pages = [
  {
    name: <img className="logo" src={logo} alt="" />,
    link: "/",
    id: 1,
  },
  { name: "Выбрать фильм ", link: "/productList", id: 2 },
  { name: "AdminPage", link: "/admin", id: 3 },
  // { name: "Оформить подписку", link: "/formOrder", id: 4 },
  // { name: "Зарегестрироваться", link: "/auth", id: 5 },
];
// ! links----------------------------------------------------------

const Navbar = () => {
  return (
    <div className="navbar">
      {pages.map((page) => (
        <Link
          style={LinkStyle}
          sx={{ fontSize: "30px" }}
          key={page.id}
          to={page.link}
        >
          {page.name}
        </Link>
      ))}
      <Link className="formOrder-btn" to="/formOrder">
        Оформить подписку
      </Link>

      <Link className="auth-btn" to="/auth">
        Зарегестрироваться
      </Link>
    </div>
  );
};

export default Navbar;
