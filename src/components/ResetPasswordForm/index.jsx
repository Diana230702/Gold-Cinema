import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import '../ResetPasswordForm/style.css'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const initState = {
  password: "",
  password_confirm: '',
  forgot_password_reset: "",
};

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const { resetPasswordRequest } = useAuth();
  const [form, setForm] = useState(initState);

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    resetPasswordRequest(form, () => {
      setForm(initState);
      alert("Пароль изменен");
      navigate("/auth");
    });
  };

  return (
    <Box className="resetWrapper" component="form" onSubmit={onSubmit}>
      <CatchingPokemonIcon sx={{ m: 1 }}/>
      <TextField
        name="forgot_password_reset"
        placeholder="Вставьте код с сообщения сюда"
        onChange={onChange}
        value={form.forgot_password_reset}
      />
      <TextField
        name="password"
        placeholder="Новый пароль"
        onChange={onChange}
        value={form.password}
      />
      <TextField
        name="password_confirm"
        placeholder="Подтвердите новый пароль"
        onChange={onChange}
        value={form.password_confirm}
      />
      <Button type="submit">
        Сбросить
      </Button>
    </Box>
  );
};

export default ResetPasswordForm;
