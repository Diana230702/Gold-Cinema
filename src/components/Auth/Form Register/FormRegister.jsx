import React from "react";

const FormRegister = () => {
  return (
    <div>
      <form>
        <h3>Регистрация</h3>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
      </form>
    </div>
  );
};

export default FormRegister;
