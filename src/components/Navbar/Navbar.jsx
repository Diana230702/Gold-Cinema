import React from "react";
import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./NavbarImages/LogoNameWhite (1).png";

// ! links----------------------------------------------------------
const pages = [
  {
    name: <img className="logo" src={logo} alt="" />,
    link: "/",
    id: 1,
  },
  { name: "AdminPage", link: "/admin", id: 2 },
  { name: "ProductList", link: "/productList", id: 3 },
];
// ! links----------------------------------------------------------

const Navbar = () => {
  return (
    <div className="navbar">
      {pages.map((page) => (
        <Link sx={{ fontSize: "30px" }} key={page.id} to={page.link}>
          {page.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
