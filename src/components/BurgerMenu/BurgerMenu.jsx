import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import ProductList from "../products/ProductList";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ProductListPage = (e) => {
    navigate("/productList");
    setAnchorEl(null);
  };

  const formOrderPage = (e) => {
    navigate("/formOrder");
    setAnchorEl(null);
  };

  const AdminPage = (e) => {
    navigate("/admin");
    setAnchorEl(null);
  };

  const AuthPage = (e) => {
    navigate("/register");
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white", fontSize: "30px" }}
      >
        ≡
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={ProductListPage}>Выбрать фильм</MenuItem>
        <MenuItem onClick={AdminPage}>Админ</MenuItem>
        <MenuItem onClick={formOrderPage}>Оформить подписку</MenuItem>
        <MenuItem onClick={AuthPage}>Зарегестрироваться</MenuItem>
      </Menu>
    </div>
  );
}
