import { inputStyles } from "./const";

export const onChangeHelpers = (e, setFormState) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
}

export const getAuthInputs = (inputsHandler) => {
  const {
    email,
    password,
    passwordConfirm,
    handleChange,
    hasAccount
  } = inputsHandler;

  return [
    {
      value: email,
      styles: inputStyles,
      className: "register_input",
      label: "Почта",
      name: 'email',
      type: "email",
      variant: "outlined",
      style: { color: "yellow" },
      onChange: handleChange,
    },
    {
      value: password,
      styles: inputStyles,
      className: "register_input",
      label: "Пароль",
      type: "password",
      name: 'password',
      variant: "outlined",
      onChange: handleChange,
    },
    !hasAccount && {
      value: passwordConfirm,
      styles: inputStyles,
      className: "register_input",
      variant: "outlined",
      name: 'passwordConfirm',
      label: "Подтвердите пароль",
      type: "password",
      onChange: handleChange,
    },
  ].filter(Boolean);
};
