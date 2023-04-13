import React from "react";
import "../Navbar/Navbar.css";
import "../Navbar/NavbarAdaptive.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./NavbarImages/LogoNameWhite (1).png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { IconButton } from "@mui/material";

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
];
// ! links----------------------------------------------------------

const Navbar = () => {
  const navigate = useNavigate();
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

      <IconButton onClick={() => navigate("/cart")}>
        <TurnedInIcon sx={{ color: "white" }} />
      </IconButton>

      <Link className="formOrder-btn" to="/formOrder">
        Оформить подписку
      </Link>

      <Link className="auth-btn" to="/register">
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
