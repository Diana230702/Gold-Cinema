import "../Navbar/Navbar.css";
import "../Navbar/NavbarAdaptive.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./NavbarImages/LogoNameWhite (1).png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { useAuth } from "../../contexts/auth/AuthProvider";
import { Button } from "@mui/material";

import { TurnedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useFavorite } from "../../contexts/FavoriteContextProvider";
import { useEffect } from "react";

const LinkStyle = {
  listStyleType: "none",
  textDecoration: "none",
  color: "white",
};

const ADMIN = '{"user":"admin@gmail.com"}';

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
  const { isAuth, logOut } = useAuth();
  // console.log();
  const userEmail = localStorage.getItem("user");
  console.log(userEmail);

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

      {userEmail === ADMIN ? (
        <Link className="admin-nav-link" to="/admin">
          Админ
        </Link>
      ) : null}

      {isAuth && (
        <IconButton onClick={() => navigate("/cart")}>
          <TurnedIn sx={{ color: "white" }} />
        </IconButton>
      )}

      {isAuth && (
        <Link className="formOrder-btn" to="/formOrder">
          Поддержать нас
        </Link>
      )}

      {isAuth ? (
        <Button onClick={logOut}>Выйти</Button>
      ) : (
        <Link className="auth-btn" to="/auth">
          Зарегистрироваться
        </Link>
      )}
      <div id="burger-menu">
        <div id="wrapper">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
