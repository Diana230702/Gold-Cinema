import { Button } from "@mui/material";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import "../ForgotPasswordForm/style.css";
import Avatar from "@mui/material/Avatar";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { forgotPasswordRequest } = useAuth();

  const handleEmail = ({ target: { value } }) => setEmail(value);

  const handleResetPasswordSumbit = (event) => {
    event.preventDefault();
    forgotPasswordRequest(email, () => {
      navigate("/resetPassword");
    });
  };

  return (
    <div className="forgotContainer">
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}/>
      <h1>Восстановление пароля</h1>
         <Box
      className="forgotWrapper"
      component="form"
      onSubmit={handleResetPasswordSumbit}
    >
      <TextField
        value={email}
        onChange={handleEmail}
        placeholder="Напишите свой email"
      />
      <Button type="submit">Отправить ссылку на восстановление</Button>
    </Box>
    </div>
 
  );
};

export default ForgotPasswordForm;
