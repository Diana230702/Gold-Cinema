export const authInitialState = {
  email: "",
  password: "",
  passwordConfirm: "",
  lastName: "",
  firstName: "",
  hasAccount: true,
};

export const inputStyles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
};

export const authContainerProps = {
  className: "form_register",
  component: "form",
  sx: {
    width: "50vw",
    margin: "5vh auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "30px",
    padding: "20px",
  },
  noValidate: true,
  autoComplete: "off",
};
