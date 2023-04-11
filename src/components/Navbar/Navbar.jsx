import React from "react";
import "../Navbar/Navbar.css";
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
  { name: "Выбрать фильм", link: "/productList", id: 2 },
  { name: "AdminPage", link: "/admin", id: 3 },
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
    </div>
  );
};

export default Navbar;
