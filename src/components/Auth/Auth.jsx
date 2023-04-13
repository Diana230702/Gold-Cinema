import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";

import { useAuth } from "../../contexts/auth/AuthProvider";

import { authContainerProps, authInitialState } from "./const";
import { getAuthInputs, onChangeHelpers } from "./helpers";

export default function AuthForm() {
  const navigate = useNavigate();
  const { registerRequest, loginRequest } = useAuth();
  const [formState, setFormState] = useState(authInitialState);

  const handleChange = useCallback(
    (e) => onChangeHelpers(e, setFormState),
    [formState]
  );

  const handleHasAccount = () => {
    setFormState((prevState) => ({
      ...prevState,
      hasAccount: !prevState.hasAccount,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirm, hasAccount } = formState;

    if (!email || !password || (!hasAccount && !passwordConfirm)) {
      alert("Заполните все поля!");
    } else {
      if (password !== passwordConfirm && !hasAccount) {
        alert("Пароли не совпадают");
      }

      const newUser = {
        email,
        password,
      };

      if (hasAccount) {
        loginRequest(newUser, () => {
          alert("Вы авторизовались");
          navigate('/')
        });
      } else {
        newUser.password_confirm = formState.passwordConfirm;
        registerRequest(newUser, () => {
          alert("Вы зарегистрировались, можете авторизоваться");
          handleHasAccount();
        });
      }

      setFormState(authInitialState);
    }
  };

  const authInputsProps = useMemo(
    () => ({
      email: formState.email,
      password: formState.password,
      passwordConfirm: formState.passwordConfirm,
      hasAccount: formState.hasAccount,
      handleChange,
    }),
    [
      formState.email,
      formState.password,
      formState.passwordConfirm,
      formState.hasAccount,
    ]
  );

  return (
    <div id="form_reigister">
      <Container>
        <h1 style={{ textAlign: "center" }}>
          {formState.hasAccount ? "Авторизация" : "Регистрация"}
        </h1>
        <Box {...authContainerProps} onSubmit={handleSave}>
          {getAuthInputs(authInputsProps).map((input, index) => {
            return <TextField key={index} {...input} />;
          })}
          <Button type="submit">
            {formState.hasAccount ? "Войти" : "Зарегистрироваться"}
          </Button>
          <Button onClick={handleHasAccount} type="button">
            {!formState.hasAccount ? "Уже есть аккаунт?" : "Нету аккаунта?"}
          </Button>
        </Box>
      </Container>
    </div>
  );
}
