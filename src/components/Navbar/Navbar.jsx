import React from "react";
import "../Navbar/Navbar.css";
import "../Navbar/NavbarAdaptive.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./NavbarImages/LogoNameWhite (1).png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

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
  // { name: "Выбрать фильм ", link: "/productList", id: 2 },
  // { name: "AdminPage", link: "/admin", id: 3 },
  // { name: "Оформить подписку", link: "/formOrder", id: 4 },
  // { name: "Зарегестрироваться", link: "/auth", id: 5 },
];
// ! links----------------------------------------------------------

const Navbar = () => {
  return (
    <div className="main-nav">
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

      <Link className="productList-nav-link" to="/productList">
        Выбрать фильм
      </Link>

      <Link className="admin-nav-link" to="/admin">
        Админ
      </Link>

      <Link className="formOrder-btn" to="/auth">
        Оформить подписку
      </Link>

      <Link className="auth-btn" to="/auth">
        Зарегестрироваться
      </Link>

      <div id="burger-menu">
        <div id="wrapper">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
