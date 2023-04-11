import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { navigate } from "../../../helpers/const";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../Form Register/FormRegister.css";
import { authContext, useAuth } from "../../../contexts/AuthContexProvaider";
export default function FormRegister() {
  const { handleRegister } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    if (!email || !password || !passwordConfirm) {
      alert("Заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData);
    }
  };
  console.log(email, password, passwordConfirm);
  return (
    <div id="form_reigister">
      <Container>
        <Box
          className="form_register"
          component="form"
          sx={{
            width: "50vw",
            margin: "5vh auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
            padding: "20px",
          }}
          noValidate
          autoComplete="off"
        >
          <h1 onClick={() => navigate(`/`)}>Регистрация</h1>
          <form action="submit" onSubmit={handleSave}>
            <TextField
              styles={{
                root: {
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  borderRadius: 3,
                  border: 0,
                  color: "white",
                  height: 48,
                  padding: "0 30px",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                },
              }}
              className="register_input"
              label="email"
              type="email"
              variant="outlined"
              style={{ color: "yellow" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className="register_input"
              label="password"
              type="password"
              variant="outlined"
              name="picture"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              className="register_input"
              variant="outlined"
              name="category"
              label="password"
              type="password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />

            <Button>Зарегестрироватся</Button>
            <Button>уже есть аккаунт?</Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}
